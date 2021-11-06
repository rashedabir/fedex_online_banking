import React, { useState } from "react";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import Step4 from "../components/Step4";
import Step5 from "../components/Step5";
import Step6 from "../components/Step6";
import Step7 from "../components/Step7";
import Step8 from "../components/Step8";

function Registration() {
  let step = 1;

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

  const [sequirity, setSequirity] = useState("");

  const [incomeSource, setIncomeSource] = useState("");
  const [work, setWork] = useState("");
  const [about, setAbout] = useState("");

  const [nid, setNid] = useState([]);

  switch (step) {
    case 1:
      return <Step1 />;
    case 2:
      return <Step2 />;
    case 3:
      return <Step3 />;
    case 4:
      return <Step4 />;
    case 5:
      return <Step5 />;
    case 6:
      return <Step6 />;
    case 7:
      return <Step7 />;
    case 8:
      return <Step8 />;

    default:
      break;
  }

  return <div className="container my-5"></div>;
}

export default Registration;
