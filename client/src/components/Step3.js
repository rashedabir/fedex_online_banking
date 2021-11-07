import React from "react";

function Step3({ increseStep, setMobile, mobile }) {
  return (
    <div className="container">
      <form className="form mx-auto my-5 p-5" onSubmit={increseStep}>
        <h2>Mobile phone</h2>
        <p className="pb-2">
          We'll use it to keep your account safe and provide support if you need
          it.
        </p>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            required
            onChange={(e) => {
              setMobile(e.target.value);
            }}
            value={mobile}
          />
          <label for="floatingInput">Mobile phone number</label>
        </div>
        <button type="submit" className="btn w-100 nextbtn mb-3">
          Next
        </button>
        <p className="notice">Cellphones only, no VOIP</p>
      </form>
    </div>
  );
}

export default Step3;
