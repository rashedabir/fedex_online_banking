import React from "react";

function Review() {
  return (
    <div className="container py-3">
      <div
        className="border my-5 p-3 py-4 rounded bg-light text-center mx-auto"
        style={{ maxWidth: "500px" }}
      >
        <h5>In Review</h5>
        <p>
          Your Account is in review. We'll active your account as soon as it
          approve.
        </p>
      </div>
    </div>
  );
}

export default Review;
