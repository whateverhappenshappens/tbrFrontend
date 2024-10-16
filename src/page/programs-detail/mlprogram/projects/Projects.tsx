import React, { useState, useEffect } from "react";
import "./Projects.css";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import ProjectsCard from "./projectscard/ProjectsCard";
import temperatureModal from "../../../../assets/program details/Ai-images/pikaso_texttoimage_Temperature-Prediction-Model-AI-prpject.jpeg";
import housePricePrediction from "../../../../assets/program details/Ai-images/pikaso_texttoimage_House-Price-Prediction-AI-prpject.jpeg";
import handwrittenText from "../../../../assets/program details/Ai-images/pikaso_texttoimage_Handwritten-Text-Recognition-AI-project.jpeg";
import faceEmotion from "../../../../assets/program details/Ai-images/pikaso_texttoimage_Face-Emotion-Recognition-AI-project.jpeg";
import completeEnd from "../../../../assets/program details/Ai-images/Complete Deployment.jpg";

const Projects: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [maxCardsToShow, setMaxCardsToShow] = useState(3);

  const projectsData = [
    {
      heading: "5Temperature Prediction Model",
      paragraph:
        "A predictive model designed to forecast temperature trends with high accuracy. Utilize advanced algorithms to analyze weather patterns and deliver reliable temperature predictions.",
      image: temperatureModal,
    },
    {
      heading: "House Price Prediction",
      paragraph:
        "A predictive model designed to estimate future house prices based on various market factors. Leverage data analytics to make informed real estate investment decisions.",
      image: housePricePrediction,
    },
    {
      heading: "Handwritten Text Recognition      ",
      paragraph:
        "A system designed to convert handwritten text into digital format with high accuracy. Streamline document processing and data entry by leveraging advanced recognition algorithms.",
      image: handwrittenText,
    },
    {
      heading: "Face Emotion Recognition",
      paragraph:
        "A project that utilizes facial expression analysis to recognize and interpret emotions. Enhance user interactions and experience by providing precise, real-time emotion detection.",
      image: faceEmotion,
    },
    {
      heading: "Complete end to end Deployment ",
      paragraph:
        "A comprehensive solution for deploying your idea or project from start to finish. Ensure smooth implementation and operation with end-to-end deployment services that cover all stages of the process.",
      image: completeEnd,
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
                  image={project.image}
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
