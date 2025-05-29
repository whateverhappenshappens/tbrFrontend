import React, { useState, useRef } from "react";
import "./Faq.css";
import FaqAccordion from "./faq-accordion/FaqAccordion";

const Faq: React.FC = () => {
  const accordionData = [
    {
      title: "1. What kind of talent can I hire through TechBairn?",
      content: `TechBairn offers a diverse pool of professionals with expertise in areas such as web development, machine learning, competitive coding, and other in-demand technologies. Our candidates are trained to meet the evolving demands of the tech industry and are ready to contribute to your business.
      `,
    },
    {
      title: "2. What is the cost of hiring through TechBairn?",
      content: `Hiring with TechBairn is completely free. We offer zero-cost hiring to streamline your recruitment process without additional expenses.`,
    },
    {
      title: "3. How long does it take to hire candidates through TechBairn?",
      content: `With our efficient platform and pre-qualified candidates, the hiring process is swift. You can fill vacant positions quickly and reduce your overall hiring time.`,
    },
    {
      title: "4. How does TechBairn ensure the candidates are qualified?",
      content: `Our graduates undergo rigorous training in the latest industry-relevant skills and technologies, ensuring that they are well-prepared to take on real-world challenges.`,
    },
    {
      title: "5. Are there flexible hiring options?",
      content: `Yes, TechBairn provides year-round hiring options, allowing you to meet both your immediate and future talent needs.
`,
    },
    {
      title: "6. How can I start the hiring process with TechBairn?",
      content: `You can browse our talented pool of graduates through our platform and find the perfect fit for your company's needs. Just reach out to us, and we'll guide you through the process.`,
    },
    {
      title:
        "7.  What industries do TechBairn candidates specialize in?",
      content: `Our candidates are equipped with skills that are applicable across various industries, especially in tech fields such as software development, AI, machine learning, and IT services.`,
    },
  ];

  const faqSectionRef = useRef<HTMLDivElement>(null);

  const initialDisplayCount = 3; // Number of FAQs initially displayed
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleReadMoreClick = () => {
    if (isCollapsed) {
      setDisplayCount(accordionData.length);
      scrollToFAQSection();
    } else {
      setDisplayCount(initialDisplayCount);
    }
    setIsCollapsed(!isCollapsed);
  };

  const scrollToFAQSection = () => {
    if (faqSectionRef.current) {
      faqSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="faq-mentor">
      <div className="faq-headings">
        <div className="faq-head1">
          <p>Frequently Asked Questions</p>
        </div>
      </div>
      <div className="faq-accordion" ref={faqSectionRef}>
        {accordionData
          .slice(0, displayCount)
          .map(({ title, content }, index) => (
            <FaqAccordion key={index} title={title} content={content} />
          ))}
      </div>
      {/* Render "Read More" button with dynamic text based on collapse state */}
      <div className="read-more-button-container">
        <button
          type="button"
          className="read-more-button"
          onClick={handleReadMoreClick}
        >
          <p>{isCollapsed ? "Read More....." : "Collapse......"}</p>
        </button>
      </div>
    </div>
  );
};

export default Faq;
