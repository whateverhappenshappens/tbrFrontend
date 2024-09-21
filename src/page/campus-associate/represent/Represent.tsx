import React, { useRef } from "react";
import Boy from "../../../assets/Boyphoto@2x.png";
import "./Represent.css";

const Represent: React.FC = () => {

const handelClick = () => {
  const element = document.querySelector("#associate") as HTMLElement | null;
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

  return (
    <div className="container2">
      <div className="represent">
        <p className="represent-head1">
          Your Campus, Your Influence: Join Us Today!
        </p>
        <p className="vr-regular represent-head2">
          Become a Campus Associate, by representing our mission and helping
          shape the future of education on your campus.
        </p>
        <button onClick={handelClick} className="represent-button visbyroundCF bold ">
          <p className="vr-bold">Explore</p>
        </button>
      </div>
      <div className="boy-image">
        <img src={Boy} alt="" />
      </div>
      <div  className="doubts">
        <p className="vr-bold doubts-head1 try">
          Ready to make<br/><br/> an impact?
        </p>
        <p className="vr-medium medium doubts-head2">
          Get in touch with us to learn more!
        </p>
        <a href="http://bit.ly/forms_TB-CA" target="_blank" rel="noopener noreferrer">
          <button className="doubts-button mt-[4rem] vr-bold">
            <div className="doubts-button-div">
              <p>Apply Now</p>
            </div>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Represent;
