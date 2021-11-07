import React from "react";

function Step6({ increseStep, setSecurity, security }) {
  return (
    <div className="container">
      <form className="form mx-auto my-5 p-5" onSubmit={increseStep}>
        <h2>Social Security number</h2>
        <p className="pb-2">
          We need to verify your identity with your social security number. This
          won't affect your credit score.
        </p>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Social Security number"
            required
            onChange={(e) => {
              setSecurity(e.target.value);
            }}
            value={security}
          />
          <label for="floatingInput">Social Security number</label>
        </div>
        <button type="submit" className="btn w-100 nextbtn">
          Next
        </button>
      </form>
    </div>
  );
}

export default Step6;
