import React, { Component } from "react";
import Navbar from "../components/Navbar/LoginNavbar";
import Populer from "../components/Populer/Populer";
import Content from "../components/Content/Content";

export default class HomeNotLogin extends Component {
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
