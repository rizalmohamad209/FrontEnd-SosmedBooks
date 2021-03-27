import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.svg";
import User from "../../assets/images/user.png";
import "./index.css";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="bg-light d-flex" style={{ height: "75px" }}>
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-7 col-md-5 mt-3 justify-content-center">
                <div className="search">
                  <form className="form-inline">
                    <Link to="/search">
                      <input
                        name="title"
                        className="form-control mr-sm-5 mb-3 rounded-pill search d-inline-block"
                        style={{ width: "100%" }}
                        type="search"
                        placeholder="Search"
                      />
                    </Link>
                    <FontAwesomeIcon
                      style={{ marginTop: "-15px" }}
                      icon={faSearch}
                    />
                  </form>
                </div>
              </div>
              <div className="wrap-logo mt-1">
                <img
                  src={Logo}
                  style={{
                    width: "60px",
                    height: "60px",
                    marginLeft: "-300px",
                  }}
                  alt=""
                />
              </div>
              <Link to="/profile">
                <img
                  src={User}
                  alt=""
                  style={{
                    height: "50px",
                    marginRight: "20px",
                    marginTop: "15px",
                  }}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
