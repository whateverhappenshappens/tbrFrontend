import React from "react";
import "./FridaySale.css";
import eventBoy from "../../../assets/Man photo@2x.png";
import { Link } from "react-router-dom";

const Enroll: React.FC = () => {
  return (
    <div className="enroll">
      <div className="enroll-content">
        <div className="enroll-text">
          <p className="enroll-text-large ">
            <span>Flat 50% off</span>
            <br />
            Black Friday Sale on Machinester
          </p>
          {/* <p className="visbyroundCF extrabold"></p> */}
          <p className="enroll-text-small visbyroundCF medium">
            Are you passionate about making a difference in society and
            expanding your own knowledge? TechBairn offers an exciting
            opportunity right at your fingertips!
          </p>

          <button className="enroll-button">
            <Link to={"/course/codeslayer"} >
              <p>Apply Now</p>
            </Link>
          </button>
        </div>
        <div className="enroll-img">
          <p className="image-para">
            <span>Flat 50% off</span>
            <br />
            Black Friday Sale on Machinester
          </p>
          <img src={eventBoy} alt="Girl"></img>
        </div>
        {/* <button className="enroll-help">Help</button> */}
      </div>
    </div>
  );
};

export default Enroll;
