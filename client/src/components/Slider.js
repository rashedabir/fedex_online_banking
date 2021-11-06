import React from "react";
import { Link } from "react-router-dom";
import home1 from "../assets/home1.jpg";
import home2 from "../assets/home2.jpg";
import home3 from "../assets/home3.jpg";

function Slider() {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={home1} className="d-block w-100" alt="..." height="600px" />
          <div className="carousel-caption col-lg-5">
            <div style={{ textAlign: "left", margin: "150px auto" }}>
              <h1>Build credit history with no annual fees or interest</h1>
              <div className="d-flex">
                <input
                  className="form-control me-3 px-3"
                  placeholder="Enter E-mail"
                  style={{ width: "250px", borderRadius: "25px" }}
                />
                <Link to="/register" className="btn register_btn">
                  Get Started
                </Link>
              </div>
              <br />
              <p>
                Chime is a financial technology company, not a bank. Banking
                services provided by The Bancorp Bank or Stride Bank, N.A.;
                Members FDIC
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={home2} className="d-block w-100" alt="..." height="600px" />
          <div className="carousel-caption col-lg-5">
            <div style={{ textAlign: "left", margin: "150px auto" }}>
              <h1>Fee-free overdraft up to $200¹</h1>
              <div className="d-flex">
                <input
                  className="form-control me-3 px-3"
                  placeholder="Enter E-mail"
                  style={{ width: "250px", borderRadius: "25px" }}
                />
                <Link to="/register" className="btn register_btn">
                  Get Started
                </Link>
              </div>
              <br />
              <p>
                Chime is a financial technology company, not a bank. Banking
                services provided by The Bancorp Bank or Stride Bank, N.A.;
                Members FDIC
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={home3} className="d-block w-100" alt="..." height="600px" />
          <div className="carousel-caption col-lg-5">
            <div style={{ textAlign: "left", margin: "150px auto" }}>
              <h1>Get paid up to 2 days early with direct deposit²</h1>
              <div className="d-flex">
                <input
                  className="form-control me-3 px-3"
                  placeholder="Enter E-mail"
                  style={{ width: "250px", borderRadius: "25px" }}
                />
                <Link to="/register" className="btn register_btn">
                  Get Started
                </Link>
              </div>
              <br />
              <p>
                Chime is a financial technology company, not a bank. Banking
                services provided by The Bancorp Bank or Stride Bank, N.A.;
                Members FDIC
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slider;
