import React from "react";
import "./AboutSpeaker.css";
import profilepic from "../../../assets/Mask Group 10.png";
import linkedin from "../../../assets/linkedin.png";

interface props {
  data: any;
}

const Speaker: React.FC<props> = (props) => {
  return (
    <div className="speaker">
      <div className="speaker-heading">
        <p>About speaker</p>
      </div>
      <div className="speaker-content">
        <div className="speaker-biodata">{props.data?.speakerExperience}</div>
        <div className="speaker-profile">
          <img
            className="image-personal"
            src={
              props.data?.bannerLinkPC
                ? `${props.data?.bannerLinkPC}`
                : `${profilepic}`
            }
          />
          <p className="speaker-profile-name">{props.data?.speakerName} </p>
          <p className="speaker-profile-company">{props.data?.aboutSpeaker}</p>
          <a href={props.data?.speakerSocial}>
            <div className="speaker-profile-linkedin">
              <img src={linkedin} alt="" />

              <p>Let's Connect</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Speaker;
