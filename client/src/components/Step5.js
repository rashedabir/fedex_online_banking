import React from "react";

function Step5({ increseStep, setPassword, password }) {
  return (
    <div className="container">
      <form className="form mx-auto my-5 p-5" onSubmit={increseStep}>
        <h2>Password</h2>
        <p className="pb-2">
          Secure your account by creating a unique password.
        </p>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="floatingInput"
            placeholder="Password"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
          <label for="floatingInput">Password</label>
        </div>
        <button type="submit" className="btn w-100 nextbtn">
          Next
        </button>
      </form>
    </div>
  );
}

export default Step5;
