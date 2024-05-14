import React from "react";
import "./Enroll.css";
import eventBoy from "../../../assets/Group 426.png";
import { Link } from "react-router-dom";

const Enroll: React.FC = () => {
  return (
    <div className="enroll">
      <div className="enroll-content">
        <div className="enroll-text">
          <p className="enroll-text-large ">Hire With Us</p>
          {/* <p className="visbyroundCF extrabold"></p> */}
          <p className="enroll-text-small visbyroundCF medium">
            Empower Your Business with Future-Ready Talent
          </p>
          <button className="enroll-button ">
            <Link to={"https://forms.gle/iuE2x5w7b15ms2vz7"} target="_blank">
              <p>Join us!</p>
            </Link>
          </button>
        </div>
        <div className="enroll-img">
          <p className="image-para">Hire With Us</p>
          <img src={eventBoy} alt="Girl"></img>
        </div>
        {/* <button className="enroll-help">Help</button> */}
      </div>
    </div>
  );
};

export default Enroll;
