import React from "react";

function Login() {
  return (
    <div className="container my-5">
      <form style={{ maxWidth: "500px" }} className="text-center mx-auto pb-5">
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>
        <button className="btn w-100 login py-2">Log In</button>
      </form>
      <p className="text-center mx-auto my-5 col-lg-4 hidden_text">
        By clicking “Log In”, you agree to receive SMS text messages from Chime
        to verify your identity
      </p>
      <p
        className="text-center mx-auto my-5 col-lg-4 hidden_text"
        style={{ fontSize: "12px" }}
      >
        Banking Services provided by The Bancorp Bank or Stride Bank, N.A.,
        Members FDIC. The Chime Visa® Debit Card is issued by The Bancorp Bank
        or Stride Bank pursuant to a license from Visa U.S.A. Inc. and may be
        used everywhere Visa debit cards are accepted. Please see back of your
        Card for its issuing bank.
      </p>
    </div>
  );
}

export default Login;
