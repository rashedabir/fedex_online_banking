import React from "react";

function Step2({ increseStep, setBirthDate, birthDate }) {
  return (
    <div className="container">
      <form className="form mx-auto my-5 p-5" onSubmit={increseStep}>
        <h2>Date of Birth</h2>
        <p className="pb-2">
          This should match the date on your NID. Must be 18 years old or older.
        </p>
        <div className="form-floating mb-3">
          <input
            type="date"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            required
            onChange={(e) => {
              setBirthDate(e.target.value);
            }}
            value={birthDate}
          />
          <label for="floatingInput">Date of birth</label>
        </div>
        <button type="submit" className="btn w-100 nextbtn">
          Next
        </button>
      </form>
    </div>
  );
}

export default Step2;
