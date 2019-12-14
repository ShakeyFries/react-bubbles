import React, { useState } from "react";
import { axiosWithAuth } from "../axiosWithAuth";
import { render } from "react-dom";
import axios from "axios";

const Login = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/api/login', credentials)
      .then(res => {
        console.log("cd: Login.js: Login: login then: res: ", res);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/protected");
      })
      .catch(err =>
        console.log("cd: Login.js: Login: login then: err: ", err.message)
      );
  };
  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <form onSubmit={login}>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button type="submi'">Log in</button>
      </form>
    </div>
  );
};

export default Login;
