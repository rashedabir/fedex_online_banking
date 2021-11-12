import React from "react";

function Step1({
  increseStep,
  setFirstName,
  setLastName,
  setEmail,
  firstName,
  lastName,
  email,
}) {
  return (
    <div className="container">
      <form className="form mx-auto my-5 p-5" onSubmit={increseStep}>
        <h2 className="pb-2">Sign up and get 25$</h2>
        <h3>Hi, what’s your name?</h3>
        <p className="pb-2">
          We need your legal name to create your new Fedex account.
        </p>
        <div className="row g-3">
          <div className="form-floating mb-3 col-md-6">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              required
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              value={firstName}
            />
            <label for="floatingInput">First Name</label>
          </div>
          <div className="form-floating mb-3 col-md-6">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              required
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              value={lastName}
            />
            <label for="floatingInput">Last Name</label>
          </div>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <label for="floatingInput">Email</label>
        </div>
        <button type="submit" className="btn w-100 nextbtn mb-3">
          Next
        </button>
        <p className="notice">
          You can change your preferred name later in your profile
        </p>
      </form>
    </div>
  );
}

export default Step1;
