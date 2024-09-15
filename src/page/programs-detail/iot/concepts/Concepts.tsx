import React from "react";
import "./Concepts.css";

import Accordion from "./accordion/Accordion";

const Concepts: React.FC = () => {
  const accordionData = [
    {
      title: "1. Introduction to C programming and Electronics",
      content: `Introduction about HTML, Recommended w3c structure for HTML page,Heading fonts(H1-H6), creating a list, attaching links, creating form and tables,adding images.`,
    },
    {
      title: "2. Introduction to Arduino",
      content: `What is CSS? Selectors, how many types of CSS usage are there , Basic Styling, Relative & Absolute, Media Query, Responsive Design, Bootstrap.`,
    },
    {
      title: "3. Pulse Width Modulation (PWM)",
      content: `Introduction about Git & Github, Add, Merge, Checkout, Github - Create Repo, remote addition.`,
    },
    {
      title: "4. Interfacing",
      content: `Introduction to JS, Place Javascript Code, Defining Variables, Functions and Scope, Types of JavaScript,Functions Explained, Functions, Object Literals and the 'this' Keyword, Array.`,
    },
    {
      title: "5. IoT",
      content: `Simple Server, Routing, API Authentication, Map, Rest, forEach, reduce, set timeout, Async functions, Callback >>> Promises >>> async-await, Introduction on Express, Make a call from frontend to server, Express Params and Query String, Express Middleware.`,
    },
    {
      title: "6. Node-Red",
      content: `What is Database? Types of Database, SQL/No-SQL, What is Mongo, JSON/BSON, Mongo Structure, Architecture, Integration, Atlas, What is _id, CRUD with MongoDB Atlas from CMD.`,
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
