import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../axiosWithAuth";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { read } from "fs";


const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts


    useEffect(() => {
      console.log('work!');
      axiosWithAuth().get('/api/colors')
        .then(res => {
          console.log("colors", res);
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
