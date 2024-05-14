import React from "react";
import "./Mentor.css";
import Enroll from "./enroll/Enroll";
import Gig from "./gig/Gig";
import Experience from "./experience/Experience";
import Faq from "./faq/Faq";
import Help from "./help/Help";



const Mentor: React.FC = () => {

    return (
        <div className="mentor">
            <Enroll />
            <Gig/>
            <Experience/>
            <Faq/>
            <Help/>
        </div>
    );
};

export default Mentor;