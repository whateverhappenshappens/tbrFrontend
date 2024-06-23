import React from "react";
import "./Gig.css";
import girl from "./Mask Group 15.png"

const Gig: React.FC = () => {
  return (
    <div className="gig">
        <div className="gig-headings">
          <p className="gig-headings-head1">Meet Us</p>
        </div>
        <div className="mine">
        <div className="right1">
            <p className="para12">TechBairn(A unit of TechBairn Research Pvt. Ltd.) is a leading EdTech startup in India. It has been given recognition from Department for Promotion of Industry and Internal Trade(Govt. of India), MSME, and also supported by StartupIndia. Our offices are located in Bhubaneswar, Delhi, and Patna. We are providing 10+ professional courses in different technology domains to aficionados in various professions.Our training team has worked with huge companies such as IBM, Samsung, Directi, Geeksforgeeks, Interviewbit, Cleartax, RedHat, Interviewbit, TCS, Samsung R&D, L&T India, LearningMate, Accenture, etc which is why we are aware of the industry requirements from freshers.</p>
        </div>
        <div className="left1">
            <img src={girl} alt="girl" /></div></div>
      </div>
  );
};

export default Gig;
