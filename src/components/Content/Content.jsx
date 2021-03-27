import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Content extends Component {
  state = {
    books: [],
  };
  componentDidMount() {
    axios.get("https://books-sosmed.herokuapp.com/books").then((res) => {
      console.log("====================================");
      console.log(res.data.data);
      console.log("====================================");
      this.setState({ books: res.data.data });
    });
  }

  render() {
    const { books } = this.state;
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-5 col-md-10 kntl mt-5">
              <h5>Browse</h5>
              <div className="row d-flex">
                {books.map((book, index) => {
                  return (
                    <div className="col-6 col-md-4" key={index}>
                      <div
                        className="card-books mb-3"
                        style={{ maxWidth: "540px" }}
                      >
                        <div className="row no-gutters">
                          <div className="col-12 col-md-4">
                            <Link to={`descriptionlogin/${book.id_books}`}>
                              <img
                                src="https://res.cloudinary.com/dk4dgvu4w/image/upload/v1616833904/image_12_ukb1tb.png"
                                className="cover"
                                style={{ width: "100px", height: "170px" }}
                                alt="..."
                              />
                            </Link>
                          </div>
                          <div className="col-12 col-md-8">
                            <div className="card-body">
                              <p className="card-title font-weight-bold">
                                {book.title}
                              </p>
                              <p className="card-text">{book.author}</p>
                              <div className="bintang">
                                <img
                                  src="https://res.cloudinary.com/dk4dgvu4w/image/upload/v1616833903/Group_1_phx7qu.png"
                                  style={{ width: "70px", height: "20px" }}
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-7 col-md-2 kntl2 mt-5">
              <h5 className="category-text">Category</h5>
              <div className="row category">
                <div className="col-md-12 mt-3">
                  <Link
                    to="/category"
                    className="text-dark"
                    style={{ textDecoration: "none", listStyle: "none" }}
                  >
                    <img
                      src="https://res.cloudinary.com/dk4dgvu4w/image/upload/v1616833903/Group_18_q14u7x.png"
                      style={{ width: "30px", height: "30px" }}
                      alt=""
                    />
                    <p style={{ display: "inline-block" }}>Technology</p>
                  </Link>
                </div>
                <div className="col-md-12 mt-3">
                  <Link
                    to="/category"
                    className="text-dark"
                    style={{ textDecoration: "none", listStyle: "none" }}
                  >
                    <img
                      src="https://res.cloudinary.com/dk4dgvu4w/image/upload/v1616833903/Group_17_revzwk.png"
                      style={{ width: "30px", height: "30px" }}
                      alt=""
                    />
                    <p style={{ display: "inline-block" }}>History</p>
                  </Link>
                </div>
                <div className="col-md-12 mt-3">
                  <Link
                    to="/category"
                    className="text-dark"
                    style={{ textDecoration: "none", listStyle: "none" }}
                  >
                    <img
                      src="https://res.cloudinary.com/dk4dgvu4w/image/upload/v1616833904/Group_16_uw9ysn.png"
                      style={{ width: "30px", height: "30px" }}
                      alt=""
                    />
                    <p style={{ display: "inline-block" }}>Politic</p>
                  </Link>
                </div>
                <div className="col-md-12 mt-3">
                  <Link
                    to="/category"
                    className="text-dark"
                    style={{ textDecoration: "none", listStyle: "none" }}
                  >
                    <img
                      src="https://res.cloudinary.com/dk4dgvu4w/image/upload/v1616833904/Group_15_phnacs.png"
                      style={{ width: "30px", height: "30px" }}
                      alt=""
                    />
                    <p style={{ display: "inline-block" }}>Romance</p>
                  </Link>
                </div>
                <div className="col-md-12 mt-3">
                  <Link
                    to="/category"
                    className="text-dark"
                    style={{ textDecoration: "none", listStyle: "none" }}
                  >
                    <img
                      src="https://res.cloudinary.com/dk4dgvu4w/image/upload/v1616833904/Group_14_uod0kz.png"
                      style={{ width: "30px", height: "30px" }}
                      alt=""
                    />
                    <p style={{ display: "inline-block" }}>Science</p>
                  </Link>
                </div>
                <div className="col-md-12 mt-3">
                  <Link
                    to="/category"
                    className="text-dark"
                    style={{ textDecoration: "none", listStyle: "none" }}
                  >
                    <img
                      src="https://res.cloudinary.com/dk4dgvu4w/image/upload/v1616833904/Group_13_rfpicq.png"
                      style={{ width: "30px", height: "30px" }}
                      alt=""
                    />
                    <p style={{ display: "inline-block" }}>Sports</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
