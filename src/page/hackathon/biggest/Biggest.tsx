import React from "react";
import "./Biggest.css";
import eventBoy from "../../../assets/event boy@2x.png";

const Biggest: React.FC = () => {
  return (
    <div className="biggest-hackathon">
      <div className="biggest-hackathon-text">
        <p className="biggest-hackathon-text-large visbyroundCF extrabold">
          All India Biggest <br /> Web Dev Hackathon
        </p>
        {/* <p className="visbyroundCF extrabold"></p> */}
        <p className="biggest-hackathon-text-small visbyroundCF medium">
          Join India's biggest Web Dev Hackathon and be a part of something
          grand! Earn exciting goodies on winning.
        </p>
        <button className="biggest-hackathon-button visbyroundCF bold">
          <p>Enroll Now</p>
        </button>
      </div>
      <div className="biggest-hackathon-img">
        <p className="image-para visbyroundCF extrabold">
          All India Biggest <br /> Web Dev Hackathon
        </p>
        <img src={eventBoy} alt="Girl"></img>
      </div>
      {/* <button className="biggest-hackathon-help">Help</button> */}
    </div>
  );
};

export default Biggest;
