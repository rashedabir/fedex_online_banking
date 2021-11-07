import React from "react";
import { Link } from "react-router-dom";
import chimeApp from "../assets/Chime-app.png";
import LandingpageControl from "../assets/Landingpage-control.png";
import paidNotification from "../assets/Paid-Notification-2.png";
import { GiCheckMark } from "react-icons/gi";
import noFees from "../assets/no-fees.png";
import atmImage from "../assets/ATM-Image-08312021-approved.png";
import atmLocation from "../assets/atm-locations.png";
import savings from "../assets/Savings2.png";
import Security_img from "../assets/Security_img.png";
import Footer from "../components/Footer";

function Benefits() {
  return (
    <div className="container">
      <div className="row align-items-center p-5 my-3">
        <div className="col-lg-7">
          <p style={{ color: "#7c778c" }}>Better Online Banking</p>
          <h2 className="heading">Banking made awesome</h2>
          <p>
            Welcome to better online banking through Chime. No hidden fees¹. Get
            paid up to 2 days early with direct deposit.² Grow your savings,
            automatically. Experience the ease and simplicity of online banking.
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
          <img src={chimeApp} alt="" width="100%" className="ps-5" />
        </div>
      </div>
      <div className="bg-light p-5">
        <h3 className="text-center heading">
          Finally, a banking app built by a tech company
        </h3>
        <ul className="mt-5">
          <li className="mb-3 px-5">
            <GiCheckMark
              style={{
                background: "#3f077e",
                color: "white",
                borderRadius: "50%",
                fontSize: "25px",
              }}
              className="p-1 me-3"
            />
            Track your account balances, daily transactions, and savings from
            anywhere with the Chime mobile app.
          </li>
          <li className="mb-3 px-5">
            <GiCheckMark
              style={{
                background: "#3f077e",
                color: "white",
                borderRadius: "50%",
                fontSize: "25px",
              }}
              className="p-1 me-3"
            />
            Turn on balance notifications and instant transaction alerts any
            time you use your Chime Visa® Debit Card.
          </li>
          <li className="mb-3 px-5">
            <GiCheckMark
              style={{
                background: "#3f077e",
                color: "white",
                borderRadius: "50%",
                fontSize: "25px",
              }}
              className="p-1 me-3"
            />
            Send money instantly to friends using Pay Friends on our mobile
            banking app.
          </li>
        </ul>
        <div className="row align-items-center p-5 mt-5 bg-light">
          <div className="col-lg-6">
            <img src={LandingpageControl} alt="" width="80%" />
          </div>
          <div className="col-lg-6">
            <h3 className="heading">An Award-winning Mobile Banking App</h3>
            <p>
              Chime’s mobile banking app enables you to manage all of your
              online banking on the go. With over 135,000+ five star reviews in
              app stores, our mobile app has everything you need with a simple,
              intuitive design.
            </p>
          </div>
        </div>
      </div>
      <div className="row align-items-center p-5 my-5">
        <div className="col-lg-6">
          <h3 className="heading">
            Get Paid Up to 2 Days Early with Direct Deposit²
          </h3>
          <p>
            Tired of waiting for your direct deposit? Open a Chime Spending
            Account, set up Direct Deposit and you’re automatically eligible to
            receive your paycheck up to two days early.²
          </p>
        </div>
        <div className="col-lg-6">
          <img
            src={paidNotification}
            alt=""
            width="100%"
            className="ms-5 ps-5"
          />
        </div>
      </div>
      <div className="bg-light p-5">
        <h3 className="text-center heading">
          Stop waiting and start getting paid early with direct deposit²
        </h3>
        <div className="row">
          <div className="col-lg-6">
            <ul className="mt-5">
              <li className="mb-3">
                <GiCheckMark
                  style={{
                    background: "#3f077e",
                    color: "white",
                    borderRadius: "50%",
                    fontSize: "25px",
                  }}
                  className="p-1 me-3"
                />
                <span>
                  Get a notification as soon as your direct deposit is posted
                  into your Spending Account.
                </span>
              </li>
              <li className="mb-3">
                <GiCheckMark
                  style={{
                    background: "#3f077e",
                    color: "white",
                    borderRadius: "50%",
                    fontSize: "25px",
                  }}
                  className="p-1 me-3"
                />
                Never worry about paychecks getting lost in the mail.
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <ul className="mt-5">
              <li className="mb-3">
                <GiCheckMark
                  style={{
                    background: "#3f077e",
                    color: "white",
                    borderRadius: "50%",
                    fontSize: "25px",
                  }}
                  className="p-1 me-3"
                />
                Get a notification as soon as your direct deposit is posted into
                your Spending Account.
              </li>
              <li className="mb-3">
                <GiCheckMark
                  style={{
                    background: "#3f077e",
                    color: "white",
                    borderRadius: "50%",
                    fontSize: "25px",
                  }}
                  className="p-1 me-3"
                />
                Never worry about paychecks getting lost in the mail.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row align-items-center p-5 my-5">
        <div className="col-lg-5">
          <img src={noFees} alt="" width="80%" />
        </div>
        <div className="col-lg-7">
          <h3 className="heading">No Hidden Fees¹</h3>
          <p>
            Hidden fees are sneaky. We are not. That’s why Chime offers online
            banking with no monthly fees or open deposit required. Applying for
            a Chime online bank account is completely free. There’s no opening
            deposit or minimum balance required, no international transaction
            fees, and if you lose your debit card, the new one’s on us.
          </p>
        </div>
      </div>
      <div className="bg-light p-5">
        <h3 className="text-center heading">Say goodbye to hidden fees¹</h3>
        <div className="row">
          <div className="col-lg-6">
            <ul className="mt-5">
              <li className="mb-3">
                <GiCheckMark
                  style={{
                    background: "#3f077e",
                    color: "white",
                    borderRadius: "50%",
                    fontSize: "25px",
                  }}
                  className="p-1 me-3"
                />
                No monthly fees. No deposit required.
              </li>
              <li className="mb-3">
                <GiCheckMark
                  style={{
                    background: "#3f077e",
                    color: "white",
                    borderRadius: "50%",
                    fontSize: "25px",
                  }}
                  className="p-1 me-3"
                />
                No minimum balance requirements.
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <ul className="mt-5">
              <li className="mb-3">
                <GiCheckMark
                  style={{
                    background: "#3f077e",
                    color: "white",
                    borderRadius: "50%",
                    fontSize: "25px",
                  }}
                  className="p-1 me-3"
                />
                No foreign transaction fees.
              </li>
              <li className="mb-3">
                <GiCheckMark
                  style={{
                    background: "#3f077e",
                    color: "white",
                    borderRadius: "50%",
                    fontSize: "25px",
                  }}
                  className="p-1 me-3"
                />
                60,000+ fee free ATMs¹ - more than the top 3 national banks
                combined!
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row align-items-center p-5 my-5">
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
        <div className="col-lg-5">
          <img src={atmImage} alt="" width="60%" className="ms-5 ps-5" />
        </div>
      </div>
      <div className="row align-items-center p-5 my-5 bg-light">
        <div className="col-lg-6">
          <img src={savings} alt="" width="80%" />
        </div>
        <div className="col-lg-6">
          <h3 className="heading">Grow Your Savings Automatically</h3>
          <p>
            Saving money has never been so simple. We provide automation tools
            that help you grow your savings without thinking about it. Chime’s
            Automatic Savings is an optional Savings Account with several
            features that allow you to automate your savings plan and achieve
            your goals faster.
          </p>
        </div>
      </div>
      <div className="bg-light p-5">
        <h3 className="text-center heading">
          Save money while you spend. Save when you get paid
        </h3>
        <ul className="mt-5">
          <li className="mb-3 px-5">
            <GiCheckMark
              style={{
                background: "#3f077e",
                color: "white",
                borderRadius: "50%",
                fontSize: "25px",
              }}
              className="p-1 me-3"
            />
            <strong>Save When You Spend:</strong> We round up every Chime Visa®
            Debit Card transaction to the nearest dollar and transfer the Round
            Up from your Spending Account to your Savings Account.
          </li>
          <li className="mb-3 px-5">
            <GiCheckMark
              style={{
                background: "#3f077e",
                color: "white",
                borderRadius: "50%",
                fontSize: "25px",
              }}
              className="p-1 me-3"
            />
            <strong>Save When You Get Paid:</strong> Automatically transfer 10%
            of every direct deposit $500 or more directly into your Savings
            Account when you set up Direct Deposit.
          </li>
        </ul>
      </div>
      <div className="row align-items-center p-5 my-5">
        <div className="col-lg-7">
          <h3 className="heading">Banking Security and Control</h3>
          <p>
            At Chime, information security is a top priority. Deposits are FDIC
            insured up to $250,000 through The Bancorp Bank or Stride Bank,
            N.A., Members FDIC. And we work hard to protect your information,
            such as by using encryption and other measures to help safeguard
            your money and data.
          </p>
        </div>
        <div className="col-lg-5">
          <img src={Security_img} alt="" width="100%" className="ms-5 ps-5" />
        </div>
      </div>
      <div className="bg-light p-5">
        <h3 className="text-center heading">Your money is safe with Chime</h3>
        <ul className="mt-5">
          <li className="mb-3 px-5">
            <GiCheckMark
              style={{
                background: "#3f077e",
                color: "white",
                borderRadius: "50%",
                fontSize: "25px",
              }}
              className="p-1 me-3"
            />
            Deposits are FDIC insured up to $250,000 through The Bancorp Bank or
            Stride Bank N.A.; Members FDIC.
          </li>
          <li className="mb-3 px-5">
            <GiCheckMark
              style={{
                background: "#3f077e",
                color: "white",
                borderRadius: "50%",
                fontSize: "25px",
              }}
              className="p-1 me-3"
            />
            Shop worry-free at millions of merchants. Chime debit cards are
            protected by the Visa Zero Liability** Policy to ensure that
            cardholders will not be responsible for unauthorized charges.
          </li>
          <li className="mb-3 px-5">
            <GiCheckMark
              style={{
                background: "#3f077e",
                color: "white",
                borderRadius: "50%",
                fontSize: "25px",
              }}
              className="p-1 me-3"
            />
            We support two-factor authentication and support fingerprint
            authentication.
          </li>
        </ul>
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

export default Benefits;
