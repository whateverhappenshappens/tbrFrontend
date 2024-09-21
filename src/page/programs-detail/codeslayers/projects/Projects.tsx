import React, { useState, useEffect } from "react";
import "./Projects.css";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import ProjectsCard from "./projectscard/ProjectsCard";

import dataStructure from "../../../../assets/program details/codeSlayer-images/pikaso_texttoimage_Arrays-linked-lists-stacks-and-queues.jpeg";
import graphTraversal from "../../../../assets/program details/codeSlayer-images/pikaso_texttoimage_Graph-traversal-shortest-paths-and-connectivity.jpeg";
import advanceDataStructure from "../../../../assets/program details/codeSlayer-images/Advance Data Structure.jpg";
import recursiveTree from "../../../../assets/program details/codeSlayer-images/RecursiveTree.jpeg";
import sortingSearching from "../../../../assets/program details/codeSlayer-images/searchingandSorting.jpg";


const Projects: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [maxCardsToShow, setMaxCardsToShow] = useState(3);

  const projectsData = [
    {
      heading: "Basic Data Structure Assessment",
      paragraph: "Arrays, linked lists, stacks, and queues.Each structure has unique properties and use cases, enabling efficient data storage and manipulation for various algorithms and applications.",
      img: dataStructure,
    },
    {
      heading: "Sorting and Searching Algorithms Assessment",
      paragraph:
        "Implementing and optimising various sorting and searching algorithms.",
      img: sortingSearching,
    },
    {
      heading: "Recursion and Dynamic Programming Assessment",
      paragraph:
        "Solving problems using recursive techniques and dynamic programming.",
      img: recursiveTree,
    },
    {
      heading: "Graph Algorithms Assessment",
      paragraph: "Graph traversal, shortest paths, and connectivity.",
      img: graphTraversal,
    },
    {
      heading: "Advanced Data Structures Assessment",
      paragraph: "Trees, heaps, hash tables, and advanced data structures.",
      img: advanceDataStructure,
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
                  images={project.img}
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
