import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import "./Projects.css";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos, } from "react-icons/md";
import ProjectsCard from "./projectscard/ProjectsCard";
const Projects = () => {
    const [startIndex, setStartIndex] = useState(0);
    const [maxCardsToShow, setMaxCardsToShow] = useState(3);
    const projectsData = [
        {
            heading: "5Temperature Prediction Model",
            paragraph: "A predictive model designed to forecast temperature trends with high accuracy. Utilize advanced algorithms to analyze weather patterns and deliver reliable temperature predictions.",
        },
        {
            heading: "House Price Prediction",
            paragraph: "A predictive model designed to estimate future house prices based on various market factors. Leverage data analytics to make informed real estate investment decisions.",
        },
        {
            heading: "Handwritten Text Recognition      ",
            paragraph: "A system designed to convert handwritten text into digital format with high accuracy. Streamline document processing and data entry by leveraging advanced recognition algorithms.",
        },
        {
            heading: "Face Emotion Recognition",
            paragraph: "A project that utilizes facial expression analysis to recognize and interpret emotions. Enhance user interactions and experience by providing precise, real-time emotion detection.",
        },
        {
            heading: "Complete Deployment of Your Idea/Project ",
            paragraph: "A comprehensive solution for deploying your idea or project from start to finish. Ensure smooth implementation and operation with end-to-end deployment .",
        },
    ];
    // Update max cards to show based on viewport width
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 767) {
                setMaxCardsToShow(1);
            }
            else {
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
        setStartIndex((prevIndex) => prevIndex === projectsData.length - maxCardsToShow ? 0 : prevIndex + 1);
    };
    const handlePrevious = () => {
        setStartIndex((prevIndex) => prevIndex === 0 ? projectsData.length - maxCardsToShow : prevIndex - 1);
    };
    return (_jsxs("div", { className: "projects", children: [_jsx("div", { className: "projects-heading", children: _jsx("p", { className: "vr-bold", children: "Projects within program" }) }), _jsxs("div", { className: "projects-cards", children: [_jsx("div", { className: "projects-cards-left", onClick: handlePrevious, children: _jsx(MdOutlineArrowBackIos, { size: 35, color: "white" }) }), _jsx("div", { className: "projects-cards-card-container", children: projectsData
                            .slice(startIndex, startIndex + maxCardsToShow)
                            .map((project, index) => (_jsx("div", { className: "projects-cards-card", children: _jsx(ProjectsCard, { heading: project.heading, paragraph: project.paragraph }) }, index))) }), _jsx("div", { className: "projects-cards-right", onClick: handleNext, children: _jsx(MdOutlineArrowForwardIos, { size: 35, color: "white" }) })] })] }));
};
export default Projects;
