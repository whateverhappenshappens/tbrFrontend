import React from "react";
import "./Skills.css";
import girl from "../../../assets/Girl headphone@2x.png";
import Rectangles from "./rectangles/Rectangles";

const Skills: React.FC = () => {
  const paragraphs = [
    "1. Must be a college student",
    "2. Passionate about campus associate role",
    "3. Strong leadership",
    "4. Proficient in team management",
    "5. Effective persuasion",
    "6.  Excellent communication",
  ];
  return (
    <div className="skills">
      <div className="skills-img">
        <img src={girl} alt="girl" />
      </div>
      <div className="skills-required">
        <p className="skills-required-heading vr-bold">Skills Required</p>
        <div className="skills-required-rect">
          {paragraphs.map((paragraph, index) => (
            <Rectangles key={index} paragraph={paragraph} />
          ))}
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Skills;
