import React from "react";
import "./Roadmap.css";
import story from "../../../../assets/mid.svg";

const ProjectsCard: React.FC = () => {
  return (
    <div className="roadmap">
      <p>Career Roadmap</p>
      <img src={story} alt="" />
    </div>
  );
};
export default ProjectsCard;
