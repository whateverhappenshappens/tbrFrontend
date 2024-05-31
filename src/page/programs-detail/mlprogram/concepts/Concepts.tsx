import React from "react";
import "./Concepts.css";

import Accordion from "./accordion/Accordion";

const Concepts: React.FC = () => {
  const accordionData = [
    {
      title: "1. Introduction to Machine Learning",
      content: `Explore its applications, scope, and the current landscape of AI.
      `,
    },
    {
      title: "2. Python Fundamentals",
      content: ` Master basic language features and essential libraries like NumPy and Pandas.
      `,
    },
    {
      title: "3. Math Refresher",
      content: ` Brush up on matrices, vectors, calculus, statistics, and probability.`,
    },
    {
      title: "4.  Supervised Learning - Regression",
      content: `Delve into linear regression and gradient descent.
      `,
    },
    {
      title: "5.  Neural Networks",
      content: ` Understand feed-forward neural networks and backpropagation.`,
    },
    {
      title: "6. PyTorch Basics",
      content: `Learn about Torch tensors, autograd, and training neural networks.`,
    },
    {
      title: "7.  Deployment",
      content: ` Explore API creation, Flask, and hosting applications on Azure App Service/Heroku.`,
    },
  ];
  return (
    <div className="concepts">
      <div className="concepts-headings">
        <div className="concepts-head1">
          <p>Concepts Covered</p>
        </div>
        <div className="concepts-button">
          <button>Download Syllabus</button>
        </div>
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
