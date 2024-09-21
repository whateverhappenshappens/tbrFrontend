import React, { useState, useEffect } from "react";
import "./Projects.css";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import ProjectsCard from "./projectscard/ProjectsCard";
import portfolio from "../../../../assets/program details/webmonk-images/pikaso_texttoimage_portfolio-website-project.jpeg";
import tinyUrl from "../../../../assets/program details/webmonk-images/pikaso_texttoimage_Tiny-URL-web-application-project.jpeg";
import blogging from "../../../../assets/program details/webmonk-images/pikaso_texttoimage_Blogging-platform-web-development-application-proj.jpeg";
import weatherApp from "../../../../assets/program details/webmonk-images/pikaso_texttoimage_weather-application-web-development-project.jpeg";
import yourProject from "../../../../assets/program details/webmonk-images/pikaso_texttoimage_your-projectidea-.jpeg";


const Projects: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [maxCardsToShow, setMaxCardsToShow] = useState(3);

  const projectsData = [
    {
      heading: "Responsive Portfolio Website",
      paragraph:
        "A modern and adaptable website showcasing your portfolio with a seamless user experience across all devices. Highlight your work and skills with a clean, professional design.    ",
      image: portfolio,
    },
    {
      heading: "Tiny URL",
      paragraph:
        " A tool for shortening long URLs into compact, easy-to-share links. Simplify and manage your web addresses with a streamlined and user-friendly interface.",
        image: tinyUrl ,
    },
    {
      heading: "Blogging Platform",
      paragraph:
        "A versatile platform for creating, managing, and sharing your blog content effortlessly. Engage your audience with an intuitive and user-friendly interface.",
        image: blogging,
    },
    {
      heading: "Weather Application",
      paragraph:
        " A tool for shortening long URLs into compact, easy-to-share links. Simplify and manage your web addresses with a streamlined and user-friendly interface.",
        image: weatherApp,
    },
    {
      heading: "Your Idea/Project",
      paragraph:
        "Now that you have learned the MERN Stack (Full Stack Web Development), it's time to make your idea/project accessible to others on the web. Share your creation and let people benefit from your work.",
        image: yourProject,
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
