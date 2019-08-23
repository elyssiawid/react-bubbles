import React, { useState, useEffect } from "react";
import axios from "axios";
import Bubbles from "./Bubbles";
import axiosWithAuth from "../utils/axiosWithAuth";
import ColorList from "./ColorList";

class BubblePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorList: []
    };
  }
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  componentDidMount() {
    // prettier-ignore
    var config = {
      headers: {
        'authorization': localStorage.getItem("token")
      }
    };
    axios
      .get("http://localhost:5000/api/colors", config)
      .then(function(response) {
        // handle success
        console.log(response);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }

  render() {
    return (
      <>
        {/* <ColorList colors={this.state.colorList} updateColors={(setColorList)} /> */}
        <ColorList colors={this.state.colorList} />
        <Bubbles colors={this.state.colorList} />
      </>
    );
  }
}

export default BubblePage;
