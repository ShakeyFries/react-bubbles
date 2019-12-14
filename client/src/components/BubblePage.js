import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../axiosWithAuth";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { read } from "fs";


const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts

    useEffect(() => {
      axiosWithAuth()
        .get("http://localhost:5000/api/colors")
        .then(res => {
          console.log("colors",res.data);
          setColorList(res.data);
        })
        .catch(err => console.log(err.message));
    }, []);
  // set that data to the colorList state property

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
