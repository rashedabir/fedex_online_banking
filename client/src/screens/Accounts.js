import React from "react";
import { Link } from "react-router-dom";
import debitCard from "../assets/Debit-Card-Front-2.png";
import noFees from "../assets/no-fees.png";
import SWIS from "../assets/SWIS-1.png";
import atmImage from "../assets/ATM-Image-08312021-approved.png";
import atmLocation from "../assets/atm-locations.png";
import cardSecurity from "../assets/Card-Security.png";
import pay from "../assets/Pays.png";
import Footer from "../components/Footer";

function Accounts() {
  return (
    <div className="container">
      <div className="row align-items-center p-5 my-5">
        <div className="col-lg-7 px-5">
          <p style={{ color: "#7c778c" }}>Fedex Debit Card</p>
          <h2 className="heading">
            Fedex Spending Account and Visa® Debit Card
          </h2>
          <p>
            Your Chime Spending Account comes with a debit card, no monthly fees
            or maintenance fees.
          </p>
          <div className="d-flex my-5">
            <input
              className="form-control me-3 px-3"
              placeholder="Enter E-mail"
              style={{ width: "250px", borderRadius: "25px" }}
            />
            <Link to="/register" className="btn register_btn">
              Get Started
            </Link>
          </div>
          <Link to="/login">Already have an account?</Link>
        </div>
        <div className="col-lg-5">
          <img src={debitCard} alt="" width="100%" className="ps-5" />
        </div>
      </div>
      <div className="row align-items-center p-5 my-5 bg-light">
        <div className="col-lg-5">
          <img src={noFees} alt="" width="80%" />
        </div>
        <div className="col-lg-7">
          <h3 className="heading">
            Forget about confusing fees for using your Debit Card or Spending
            Account
          </h3>
          <p>
            Our debit card works everywhere Visa debit cards are accepted. And
            unlike some prepaid cards and traditional bank accounts, there are
            no monthly account fees and minimum balance requirements.
            Out-of-network cash withdrawal fees apply.
          </p>
        </div>
      </div>
      <div className="row align-items-center p-5 my-5">
        <div className="col-lg-6">
          <h3 className="heading">Grow your savings as you spend</h3>
          <p>
            Saving money is a no-brainer through Chime online banking. Every
            time you swipe your debit card, we round up to the nearest dollar
            and transfer the round-up from your Spending Account straight into
            your Savings Account. A magical, little way to make your money grow
            over time.
          </p>
        </div>
        <div className="col-lg-6">
          <img src={SWIS} alt="" width="100%" className="ms-5 ps-5" />
        </div>
      </div>
      <div className="row align-items-center p-5 my-5 bg-light">
        <div className="col-lg-5">
          <img src={atmImage} alt="" width="60%" className="ms-5 ps-5" />
        </div>
        <div className="col-lg-7">
          <h3 className="heading">60,000+ fee-free ATMs at stores you love1</h3>
          <p>
            Avoid out of network ATM fees. With Chime, you get access to 60,000+
            fee-free ATMs—more than the top 3 national banks combined! Find them
            at stores you love, like Walgreens®, CVS®, and 7-Eleven®. You can
            also use the map in your Chime app to find the closest fee-free ATM
            near you.
          </p>
          <img src={atmLocation} alt="" width="50%" />
        </div>
      </div>
      <div className="row align-items-center p-5 my-5">
        <div className="col-lg-6">
          <h3 className="heading">You’re always in control</h3>
          <p>
            Can’t find your Chime debit card? No worries. You can instantly
            disable transactions in the app. No need to call us or explain
            yourself. And if you need a replacement card, just let us know.
            Debit card replacement is always free!
          </p>
        </div>
        <div className="col-lg-6">
          <img src={cardSecurity} alt="" width="100%" className="ms-5 ps-5" />
        </div>
      </div>
      <div className="row align-items-center p-5 my-5 bg-light">
        <div className="col-lg-5">
          <img src={pay} alt="" width="100%" />
        </div>
        <div className="col-lg-7">
          <h3 className="heading">We love mobile payments</h3>
          <p>
            We support mobile payment platforms including Apple Pay™ and Google
            Pay™. Combining your Chime debit card with mobile pay means you can
            leave your wallet at home.
          </p>
        </div>
      </div>
      <div
        className="text-center p-5 my-5"
        style={{ background: "#3f077e", color: "white" }}
      >
        <h3 className="text-center heading">Get Started Today</h3>
        <p>
          Applying for an account is free and takes less than 2 minutes with no
          impact to your credit score.
        </p>
        <div className="d-flex my-5 mx-auto text-center justify-content-center">
          <input
            className="form-control me-3 px-3"
            placeholder="Enter E-mail"
            style={{ width: "300px", borderRadius: "25px" }}
          />
          <Link to="/register" className="btn btn-dark px-5 rounded-pill">
            Get Started
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Accounts;
