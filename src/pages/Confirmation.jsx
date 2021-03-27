import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";

export default class Confirmation extends Component {
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
                      <h4 className="card-text text-secondary mt-3">
                        Marius Oelsching
                      </h4>
                      <h6 className="font-weight-bold mt-3">
                        Borrowing Details
                      </h6>
                      <div className="name-borrow d-flex">
                        <p className="card-text">Name</p>
                        <p className="card-text ml-5">Yunianto</p>
                      </div>
                      <div className="date-end d-flex">
                        <p className="card-text">Date End</p>
                        <p className="card-text ml-4">21 March 2021</p>
                      </div>
                      <div className="name-borrow d-flex">
                        <p className="card-text">Note</p>
                        <p className="card-text ml-5 px-2">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Accusamus porro ratione a odio natus doloribus
                          quam laborum veritatis.
                        </p>
                      </div>
                      <div className="button mt-5">
                        <Link
                          className="btn btn-success rounded-pill"
                          style={{ width: "250px" }}
                        >
                          Accept
                        </Link>
                        <Link
                          className="btn btn-danger ml-2 rounded-pill"
                          style={{ width: "250px" }}
                        >
                          Reject
                        </Link>
                      </div>
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
