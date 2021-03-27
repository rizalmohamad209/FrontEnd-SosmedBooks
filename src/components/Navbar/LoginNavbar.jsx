import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.svg";

export default class LoginNavbar extends Component {
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
              <Link to="/sign-in">
                <div
                  className="btn btn-outline-secondary rounded-pill mt-3
                  float-right"
                  type="submit"
                  style={{ width: "100px", height: "35px" }}
                >
                  Login
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
