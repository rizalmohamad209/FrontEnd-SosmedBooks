import React, { Component } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";

export default class Profile extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div style={{ display: "flex" }}>
          <Sidebar />
          <div id="content" style={{ width: "100%" }}>
            <div className="container">
              <h1 className="mt-5">Your Profile</h1>
              <div className="row">
                <div className="col-12 col-md-9 mx-auto">
                  <div className="page-login">
                    <div className="container">
                      <div className="cover-profile text-center">
                        <img
                          src="https://res.cloudinary.com/dk4dgvu4w/image/upload/v1616833903/user_xobizy.png"
                          alt=""
                        />
                      </div>
                      <form className="form-group">
                        <div className="col-md-12 mx-auto mt-5 masuk">
                          <label htmlFor>Username</label>
                          <input
                            type="text"
                            style={{ height: "50px" }}
                            className="form-control rounded-pill border-primary"
                            id="exampleInputEmail1"
                            placeholder="Rizal Mohamad"
                            aria-describedby="emailHelp"
                          />
                          <label htmlFor>Email</label>
                          <input
                            type="email"
                            style={{ height: "50px" }}
                            className="form-control rounded-pill  border-primary"
                            id="exampleInputEmail1"
                            placeholder="rizalmohamad@gmail.com"
                            aria-describedby="emailHelp"
                          />
                          <label htmlFor>Password</label>
                          <input
                            type="password"
                            style={{ height: "50px", width: "100%" }}
                            className="form-control rounded-pill border-primary"
                            id="exampleInputEmail1"
                            placeholder="*********"
                            aria-describedby="emailHelp"
                          />
                        </div>
                      </form>
                    </div>
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
