import React from "react";
import "./Hire.css";
import Enroll from "./enroll/Enroll";
import Gig from "./gig/Gig";
import Experience from "./experience/Experience";
import Faq from "./faq/Faq";
import Help from "./help/Help";

const Hire: React.FC = () => {
  return (
    <div className="hire mentor">
      <Enroll />
      <Gig />
      <Experience />
      <Faq />
      <Help />
    </div>
  );
};

export default Hire;
