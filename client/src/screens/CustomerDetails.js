import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import GlobalState from "../GlobalState";

function CustomerDetails() {
  const params = useParams();
  const state = useContext(GlobalState);
  const [users] = state.customerAPI.customers;
  const [details, setDetails] = useState([]);
  const [images, setImages] = useState([]);
  const [selfie, setSelfie] = useState([]);
  const [front, setFront] = useState([]);
  const [back, setBack] = useState([]);

  useEffect(() => {
    if (params.id) {
      users.forEach((user) => {
        if (user._id === params.id) {
          setDetails(user);
          setImages(user.nid);
        }
      });
    }
  }, [params.id, users]);

  console.log(details);

  useEffect(() => {
    if (images.length) {
      setSelfie(images[0].selfiePic);
      setFront(images[1].id_front);
      setBack(images[2].id_back);
    }
  }, [images]);

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-5 my-3">
          <img
            src={selfie.url}
            alt={details.name}
            width="100%"
            className="mb-3"
          />
          <img
            src={front.url}
            alt={details.name}
            width="45%"
            className="me-3"
          />
          <img src={back.url} alt={details.name} width="45%" />
        </div>
        <div className="col-lg-7 my-3">
          <h5 className="text-capitalize mb-3">Name: {details.name}</h5>
          <h5 className="text-capitalize mb-3">mobile: {details.mobile}</h5>
          <h5 className="text-capitalize mb-3">email: {details.email}</h5>
          <h5 className="text-capitalize mb-3">address: {details.address}</h5>
          <h5 className="text-capitalize mb-3">city: {details.city}</h5>
          <h5 className="text-capitalize mb-3">state: {details.state}</h5>
          <h5 className="text-capitalize mb-3">zip: {details.zip}</h5>
          <h5 className="text-capitalize mb-3">SSN: {details.security}</h5>
          <h5 className="text-capitalize mb-3">suite: {details.suite}</h5>
          <h5 className="text-capitalize mb-3">work: {details.work}</h5>
          <h5 className="text-capitalize mb-3">
            income source: {details.incomeSource}
          </h5>
          <h5 className="text-capitalize">hear from: {details.about}</h5>
        </div>
      </div>
    </div>
  );
}

export default CustomerDetails;
