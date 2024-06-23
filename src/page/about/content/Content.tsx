import React from "react";
import "./Content.css";
import girl1 from "./Mask Group 16.png"
import msg from "./Group 480.png"
import call from "./Group 481.png"
import location from "./Group 482.png"
const Content: React.FC = () => {
  return (
    <div className="gig1">
        <div className="gig-headings">
          <div className="mine1">
          <div className="left23">
            <p className="us">Contact Us</p>
            <p className="us1">Have some questions or just wanted to know more about us? Why not pick your phone.</p>
            <br/>
            <div className="icon">
                <div className="lefty1">
                    <img src={msg} alt="aa" />
                </div>
                <div className="righty">
                    <p>info@techbairn.com</p>
                </div>
            </div>
            <div className="icon">
                <div className="lefty1"><img src={call} alt="aa" /></div>
                <div className="righty">
                    <p>+91-123456789</p>
                </div>
            </div>
            <div className="icon">
                <div className="lefty1"><img src={location} alt="aa" /></div>
                <div className="righty">
                    <p>Platform 9 3/4, Hogwarts, JK Rowling Universe.</p>
                </div>
            </div>
          </div>
            <div className="right23">
                <img src={girl1} alt="girl" />
            </div>
          </div>
        </div>

      </div>
  );
};

export default Content;