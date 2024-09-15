import React from "react";
import "../../../styles/components/ExplorePrograms.css";
import { useNavigate } from "react-router-dom";
import codeslayerImg from "../../../assets/ai-cloud-concept-with-robot-arm.png";
import webmonkImg from "../../../assets/Mask Group 5@2x.png";
import machinesterImg from "../../../assets/Mask Group 6@2x.png";
import iotImg from "../../../assets/Mask Group 7@2x.png";

const ExplorePrograms: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigation = (path: string): void => {
        navigate(path);
    };

    return (
        <div className="explore-programs">
            <div className="main">
                <div className="name">
                    <h1>Explore program by categories</h1>
                    <p>Get top on-demand courses from our list of courses</p>
                </div>
                <a className="explore-btn" onClick={() => handleNavigation("/programs")}>
                    View all
                </a>
            </div>
            <div className="programs">
                <div className="program-card one" onClick={() => handleNavigation("/course/codeslayer")}>
                    <div className="logo">
                        <img src={codeslayerImg} alt="Codeslayer Logo" />
                    </div>
                    <div className="details">
                        <h2>Codeslayer</h2>
                        <p>A Placement Preparation Program</p>
                    </div>
                </div>
                <div className="program-card two" onClick={() => handleNavigation("/course/webmonk")}>
                    <div className="logo">
                        <img src={webmonkImg} alt="Webmonk Logo" />
                    </div>
                    <div className="details">
                        <h2>Webmonk</h2>
                        <p>Web Development Program</p>
                    </div>
                </div>
                <div className="program-card three" onClick={() => handleNavigation("/course/machinester")}>
                    <div className="logo">
                        <img src={machinesterImg} alt="Machinester Logo" />
                    </div>
                    <div className="details">
                        <h2>Machinester</h2>
                        <p>Machine Learning Program</p>
                    </div>
                </div>
                <div className="program-card four" onClick={() => handleNavigation("/course/iot")}>
                    <div className="logo">
                        <img src={iotImg} alt="IOT Logo" />
                    </div>
                    <div className="details">
                        <h2>IOT</h2>
                        <p>Internet of Things Program</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExplorePrograms;
