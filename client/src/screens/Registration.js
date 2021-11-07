import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import Step4 from "../components/Step4";
import Step5 from "../components/Step5";
import Step6 from "../components/Step6";
import Step7 from "../components/Step7";
import Step8 from "../components/Step8";

function Registration() {
  let [step, setStep] = useState(1);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [birthDate, setBirthDate] = useState("");

  const [mobile, setMobile] = useState("");

  const [address, setAddress] = useState("");
  const [suit, setSuit] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const [password, setPassword] = useState("");

  const [security, setSecurity] = useState("");

  const [incomeSource, setIncomeSource] = useState("");
  const [work, setWork] = useState("");
  const [about, setAbout] = useState("");

  const [nid, setNid] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selfiePic, setSelfie] = useState(false);
  const [front, setFront] = useState(false);
  const [back, setBack] = useState(false);

  const increseStep = (e) => {
    e.preventDefault();
    setStep(++step);
  };

  const formSubmitHandle = async (e) => {
    e.preventDefault();
    setNid([
      {
        selfiePic: selfiePic,
      },
      {
        id_front: front,
      },
      {
        id_back: back,
      },
    ]);
    try {
      await axios.post("/user/register", {
        name: firstName + " " + lastName,
        email: email,
        mobile: mobile,
        suite: suit,
        address: address,
        zip: zip,
        city: city,
        state: state,
        security: security,
        incomeSource: incomeSource,
        work: work,
        about: about,
        password: password,
        nid: nid,
      });
      toast.success("Registration Complete.");
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  switch (step) {
    case 1:
      return (
        <Step1
          setFirstName={setFirstName}
          setLastName={setLastName}
          setEmail={setEmail}
          firstName={firstName}
          lastName={lastName}
          email={email}
          increseStep={increseStep}
        />
      );
    case 2:
      return (
        <Step2
          setBirthDate={setBirthDate}
          birthDate={birthDate}
          increseStep={increseStep}
        />
      );
    case 3:
      return (
        <Step3
          increseStep={increseStep}
          mobile={mobile}
          setMobile={setMobile}
        />
      );
    case 4:
      return (
        <Step4
          address={address}
          setAddress={setAddress}
          suit={suit}
          setSuit={setSuit}
          zip={zip}
          setZip={setZip}
          city={city}
          setCity={setCity}
          state={state}
          setState={setState}
          increseStep={increseStep}
        />
      );
    case 5:
      return (
        <Step5
          setPassword={setPassword}
          password={password}
          increseStep={increseStep}
        />
      );
    case 6:
      return (
        <Step6
          increseStep={increseStep}
          security={security}
          setSecurity={setSecurity}
        />
      );
    case 7:
      return (
        <Step7
          increseStep={increseStep}
          incomeSource={incomeSource}
          setIncomeSource={setIncomeSource}
          work={work}
          setWork={setWork}
          about={about}
          setAbout={setAbout}
        />
      );
    case 8:
      return (
        <Step8
          setSelfie={setSelfie}
          selfiePic={selfiePic}
          setLoading={setLoading}
          loading={loading}
          setFront={setFront}
          front={front}
          setBack={setBack}
          back={back}
          formSubmitHandle={formSubmitHandle}
        />
      );

    default:
      break;
  }

  return <div className="container my-5"></div>;
}

export default Registration;
