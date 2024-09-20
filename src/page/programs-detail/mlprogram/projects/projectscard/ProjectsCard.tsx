import React from "react";
import "./ProjectsCard.css";

interface props {
  heading: string;
  paragraph: string;
  image: string;
}

const ProjectsCard: React.FC<props> = (props) => {
  return (
    <div className="project-card">
      <div className="project-card-rectangle">
        <img src={props.image} alt="" />
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
