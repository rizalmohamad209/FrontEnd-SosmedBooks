import React, { Component } from "react";
import Logo from "../../assets/images/Logo.svg";
import { Link } from "react-router-dom";
import "./Signup.css";

export default class Signup extends Component {
  render() {
    return (
      <div>
        <div className="login">
          <div className="row">
            <div className="col-12 col-md-9 item1">
              <div className="container">
                <div className="ctn-daftar text-center">
                  <h2 className="text-white py-5 mt-5">
                    Sign Up to Plugin Books
                  </h2>
                  <form className="form-group">
                    <div className="col-md-5 mx-auto mt-5 masuk">
                      <input
                        type="email"
                        style={{ height: "50px" }}
                        className="form-control email rounded-pill bg-transparent border-light"
                        id="exampleInputEmail1"
                        placeholder="Username"
                        aria-describedby="emailHelp"
                      />
                      <input
                        type="email"
                        style={{ height: "50px" }}
                        className="form-control password rounded-pill mt-4 bg-transparent border-light"
                        id="exampleInputEmail1"
                        placeholder="Email"
                        aria-describedby="emailHelp"
                      />
                      <input
                        type="password"
                        style={{
                          height: "50px",
                          backgroundImage: "url(./assets/img/eye2.png)",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "30px",
                          backgroundPositionY: "9px",
                          backgroundPositionX: "300px",
                        }}
                        className="form-control password rounded-pill mt-4 bg-transparent border-light"
                        id="exampleInputEmail1"
                        placeholder="Password"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <Link
                      to="/sign-in"
                      className="rounded-pill btn btn-light mt-5 text-primary"
                      style={{ width: "150px" }}
                    >
                      Sign Up
                    </Link>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 item2 mx-auto">
              <div className="page-login text-center">
                <div className="container">
                  <div className="ctn text-center">
                    <div className="logo" style={{ marginTop: "130px" }}>
                      <img src={Logo} alt="" />
                    </div>
                    <div className="desc">
                      <h3 className="mt-5 text-primary">Hello, Pluginers</h3>
                      <h5 className="mt-5 text-primary">
                        Enter your personal details <br />
                        and start journey with us
                      </h5>
                    </div>
                    <Link
                      to="/sign-in"
                      className="btn btn-outline-primary rounded-pill mt-5"
                      style={{ width: "150px" }}
                    >
                      Sign In
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
