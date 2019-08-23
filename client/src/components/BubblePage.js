import React, { useState, useEffect } from "react";
import axios from "axios";
import Bubbles from "./Bubbles";
import axiosWithAuth from "../utils/axiosWithAuth";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    var config = {
      headers: {
        authorization: localStorage.getItem("token")
      }
    };
    axios
      .get("http://localhost:5000/api/colors", config)
      .then(function(response) {
        // handle success
        setColorList(response.data);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  });

  console.log(colorList);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
