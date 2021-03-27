import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

export default class UploadBooks extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="d-flex">
          <Sidebar style={{ position: "fixed" }} />
          <div id="content" style={{ width: "100%" }}>
            <div className="container">
              <h4 className="text-dark fw-bold mb-5">Upload Books</h4>
              <form className="form-group">
                <div className="col-12 col-md-10 mx-auto mt-5 masuk">
                  <label htmlFor>Title</label>
                  <input
                    type="email"
                    style={{ height: "50px" }}
                    className="form-control email rounded-pill bg-transparent border-secondary mb-3"
                    id="exampleInputEmail1"
                    placeholder="Kamen Rider Riyuki"
                    aria-describedby="emailHelp"
                  />
                  <label htmlFor>Creator</label>
                  <input
                    type="email"
                    style={{ height: "50px" }}
                    className="form-control email rounded-pill bg-transparent border-secondary mb-3"
                    id="exampleInputEmail1"
                    placeholder="Riyuki San"
                    aria-describedby="emailHelp"
                  />
                  <label htmlFor>Publisher</label>
                  <input
                    type="email"
                    style={{ height: "50px" }}
                    className="form-control email rounded-pill bg-transparent border-secondary mb-3"
                    id="exampleInputEmail1"
                    placeholder="Gramedia Pustaka Utama"
                    aria-describedby="emailHelp"
                  />
                  <label htmlFor>ISBN</label>
                  <input
                    type="email"
                    style={{ height: "50px" }}
                    className="form-control email rounded-pill bg-transparent border-secondary mb-3"
                    id="exampleInputEmail1"
                    placeholder={9786020385914}
                    aria-describedby="emailHelp"
                  />
                  <label htmlFor>Pages</label>
                  <input
                    type="email"
                    style={{ height: "50px" }}
                    className="form-control email rounded-pill bg-transparent border-secondary mb-3"
                    id="exampleInputEmail1"
                    placeholder="376 Pages"
                    aria-describedby="emailHelp"
                  />
                  <label htmlFor>Upload Gambar</label>
                  <input
                    type="email"
                    style={{
                      height: "100px",
                      backgroundImage: 'url("./assets/img/file.png")',
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "50px",
                      backgroundPosition: "center",
                    }}
                    className="form-control email rounded-right bg-transparent border-secondary mb-3"
                    id="exampleInputEmail1"
                    placeholder="Upload Gambar"
                    aria-describedby="emailHelp"
                  />
                </div>
                <button
                  className="rounded-pill btn btn-primary mt-5 text-white float-right mr-5"
                  style={{ width: "230px" }}
                >
                  Add Books
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
