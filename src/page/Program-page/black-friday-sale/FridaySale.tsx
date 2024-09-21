import React from "react";
import "./FridaySale.css";
import eventBoy from "../../../assets/Man photo@2x.png";
import { Link } from "react-router-dom";

const Enroll: React.FC = () => {
  const handleClick = () => {
    const element = document.getElementById("course") as HTMLElement | null; // Removed '#' from ID
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="enroll">
      <div className="enroll-content">
        <div className="enroll-text w-[70vw] lg:w-[50vw]">
          <p className="enroll-text-large">
            Transform Your Career with Our Expert-Led Programs
          </p>
          <p className="enroll-text-small visbyroundCF medium">
            Gain hands-on experience, industry certifications, guaranteed
            internships, and 24/7 support to excel in your career.
          </p>

          <button className="enroll-button" onClick={handleClick}>
            <p>Explore</p>
          </button>
        </div>
        <div className="enroll-img">
          <p className="image-para">
          Transform Your Career with Our Expert-Led Programs
          </p>
          <img src={eventBoy} alt="Event Boy" />
        </div>
      </div>
    </div>
  );
};

export default Enroll;
