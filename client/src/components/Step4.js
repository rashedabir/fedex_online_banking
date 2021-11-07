import React from "react";

function Step4({
  increseStep,
  setState,
  setCity,
  setZip,
  setSuit,
  state,
  city,
  zip,
  suit,
  address,
  setAddress,
}) {
  return (
    <div className="container">
      <form className="form mx-auto my-5 p-5" onSubmit={increseStep}>
        <h2>Where do you live?</h2>
        <p className="pb-2">
          We need to verify your home address. This is also where we'll send
          your new card.
        </p>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Street address (no. P.O. boxes)"
            required
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            value={address}
          />
          <label for="floatingInput">Street address (no. P.O. boxes)</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Apt / Suite number (optional)"
            onChange={(e) => {
              setSuit(e.target.value);
            }}
            value={suit}
          />
          <label for="floatingInput">Apt / Suite number (optional)</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="ZIP code"
            required
            onChange={(e) => {
              setZip(e.target.value);
            }}
            value={zip}
          />
          <label for="floatingInput">ZIP code</label>
        </div>
        <div className="row g-3">
          <div className="form-floating mb-3 col-md-8">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="City"
              required
              onChange={(e) => {
                setCity(e.target.value);
              }}
              value={city}
            />
            <label for="floatingInput">City</label>
          </div>
          <div className="form-floating mb-3 col-md-4">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="State"
              required
              onChange={(e) => {
                setState(e.target.value);
              }}
              value={state}
            />
            <label for="floatingInput">State</label>
          </div>
        </div>
        <button type="submit" className="btn w-100 nextbtn">
          Next
        </button>
      </form>
    </div>
  );
}

export default Step4;
