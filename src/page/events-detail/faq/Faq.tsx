import React, { useState } from "react";
import "./Faq.css";
import FaqAccordion from "./faq-accordion/FaqAccordion";

const Faq: React.FC = () => {
  const accordionData = [
    {
      title: "1. Is there any fee for registration?",
      content: `No, registration for our webinars is completely free of charge. Simply complete the registration process on our website without any payment required. However, after registration, to access the specific program, students will need to complete payment through the provided payment portal.`,
    },
    {
      title: "2. Will we be getting certificates?",
      content: `Yes, upon successful attendance of the webinar, you will be eligible to receive certificates. These certificates serve as recognition of your participation and completion of the webinar.`,
    },
    {
      title: "3. Will we be getting the recording of the webinar?",
      content: ` Unfortunately, recordings of the webinar will not be available. To benefit from the content and interactions of the webinar, it's essential to attend the live session. We encourage attendees to mark their calendars and make the most of the opportunity to engage directly during the scheduled webinar time.`,
    },
    {
      title:
        "4. Is there a limit to the number of participants in the webinar?",
      content: `Our webinars typically accommodate a large number of participants, but it's always best to register early to secure your spot. We strive to ensure that everyone has the opportunity to attend and engage with the content.`,
    },
    {
      title: "5. Can I ask questions during the webinar?",
      content: `Absolutely! We encourage active participation from attendees. You can ask questions, share insights, and engage with the presenters throughout the webinar. Our goal is to create an interactive learning experience for everyone involved.`,
    },
    {
      title:
        "6. Will there be opportunities for networking with other attendees?",
      content: ` While networking opportunities may vary depending on the format of the webinar, we often provide chat features or breakout sessions where attendees can connect with each other. Additionally, you can engage with fellow participants through social media platforms related to the webinar topic. We value community-building and strive to facilitate connections among our attendees whenever possible.`,
    },
    {
      title: "7. What happens if I miss the scheduled webinar time?",
      content: `If you're unable to attend the webinar at the scheduled time, unfortunately, you will miss out on the live presentation and interaction. However, we understand scheduling conflicts can arise, so we recommend checking our website or contacting us for information on future webinar opportunities or recordings, if available.`,
    },
    {
      title:
        "8. Are there any technical requirements to participate in the webinar?",
      content: `To join our webinars, you'll need a stable internet connection and a compatible device such as a computer, tablet, or smartphone. We recommend using a modern web browser for the best experience. Additionally, make sure to have any necessary plugins or software updated to ensure smooth access to the webinar platform.`,
    },
    {
      title: "9. Can I share the webinar link with others to join?",
      content: `While we welcome your enthusiasm in sharing information about our webinars, we kindly ask that you refrain from sharing the direct webinar link with others. Each participant should register individually to receive important updates and access to resources. However, you can certainly encourage others to register on our website to join the webinar.`,
    },
    {
      title:
        "10. Who will be taking care of that particular batch of students?",
      content: `Each program batch is assigned a dedicated Program Manager. This Program Manager is your primary point of contact for all program-related matters throughout your journey. They will oversee the program flow, manage logistics, and ensure a smooth learning experience for your entire batch.`,
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
