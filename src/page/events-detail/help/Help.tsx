import React from "react";
import "./Help.css";
import Phone from "../../../assets/phone-blue.png";

const Help: React.FC = () => {
  return (
    <div className="help-container">
      <div className="help">
        <p className="help-head1">Need help? Don't hesitate!</p>
        <p className="help-head2">
          You can reach us at:{" "}
          <a href="mailto:info@techbairn.com">info@techbairn.com</a> or call us
          at: <a href="tel:+91123456789">+91 123456789</a>.
        </p>
      </div>
      <div className="connected-button">
        <button className="connected-button-request visbyroundCF bold ">
          <div className="connected-button-request-div">
            <img src={Phone} alt="" />
            <p className="vr-medium">Request a call back</p>
          </div>
        </button>
        <button className="connected-button-join">
          <p className="vr-medium">Join Us</p>
        </button>
      </div>
    </div>
  );
};

export default Help;
