import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "http://localhost:5000/api",
    header: {
      "Content-Type": "application/json", 
      "Authoriziation": `${token}`, 
    }
  });
};