import React, { Component } from "react";
import axios from "axios";
import Navbar from "../components/Navbar/Navbar";
import img from "../assets/images/image 12.png";

export default class Description extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    let id = this.props.match.params.id;
    console.log("====================================");
    console.log(id);
    console.log("====================================");
    axios.get("https://books-sosmed.herokuapp.com/books/" + id).then((res) => {
      console.log("====================================");
      console.log(res.data);
      console.log("====================================");
      this.setState({ books: res.data.data });
    });
  }
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
                      src={img}
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
                      <a
                        href=" "
                        className="btn btn-primary rounded-pill"
                        style={{ width: "130px" }}
                      >
                        Borrow
                      </a>
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
      </div>
    );
  }
}
