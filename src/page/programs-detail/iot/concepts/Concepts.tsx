import React from "react";
import "./Concepts.css";

import Accordion from "./accordion/Accordion";

const Concepts: React.FC = () => {
  const accordionData = [
    {
      title: "1. Introduction to C programming and Electronics",
      content: ` This course dives into the realm of IoT, where you'll learn how to utilise connected devices to transform various industries. From manufacturing to environmental conservation, IoT opens up endless opportunities for innovation`,
    },
    {
      title: "2. Introduction to Arduino",
      content: `Yes, the course emphasises practical learning. You'll work on projects involving Arduino, sensors, Wi-Fi modules, and more.`,
    },
    {
      title: "3. Pulse Width Modulation (PWM)",
      content: `Pulse Width Modulation (PWM), start with basic theory on duty cycles and applications, then experiment with microcontrollers like Arduino to implement real projects.`,
    },
    {
      title: "4. Interfacing",
      content: `Learn interfacing, start by communication protocols and component specifications, then practice connecting sensors and actuators to microcontrollers through hands-on projects.`,
    },
    {
      title: "5. IoT",
      content: `IoT fundamentals and hands-on projects.`,
    },
    {
      title: "6. Node-Red",
      content: `create visual IoT applications, using its flow-based programming to connect devices and services.`,
    },
  ];
  return (
    <div className="concepts">
      <div className="concepts-headings">
        <div className="concepts-head1">
          <p>Concepts Covered</p>
        </div>
        <a href="https://drive.google.com/file/d/1I6ATPZUIAbnkaD6C6Husl_hENMg14mif/view?usp=sharing" target="_blank" rel="noopener noreferrer">
        <div className="concepts-button">
          <button>Download Syllabus</button>
        </div></a>
      </div>
      <div className="concepts-accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};
export default Concepts;
