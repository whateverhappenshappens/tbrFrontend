import React, { useState } from "react";
import "./ProjectsCard.css";
interface props {
  heading: string;
  paragraph: string;
  images: string;
}

const ProjectsCard: React.FC<props> = (props) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {setIsReadMore(!isReadMore)};
  return (
    <div className="project-card">
      <div className="project-card-rectangle">
        <img src={props.images} alt="" />
      </div>
      <div className="project-card-content">
        <div className="project-card-content-heading">
          <p className=" vr-bold">{props.heading}</p>
        </div>
        <div className="project-card-content-paragraph">
          <p className="vr-medium">{isReadMore ? props.paragraph.slice(0, 80) + '...': props.paragraph }</p>
        </div>
        <div className="project-card-content-button">
        <button onClick={toggleReadMore}>
            <p className="vr-bold">{isReadMore ? 'Read Now' : 'show less'}</p>
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProjectsCard;
