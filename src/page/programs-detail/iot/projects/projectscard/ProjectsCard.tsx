import React from "react";
import "./ProjectsCard.css";
import story from "../../../../../assets/yourstory1.png";

interface props {
  heading: string;
  paragraph: string;
}

const ProjectsCard: React.FC<props> = (props) => {
  return (
    <div className="project-card">
      <div className="project-card-rectangle">
        <img src={story} alt="" />
      </div>
      <div className="project-card-content">
        <div className="project-card-content-heading">
          <p className=" vr-bold">{props.heading}</p>
        </div>
        <div className="project-card-content-paragraph">
          <p className="vr-medium">{props.paragraph}</p>
        </div>
        <div className="project-card-content-button">
          <button>
            <p className="vr-bold">Read Now</p>
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProjectsCard;
