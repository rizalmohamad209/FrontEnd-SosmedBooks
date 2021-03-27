import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Borrow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
    };
    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date,
    });
  }

  onFormSubmit(e) {
    e.preventDefault();
    console.log(this.state.startDate);
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
                          367 Pages
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h6>Choose Date</h6>
              <div className="wrap-date">
                <div className="input-group ">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-1x fa-calendar-week" />
                    </span>
                    <DatePicker
                      selected={this.state.startDate}
                      onChange={this.handleChange}
                      name="startDate"
                      dateFormat="MM/dd/yyyy"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <h6>Discussion</h6>
              <div className="wrap-diskusi">
                <input
                  type="email"
                  style={{ height: "150px" }}
                  className="form-control email rounded-right bg-transparent mb-3"
                  id="exampleInputEmail1"
                  placeholder="Type Here"
                  aria-describedby="emailHelp"
                />
                <button
                  className="btn btn-primary float-right mb-5 rounded-pill"
                  style={{ marginRight: 0 }}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
