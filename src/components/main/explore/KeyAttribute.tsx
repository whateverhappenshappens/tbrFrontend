import React from "react";
import "../../../styles/components/KeyAttribute.css";
import "./animation.js"
import {motion} from "framer-motion";

const KeyAttribute: React.FC = () => {
  return (
    <div className="key-attribute-box">
      <p className="key-attribute-heading">Our Key attributes</p>
      <p className="description">
        TechBairn stands as the fastest-growing educational and upskilling
        platform in the country, backed by industry titans like
        <span className="highlight-text">&nbsp;Microsoft</span>,
        <span className="highlight-text">&nbsp;Amazon</span>,
        <span className="highlight-text">&nbsp;MongoDB</span>, and endorsed by
        <span className="highlight-text">&nbsp;StartupIndia</span>. Our
        commitment to excellence has earned us recognition, including features
        in the <span>&nbsp;Economic Times</span> in 2024, the title of
        <span className="highlight-text">
          &nbsp;"20 Most Promising Startups to Watch in 2023"
        </span>
        by
        <span className="highlight-text">&nbsp;Business Connect Magazine</span>,
        and the honour of
        <span className="highlight-text">
          &nbsp;"Best E-Learning Company of the Year 2022"
        </span>
        by
        <span className="highlight-text">&nbsp;BW Business World Magazine</span>
        .
      </p>
      <div className="figure-numbers-box">
        <div className="figure-number">
          <p className="number" data-val="300+">300+</p>
          <p className="learner">LEARNERS</p>
        </div>
        <div className="figure-number">
          <p className="number" data-val="400+">400+</p>
          <p className="learner">PARTNERSHIPS</p>
        </div>
        <div className="figure-number">
          <p className="number" data-val="500+">500+</p>
          <p className="learner">COLLABORATIONS</p>
        </div>
      </div>
    </div>
  );
};

export default KeyAttribute;
