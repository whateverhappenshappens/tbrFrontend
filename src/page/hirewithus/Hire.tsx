import React, { useEffect } from "react";
import "./Hire.css";
import Enroll from "./enroll/Enroll";
import Gig from "./gig/Gig";
import Experience from "./experience/Experience";
import Faq from "./faq/Faq";
import Helmet from "react-helmet"
import Help from "../../components/Help"

const Hire: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  return (
    <div className="hire mentor">
                  <Helmet>
        <title>TechBairn - Hire</title>
        <meta name="Hire with us content" content="TechBairn hire with us page." />
      </Helmet>
      <Help />
      <Enroll />
      <Gig />
      <Experience />
      <Faq />
      <Help />
    </div>
  );
};

export default Hire;
