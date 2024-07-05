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
            <p className="para12">TechBairn, a unit of TechBairn Research Pvt. Ltd., stands as a trailblazer in the Ed-Tech industry, rapidly emerging as the leading educational and upskilling platform in the country. Offering affordable tech education and internships, our growth is backed by giants like Microsoft, Amazon, MongoDB, StartupIndia, and MSME. Our dedication to excellence has garnered significant recognition. We were featured in the Economic Times in 2024, named one of the "20 Most Promising Startups to Watch in 2023" by Business Connect Magazine, and honored as the "Best E-Learning Company of the Year 2022" by BW Business World Magazine. We proudly collaborate with premier institutions such as IIT Bombay, IIT Roorkee, IIM Sambalpur, NMIMS, DTU, VIT, and KIIT, and serve as a trusted hiring partner for over 50 companies.</p>
        </div>
        <div className="left1">
            <img src={girl} alt="girl" /></div></div>
      </div>
  );
};

export default Gig;
