import React from "react";
import "./Certificate.css";
import certificate from "../../../../assets/Image 1.png";

const Certificate: React.FC = () => {
  return (
    <div className="certificate">
      <p className="certificate-heading">Sample Certificate</p>
      <div className="certificate-content">
        <div className="certificate-text">
          <p>
            Participants will receive this certificate upon completing the
            program, recognizing their outstanding effort and dedication
            demonstrated consistently during the sessions. <br />
            This badge acknowledges the participant's hard work shown through
            their performance on regular assignments and quizzes throughout the
            training period.
          </p>
        </div>
        <div className="certificate-img">
          <img src={certificate} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Certificate;
