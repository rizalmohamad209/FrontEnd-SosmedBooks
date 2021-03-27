import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import Populer from "../components/Populer/Populer";
import Content from "../components/Content/Content";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Populer />
        <Content />
      </div>
    );
  }
}
