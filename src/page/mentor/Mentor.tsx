import React, { useEffect } from "react";
import "./Mentor.css";
import Enroll from "./enroll/Enroll";
import Gig from "./gig/Gig";
import Experience from "./experience/Experience";
import Faq from "./faq/Faq";
import Help from "./help/Help";
import Helmet from "react-helmet"



const Mentor: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
      }, []);

    return (
        <div className="mentor">
         <Helmet>
        <title>TechBairn - Mentor </title>
        <meta name="Mentor content" content="TechBairn mentor page." />
      </Helmet>
            <Enroll />
            <Gig/>
            <Experience/>
            <Faq/>
            <Help/>
        </div>
    );
};

export default Mentor;