import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

export default class DescriptionLogin extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mt-5 mb-5">
                <div className="row no-gutters">
                  <div className="col-12 col-md-3 text-center">
                    <img
                      className="text-sm-center"
                      src="https://res.cloudinary.com/dk4dgvu4w/image/upload/v1616833904/image_12_ukb1tb.png"
                      alt="..."
                      style={{ width: "250px", height: "350px" }}
                    />
                  </div>
                  <div className="col-12 col-md-7">
                    <div className="card-body">
                      <h2 className="card-title">
                        At The Going Down of the Sun
                      </h2>
                      <h4 className="card-text text-secondary">
                        Marius Oelsching
                      </h4>
                      <img
                        className="d-block mb-3"
                        src="./assets/img/Group 1.png"
                        alt=""
                      />
                      <p className="font-weight-bolder">
                        Publsiher
                        <span
                          className="font-weight-light"
                          style={{ marginLeft: "20px" }}
                        >
                          Gramedia Pustaka Utama
                        </span>
                      </p>
                      <p className="font-weight-bolder">
                        ISBN
                        <span
                          className="font-weight-light"
                          style={{ marginLeft: "55px" }}
                        >
                          9786020385914
                        </span>
                      </p>
                      <p className="font-weight-bolder">
                        Pages
                        <span
                          className="font-weight-light"
                          style={{ marginLeft: "47px" }}
                        >
                          367
                        </span>
                      </p>
                      <Link
                        to="/borrow"
                        className="btn btn-primary rounded-pill"
                        style={{ width: "130px" }}
                      >
                        Borrow
                      </Link>
                      <a
                        href=" "
                        className="btn btn-outline-primary ml-2 rounded-pill"
                        style={{ width: "130px" }}
                      >
                        Chat
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wrap-description">
            <h4>Description</h4>
            <div className="col-md-12">
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ultricies purus vitae metus egestas etiam vestibulum id aenean.
                Diam, in mi ac eget elit. Pellentesque ut et placerat integer
                venenatis, urna. Elementum in erat sit elit. Velit eget neque
                consectetur nunc aliquam at. Adipiscing lectus egestas semper
                vitae, sed tellus. At cursus quam bibendum faucibus sit blandit.
                Habitasse pulvinar ullamcorper elementum vitae vestibulum aenean
                semper diam. Gravida diam sit quisque nulla.
              </p>
            </div>
          </div>
        </div>
        {/* end description */}
        {/* Diskusi */}
        <div className="container mt-5">
          <h4>Discussion</h4>
          <div className="wrap-input-diskusi">
            <div className="row">
              <div className="col-2 col-md-1">
                <img
                  src="https://res.cloudinary.com/dk4dgvu4w/image/upload/v1616833903/user_xobizy.png"
                  style={{ width: "50px", height: "50px" }}
                  alt=""
                />
              </div>
              <div className="col-10 col-md-11">
                <input
                  name="title"
                  className="form-control mr-sm-5 rounded-lg search d-inline"
                  style={{ width: "100%", height: "100px" }}
                  type="search"
                  placeholder="Type Here"
                />
              </div>
            </div>
          </div>
          <button
            href="#"
            className="btn btn-primary float-right mt-2"
            style={{ width: "130px" }}
          >
            Send
          </button>
        </div>
        {/* End Diskusi */}
        {/* Chat */}
        <div className="container mt-5">
          <h4>Total 777</h4>
          <div className="row">
            <div className="col-2 col-md-1">
              <img
                src="https://res.cloudinary.com/dk4dgvu4w/image/upload/v1616833903/user_xobizy.png"
                style={{ width: "50px", height: "50px" }}
                alt=""
              />
            </div>
            <div className="col-10 col-md-11">
              <p className="font-weight-bold mt-2">Rizal Mohamad</p>
              <p className="text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ultricies purus vitae metus egestas etiam vestibulum id aenean.
                Diam, in mi ac eget elit. Pellentesque ut et placerat integer
                venenatis, urna.
              </p>
            </div>
            <div className="col-2 col-md-1">
              <img
                src="https://res.cloudinary.com/dk4dgvu4w/image/upload/v1616833903/user_xobizy.png"
                style={{ width: "50px", height: "50px" }}
                alt=""
              />
            </div>
            <div className="col-10 col-md-11">
              <p className="font-weight-bold mt-2">Rizal Mohamad</p>
              <p className="text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ultricies purus vitae metus egestas etiam vestibulum id aenean.
                Diam, in mi ac eget elit. Pellentesque ut et placerat integer
                venenatis, urna.
              </p>
            </div>
            <div className="col-2 col-md-1">
              <img
                src="https://res.cloudinary.com/dk4dgvu4w/image/upload/v1616833903/user_xobizy.png"
                style={{ width: "50px", height: "50px" }}
                alt=""
              />
            </div>
            <div className="col-10 col-md-11">
              <p className="font-weight-bold mt-2">Rizal Mohamad</p>
              <p className="text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ultricies purus vitae metus egestas etiam vestibulum id aenean.
                Diam, in mi ac eget elit. Pellentesque ut et placerat integer
                venenatis, urna.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
