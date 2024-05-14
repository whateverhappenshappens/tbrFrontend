import React, { useState } from "react";
import "./Faq.css";
import FaqAccordion from "./faq-accordion/FaqAccordion";

const Faq: React.FC = () => {
  const accordionData = [
    {
      title: "1. Are there any prerequisites for this program?",
      content: `No, there are no prerequisites for this program. You simply need a laptop with an internet connection to get started.`,
    },
    {
      title: "2. What platform will be used for the classes?",
      content: `Our classes will be conducted online via Zoom or Google Meet. Our specialized instructors, known for their personalized teaching approach, will lead the sessions.`,
    },
    {
      title: "3. Can I pursue this program along with my college studies?",
      content: `Absolutely! Our classes are scheduled on weekends (Saturdays and Sundays), allowing you to balance your college studies alongside the program. Additionally, if needed, batch timings can be adjusted based on the majority's convenience.`,
    },
    {
      title:
        "4. Will there be teaching assistant (TA) support provided to the students?",
      content: `Yes, TA support is available 24*7. We also have dedicated WhatsApp groups where students can interact with instructors and peers to clarify doubts. `,
    },
    {
      title: "5. How do we complete the registration payment?",
      content: `After registration, you'll receive a payment link in your registered mail id that will be redirected to a secure payment gateway for completing your program fee payment.`,
    },
    {
      title: "6. How are doubts addressed during the program?",
      content: `We offer personalized assistance (PA support) for students, along with dedicated doubt-clearing sessions tailored to address individual queries and concerns.`,
    },
    {
      title: "7. Is one-to-one mentorship available?",
      content: `Yes, one-to-one sessions with mentors/instructors are provided after each class based on students' requirements. Additionally, contact details of mentors and session moderators are provided for further assistance.`,
    },
    {
      title: "8. What if I miss my classes?",
      content: `If you miss a class, you can request the recording of that session via email, provided you have a genuine reason for your absence.`,
    },
    {
      title: "9. How will my progress be tracked?",
      content: `Your progress will be monitored through regular assessments, quizzes, and industry-based projects assigned throughout the program.`,
    },
    {
      title: "10. What are the available modes of payment?",
      content: `We offer secure and convenient payment options through Razorpay Payment Gateway. You can easily pay using your preferred method, including PhonePe, Google Pay, credit/debit cards, BHIM UPI, and PayTM. Rest assured, Razorpay uses industry-standard security measures to keep your information safe.`,
    },
    {
      title: "11. How do students earn TechBairn badges?",
      content: `Students earn badges through the TBStar program by TechBairn. These badges (Platinum, Gold, Silver, Bronze) are awarded upon reaching specific milestones in the program, based on performance. Badges come with exciting goodies and can be digitally showcased on social media or physically delivered to your doorstep.`,
    },
    {
      title: "12. Are there any prerequisites for this program?",
      content: `No, there are no prerequisites for this program. You simply need a laptop with internet connection to get started.`,
    },
  ];

  const initialDisplayCount = 3; // Number of FAQs initially displayed
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleReadMoreClick = () => {
    if (isCollapsed) {
      setDisplayCount(accordionData.length);
    } else {
      setDisplayCount(initialDisplayCount);
    }
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="faq">
      <div className="faq-headings">
        <div className="faq-head1">
          <p>Frequently Asked Questions</p>
        </div>
      </div>
      <div className="faq-accordion">
        {accordionData
          .slice(0, displayCount)
          .map(({ title, content }, index) => (
            <FaqAccordion key={index} title={title} content={content} />
          ))}
      </div>
      {/* Render "Read More" button with dynamic text based on collapse state */}
      <div className="read-more-button-container">
        <button className="read-more-button" onClick={handleReadMoreClick}>
          {isCollapsed ? "Read More....." : "Collapse......"}
        </button>
      </div>
    </div>
  );
};

export default Faq;
