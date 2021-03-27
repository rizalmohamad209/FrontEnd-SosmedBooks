import React, { Component } from "react";
import Slider from "react-slick";
import "./populer.css";

export default class Populer extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      autoplay: true,
      infinite: true,
      centerPadding: "400px",
      slidesToShow: 1,
      speed: 500,
      responsive: [
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 1,
            centerPadding: "30px",
          },
        },
      ],
    };
    return (
      <div>
        <div className="container">
          <h5>Populer </h5>
        </div>
        <div style={{ overflowX: "hidden" }}>
          <Slider {...settings}>
            <div>
              <div
                className="card m-2 badge-linear-red"
                style={{ maxWidth: "540px" }}
              >
                <div className="row no-gutters">
                  <div className="col-12 col-md-4 ">
                    <img
                      src="https://res.cloudinary.com/dk4dgvu4w/image/upload/v1616524645/image_10_rsrvem.png"
                      style={{ width: "150px", height: "200px" }}
                      alt="..."
                      className="padgePadding"
                    />
                  </div>
                  <div className="col-12 col-md-5">
                    <div className="card-body">
                      <h5 className="card-title">
                        {" "}
                        At The Going Down of the Sun
                      </h5>
                      <p className="card-text">Marius Oelsching</p>
                      <p className="card-text">
                        <img
                          src="https://res.cloudinary.com/dk4dgvu4w/image/upload/v1616524644/Group_1_aokrnu.png"
                          style={{ width: "80px", height: "20px" }}
                          alt=""
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                className="card m-2 badge-linear-blue"
                style={{ maxWidth: "540px" }}
              >
                <div className="row no-gutters">
                  <div className="col-12 col-md-4 ">
                    <img
                      src="https://res.cloudinary.com/dk4dgvu4w/image/upload/v1616524645/image_10_rsrvem.png"
                      style={{ width: "150px", height: "200px" }}
                      alt="..."
                      className="padgePadding"
                    />
                  </div>
                  <div className="col-12 col-md-5">
                    <div className="card-body">
                      <h5 className="card-title">
                        {" "}
                        At The Going Down of the Sun
                      </h5>
                      <p className="card-text">Marius Oelsching</p>
                      <p className="card-text">
                        <img
                          src="https://res.cloudinary.com/dk4dgvu4w/image/upload/v1616524644/Group_1_aokrnu.png"
                          style={{ width: "80px", height: "20px" }}
                          alt=""
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                className="card m-2 badge-linear-pink"
                style={{ maxWidth: "540px" }}
              >
                <div className="row no-gutters">
                  <div className="col-12 col-md-4 ">
                    <img
                      src="https://res.cloudinary.com/dk4dgvu4w/image/upload/v1616524645/image_10_rsrvem.png"
                      style={{ width: "150px", height: "200px" }}
                      alt="..."
                      className="padgePadding"
                    />
                  </div>
                  <div className="col-12 col-md-5">
                    <div className="card-body">
                      <h5 className="card-title">
                        {" "}
                        At The Going Down of the Sun
                      </h5>
                      <p className="card-text">Marius Oelsching</p>
                      <p className="card-text">
                        <img
                          src="https://res.cloudinary.com/dk4dgvu4w/image/upload/v1616524644/Group_1_aokrnu.png"
                          style={{ width: "80px", height: "20px" }}
                          alt=""
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                className="card m-2 badge-linear-red"
                style={{ maxWidth: "540px" }}
              >
                <div className="row no-gutters">
                  <div className="col-12 col-md-4 ">
                    <img
                      src="https://res.cloudinary.com/dk4dgvu4w/image/upload/v1616524645/image_10_rsrvem.png"
                      style={{ width: "150px", height: "200px" }}
                      alt="..."
                      className="padgePadding"
                    />
                  </div>
                  <div className="col-12 col-md-5">
                    <div className="card-body">
                      <h5 className="card-title">
                        {" "}
                        At The Going Down of the Sun
                      </h5>
                      <p className="card-text">Marius Oelsching</p>
                      <p className="card-text">
                        <img
                          src="https://res.cloudinary.com/dk4dgvu4w/image/upload/v1616524644/Group_1_aokrnu.png"
                          style={{ width: "80px", height: "20px" }}
                          alt=""
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
