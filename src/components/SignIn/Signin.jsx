import React, { Component } from "react";
import Logo from "../../assets/images/Logo.svg";
import { Link } from "react-router-dom";
import "./Signin.css";

export default class Signin extends Component {
  render() {
    return (
      <div>
        <div className="login">
          <div className="row">
            <div className="col-12 col-md-3 item1">
              <div className="container">
                <div className="ctn text-center">
                  <div className="logo" style={{ marginTop: "130px" }}>
                    <img src={Logo} alt="" />
                  </div>
                  <div className="desc">
                    <h3 className="mt-5 text-white">Hello, Pluginers</h3>
                    <h5 className="mt-5 text-white">
                      Enter your personal details <br />
                      and start journey with us
                    </h5>
                  </div>
                  <Link
                    to="sign-up"
                    href="signup.html"
                    className="btn btn-outline-light rounded-pill mt-5"
                    style={{ width: "150px" }}
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-9 item2 mx-auto">
              <div className="page-login text-center">
                <div className="container">
                  <h2 className="text-primary py-5 mt-5">
                    Sign In to Plugin Books
                  </h2>
                  <form className="form-group">
                    <div className="col-md-5 mx-auto mt-5 masuk">
                      <input
                        type="email"
                        style={{ height: "50px" }}
                        className="form-control rounded-pill border-primary"
                        id="exampleInputEmail1"
                        placeholder="Email"
                        aria-describedby="emailHelp"
                      />
                      <input
                        type="email"
                        style={{
                          height: "50px",
                          backgroundImage: 'url("../assets/images/eye2.png")',
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "30px",
                          backgroundPositionY: "9px",
                          backgroundPositionX: "300px",
                        }}
                        className="form-control rounded-pill mt-4 border-primary"
                        id="exampleInputEmail1"
                        placeholder="Password"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <Link
                      to="/home"
                      className="text-center rounded-pill btn btn-primary mt-5"
                      style={{ width: "150px" }}
                    >
                      Sign In
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
