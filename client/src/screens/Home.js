import React from "react";
import Slider from "../components/Slider";
import wsj from "../assets/WSJ.png";
import nyt from "../assets/NYT.png";
import usatoday from "../assets/usatoday.png";
import forbes from "../assets/Forbes.png";
import tc from "../assets/TC.png";
import spotme from "../assets/spot-me-1.png";
import paidEarly from "../assets/paid-early.png";
import noFees from "../assets/no-fees.png";
import CreditBuilder from "../assets/CreditBuilder.png";
import payAnyone from "../assets/pay-anyone-desktop.png";
import apyBubble from "../assets/apy-bubble-copy.png";
import alerts from "../assets/alerts.png";
import lock from "../assets/lock.png";
import review from "../assets/Chime-Reviews.png";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Slider />
      <div className="container justify-content-center mx-auto">
        <div className="d-flex justify-content-center my-4">
          <img src={wsj} alt="" className="mx-4" />
          <img src={nyt} alt="" className="mx-4" />
          <img src={usatoday} alt="" className="mx-4" />
          <img src={forbes} alt="" className="mx-4" />
          <img src={tc} alt="" className="mx-4" />
        </div>
        <div className="row align-items-center p-5 my-3">
          <div className="col-lg-7">
            <h3 className="heading">Overdraft fee-free with SpotMe</h3>
            <p>
              We’ll spot you up to $200 on debit card purchases with no
              overdraft fees. Eligibility requirements apply.1
            </p>
          </div>
          <div className="col-lg-5">
            <img src={spotme} alt="" width="100%" className="ms-5 ps-5" />
          </div>
        </div>
        <div className="row align-items-center p-5 my-3 bg-light">
          <div className="col-lg-5">
            <img src={paidEarly} alt="" width="80%" />
          </div>
          <div className="col-lg-7">
            <h3 className="heading">Get paid early</h3>
            <p>
              Set up direct deposit and get your paycheck up to 2 days earlier
              than some of your co-workers!2
            </p>
          </div>
        </div>
        <div className="row align-items-center p-5 my-3">
          <div className="col-lg-7">
            <h3 className="heading">Say goodbye to hidden fees3</h3>
            <p>
              No overdraft. No minimum balance. No monthly fees. No foreign
              transaction fees. 60,000+ fee-free ATMs3 at stores you love, like
              Walgreens®, CVS®, and 7-Eleven®. Out-of-network fees apply.
            </p>
          </div>
          <div className="col-lg-5">
            <img src={noFees} alt="" width="100%" className="ms-5 ps-5" />
          </div>
        </div>
        <div className="row align-items-center p-5 my-3 bg-light">
          <div className="col-lg-5">
            <img src={CreditBuilder} alt="" width="80%" />
          </div>
          <div className="col-lg-7">
            <h3 className="heading">A new way to build credit</h3>
            <p>
              Help increase your credit score by an average of 30 points with
              our new secured credit card4. No interest, no annual fees, no
              credit check to apply. Eligibility requirements apply.5
            </p>
            <p style={{ fontSize: "12px" }}>
              Regular on-time payment history can have a positive impact on your
              credit score.
            </p>
          </div>
        </div>
        <div className="row align-items-center p-5 my-3">
          <div className="col-lg-7">
            <h3 className="heading">Pay anyone the fast, fee-free way</h3>
            <p>
              Pay friends and family, Fedex Bank members or not. They claim
              funds to their bank account, instantly6 and fee-free. No extra
              apps needed.
            </p>
          </div>
          <div className="col-lg-5">
            <img src={payAnyone} alt="" width="100%" className="ms-5 ps-5" />
          </div>
        </div>
        <div className="row align-items-center p-5 my-3 bg-light">
          <div className="col-lg-5">
            <img src={apyBubble} alt="" width="80%" />
          </div>
          <div className="col-lg-7">
            <h3 className="heading">Make your money grow fast</h3>
            <p>
              0.50% Annual Percentage Yield (APY)7. Set money aside with
              Automatic Savings features. And never pay a fee on your Savings
              Account.
            </p>
          </div>
        </div>
        <div className="row align-items-center p-5 my-3">
          <div className="col-lg-7">
            <h3 className="heading">Pay anyone the fast, fee-free way</h3>
            <p>
              Pay friends and family, Fedex Bank members or not. They claim
              funds to their bank account, instantly6 and fee-free. No extra
              apps needed.
            </p>
          </div>
          <div className="col-lg-5">
            <img src={alerts} alt="" width="100%" className="ps-5" />
          </div>
        </div>
        <div className="row align-items-center p-5 my-3 bg-light">
          <h3 className="text-center mb-5 heading">
            Security & support you can trust
          </h3>
          <div className="col-lg-5">
            <img src={lock} alt="" width="50%" className="ms-5 ps-5" />
          </div>
          <div className="col-lg-7">
            <div className="mb-4">
              <h4>Serious security</h4>
              <p>
                Fedex uses secure processes to protect your information and help
                prevent unauthorized use
              </p>
            </div>

            <div className="mb-4">
              <h4>Privacy and protection</h4>
              <p>
                Your funds are FDIC insured up to $250,000 through The Bancorp
                Bank or Stride Bank, N.A., Members FDIC.
              </p>
            </div>

            <div>
              <h4>Anytime, anywhere support</h4>
              <p>
                If you need help, Fedex Bank’s support channels are standing by
                24/7. Reach our friendly team by phone, email, in the app, or
                check out the Help Center.
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center p-5 my-3">
          <div className="col-lg-7">
            <h3 className="heading">Get started</h3>
            <p>
              Applying for an account is free and takes less than 2 minutes. It
              won’t affect your credit score!
            </p>
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
          </div>
          <div className="col-lg-5">
            <img src={review} alt="" width="100%" className="ps-5" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
