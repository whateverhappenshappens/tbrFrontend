import React from "react";
import Boy from "../../../assets/Boyphoto@2x.png";
import "./Represent.css";
// gurmeet
const Represent: React.FC = () => {
  return (
    <div className="container2">
      <div className="represent">
        <p className="represent-head1 font-Visby Round CF">
          Your Campus, Your Influence: Join Us Today!
        </p>
        <p className="vr-regular represent-head2">
          Become a Campus Associate, by representing our mission and helping
          shape the future of education on your campus.
        </p>
        <button className="represent-button visbyroundCF bold ">
          <p className="vr-bold">Explore</p>
        </button>
      </div>
      <div className="boy-image">
        <img src={Boy} alt="" />
      </div>
      <div className="doubts">
        <p className="vr-bold doubts-head1 try">Ready to make an impact?</p>
        <p className="vr-medium medium doubts-head2">
          Get in touch with us to learn more!
        </p>
        <button className="doubts-button vr-bold ">
          <div className="doubts-button-div">
            <p>Apply Now</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Represent;
