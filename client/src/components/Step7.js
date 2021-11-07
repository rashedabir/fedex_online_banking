import React from "react";
function Step7({
  increseStep,
  setIncomeSource,
  incomeSource,
  setWork,
  work,
  about,
  setAbout,
}) {
  return (
    <div className="container">
      <form className="form mx-auto my-5 p-5" onSubmit={increseStep}>
        <h2>Activity</h2>
        <p className="pb-2">
          To help us identify you, please provide us with the following info.
          This will not affect your application.
        </p>
        <select
          className="form-select mb-3 p-3"
          aria-label="Default select example"
          onChange={(e) => {
            setIncomeSource(e.target.value);
          }}
          value={incomeSource}
        >
          <option selected>What is your income source?</option>
          <option value="Employment">Employment</option>
          <option value="Unemployment">Unemployment</option>
          <option value="Social Security">Social Security</option>
          <option value="Household Income">Household Income</option>
          <option value="Investment">Investment</option>
          <option value="Other">Other</option>
        </select>
        <select
          className="form-select mb-3 p-3"
          aria-label="Default select example"
          onChange={(e) => {
            setWork(e.target.value);
          }}
          value={work}
        >
          <option selected>What do you do for work?</option>
          <option value="Accountant">Accountant</option>
          <option value="Agriculture">Agriculture</option>
          <option value="Artist">Artist</option>
          <option value="Banker">Banker</option>
          <option value="Construction">Construction</option>
          <option value="Consultant">Consultant</option>
          <option value="Finance">Finance</option>
          <option value="Engineer">Engineer</option>
          <option value="Government">Government</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Education">Education</option>
          <option value="Transportation">Transportation</option>
          <option value="Retail">Retail</option>
          <option value="Travel">Travel</option>
          <option value="Real Estate">Real Estate</option>
          <option value="Other">Other</option>
        </select>
        <select
          className="form-select mb-3 p-3"
          aria-label="Default select example"
          onChange={(e) => {
            setAbout(e.target.value);
          }}
          value={about}
        >
          <option selected>How did you hear about us?</option>
          <option value="Instagram">Instagram</option>
          <option value="Television">Television</option>
          <option value="Facebook">Facebook</option>
          <option value="Instagram">Instagram</option>
          <option value="TikTok">TikTok</option>
          <option value="Linked in">Linked in</option>
          <option value="Twitter">Twitter</option>
          <option value="You tube">You tube</option>
          <option value="Google">Google</option>
          <option value="Mail">Mail</option>
          <option value="Spotify">Spotify</option>
          <option value="Snapchat">Snapchat</option>
          <option value="Hulu">Hulu</option>
        </select>
        <button type="submit" className="btn w-100 nextbtn">
          Next
        </button>
      </form>
    </div>
  );
}

export default Step7;
