import React, { useState, useEffect } from "react";
import "./Projects.css";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import ProjectsCard from "./projectscard/ProjectsCard";

const Projects: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [maxCardsToShow, setMaxCardsToShow] = useState(3);

  const projectsData = [
    {
      heading: "Color Circle",
      paragraph:
        "A visual tool for displaying and selecting colors arranged in a circular format. Utilize the color wheel to explore color relationships and design harmonious color schemes.",
    },
    {
      heading: "Smart Home Automation System",
      paragraph:
        "A system that integrates smart technology to control and monitor home appliances, lighting, and security. Enhance convenience and efficiency with automated routines and remote access via mobile apps.",
    },
    {
      heading: "Dual-Channel Serial Data Acquisition System",
      paragraph:
        "A project focused on developing a system to capture and analyze data from two distinct channels via serial communication. Ideal for simultaneous monitoring and precise processing of multiple data streams.",
    },
    {
      heading: "Developing an IBM Cloud Dashboard",
      paragraph:
        "A project focused on building a custom dashboard using IBM Cloud services to visualize and manage cloud resources and data. Enhance operational efficiency with tailored insights and real-time monitoring capabilities.",
    },
    {
      heading: "Complete Deployment of Your Idea/Project",
      paragraph:
        "A complete solution for bringing your idea or project to life, from conception to completion. Our end-to-end deployment services ensure seamless implementation and operation, covering every stage of the process.",
    },
  ];

  // Update max cards to show based on viewport width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setMaxCardsToShow(1);
      } else {
        setMaxCardsToShow(3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex === projectsData.length - maxCardsToShow ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - maxCardsToShow : prevIndex - 1
    );
  };

  return (
    <div className="projects">
      <div className="projects-heading">
        <p className="vr-bold">Projects within program</p>
      </div>
      <div className="projects-cards">
        <div className="projects-cards-left" onClick={handlePrevious}>
          <MdOutlineArrowBackIos size={35} color="white" />
        </div>
        <div className="projects-cards-card-container">
          {projectsData
            .slice(startIndex, startIndex + maxCardsToShow)
            .map((project, index) => (
              <div key={index} className="projects-cards-card">
                <ProjectsCard
                  heading={project.heading}
                  paragraph={project.paragraph}
                />
              </div>
            ))}
        </div>
        <div className="projects-cards-right" onClick={handleNext}>
          <MdOutlineArrowForwardIos size={35} color="white" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
