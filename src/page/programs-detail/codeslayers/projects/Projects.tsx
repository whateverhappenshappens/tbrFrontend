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
      heading: "Basic Data Structure Assessment",
      paragraph: "Arrays, linked lists, stacks, and queues.",
    },
    {
      heading: "Sorting and Searching Algorithms Assessment",
      paragraph:
        "Implementing and optimising various sorting and searching algorithms.",
    },
    {
      heading: "Recursion and Dynamic Programming Assessment",
      paragraph:
        "Solving problems using recursive techniques and dynamic programming.",
    },
    {
      heading: "Graph Algorithms Assessment",
      paragraph: "Graph traversal, shortest paths, and connectivity.",
    },
    {
      heading: "Advanced Data Structures Assessment",
      paragraph: "Trees, heaps, hash tables, and advanced data structures.",
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
