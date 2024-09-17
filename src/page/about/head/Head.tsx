import "./Head.css"
import React from "react";
import eventBoy from "./Group 425.png";

const Head: React.FC = () => {
  const handelClick = () => {
    const element = document.getElementById("#content") as HTMLElement | null;
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
    return (
      <div className="enroll">
        <div className="enroll-content">
          <div className="enroll-text">
            <p className="enroll-text-large1 ">About Us</p>

            <p className="enroll-text-small  medium">
            Let's introduce ourselves a little better. Here's everything you would need to know about us.
            </p>
            <button className="enroll-button ">
                <button onClick={handelClick}>Contact Us</button>
            </button>
          </div>
          <div className="img123">
            <img src={eventBoy} alt="Girl"></img>
          </div>
          {/* <button className="enroll-help">Help</button> */}
        </div>
      </div>
    );
  };

  export default Head;