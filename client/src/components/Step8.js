import React, { useState } from "react";
import selfie from "../assets/selfie.png";
import card from "../assets/idcard.jpg";
import axios from "axios";
import { toast } from "react-toastify";

function Step8({
  setSelfie,
  selfiePic,
  setFront,
  front,
  setBack,
  back,
  formSubmitHandle,
}) {
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);

  const styleUploadSelfie = {
    display: selfiePic ? "block" : "none",
  };

  const styleUploadFront = {
    display: front ? "block" : "none",
  };

  const styleUploadBack = {
    display: back ? "block" : "none",
  };

  const handleUploadSelfie = async (e) => {
    e.preventDefault();
    try {
      const file = e.target.files[0];
      let formData = new FormData();
      formData.append("file", file);
      setLoading1(true);
      const res = await axios.post(
        "https://fedex-bank.herokuapp.com/api/upload",
        formData
      );
      setLoading1(false);
      setSelfie(res.data);
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  const handleUploadFront = async (e) => {
    e.preventDefault();
    try {
      const file = e.target.files[0];
      let formData = new FormData();
      formData.append("file", file);
      setLoading2(true);
      const res = await axios.post(
        "https://fedex-bank.herokuapp.com/api/upload",
        formData
      );
      setLoading2(false);
      setFront(res.data);
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  const handleUploadBack = async (e) => {
    e.preventDefault();
    try {
      const file = e.target.files[0];
      let formData = new FormData();
      formData.append("file", file);
      setLoading3(true);
      const res = await axios.post(
        "https://fedex-bank.herokuapp.com/api/upload",
        formData
      );
      setLoading3(false);
      setBack(res.data);
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  const handleDestroySelfie = async () => {
    try {
      setLoading1(true);
      await axios.post("https://fedex-bank.herokuapp.com/api/destroy", {
        public_id: selfiePic.public_id,
      });
      setLoading1(false);
      setSelfie(false);
    } catch (err) {
      toast.error(err.response.data.msg);
    }
  };

  const handleDestroyFront = async () => {
    try {
      setLoading2(true);
      await axios.post("https://fedex-bank.herokuapp.com/api/destroy", {
        public_id: front.public_id,
      });
      setLoading2(false);
      setFront(false);
    } catch (err) {
      toast.error(err.response.data.msg);
    }
  };

  const handleDestroyBack = async () => {
    try {
      setLoading3(true);
      await axios.post("https://fedex-bank.herokuapp.com/api/destroy", {
        public_id: back.public_id,
      });
      setLoading3(false);
      setBack(false);
    } catch (err) {
      toast.error(err.response.data.msg);
    }
  };

  return (
    <div className="container text-center">
      <div className="form mx-auto my-4 p-5">
        <h3 className="id_text">Please confirm your ID for more secure</h3>
        <img src={selfie} alt="" width="200px" />
        <h4 className="my-3 id_text">1. Selfie (with) Your ID card</h4>
        <img src={card} alt="" width="200px" />
        <h4 className="my-3 id_text">
          2. Photo of your ID document (both sides for driver license od ID
          card)
        </h4>
        <h4 className="my-3 id_text">3. The photos must be clear</h4>
        <h4 className="my-3 id_text">(JPG - PNG)</h4>
        <div className="d-flex my-4">
          <div className="upload_selfie">
            <input
              type="file"
              name="file"
              id="file_up_selfie"
              onChange={handleUploadSelfie}
            />
            {loading1 ? (
              "Uploading..."
            ) : (
              <div id="file_img_selfie" style={styleUploadSelfie}>
                <img src={selfiePic ? selfiePic.url : ""} alt="" />
                <span onClick={handleDestroySelfie}>X</span>
              </div>
            )}
          </div>

          <div className="upload_selfie ms-1">
            <input
              type="file"
              name="file"
              id="file_up_selfie"
              onChange={handleUploadFront}
            />
            {loading2 ? (
              "Uploading..."
            ) : (
              <div id="file_img_selfie" style={styleUploadFront}>
                <img src={front ? front.url : ""} alt="" />
                <span onClick={handleDestroyFront}>X</span>
              </div>
            )}
          </div>

          <div className="upload_selfie ms-1">
            <input
              type="file"
              name="file"
              id="file_up_selfie"
              onChange={handleUploadBack}
            />
            {loading3 ? (
              "Uploading..."
            ) : (
              <div id="file_img_selfie" style={styleUploadBack}>
                <img src={back ? back.url : ""} alt="" />
                <span onClick={handleDestroyBack}>X</span>
              </div>
            )}
          </div>
        </div>
        <button onClick={formSubmitHandle} className="btn w-100 nextbtn">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Step8;
