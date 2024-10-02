import React, { useEffect } from "react";
import "./Hire.css";
import Enroll from "./enroll/Enroll";
import Gig from "./gig/Gig";
import Experience from "./experience/Experience";
import Faq from "./faq/Faq";
import Help from "./help/Help";

const Hire: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
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
