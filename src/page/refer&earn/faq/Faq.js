import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef } from "react";
import "./Faq.css";
import FaqAccordion from "./faq-accordion/FaqAccordion";
const ReferFaq = () => {
    const accordionData = [
        {
            title: "1. What do you want in a mentor or instructor? ",
            content: `We seek passionate educators with strong expertise in [course topic] (Web Dev, ML, IoT). Experience in online instruction, excellent communication skills, and a talent for making complex topics engaging are essential.
      `,
        },
        {
            title: "2. Is prior experience teaching [course topic] required?",
            content: `Prior experience teaching [course topic] is a plus, but not mandatory. Strong industry experience and a demonstrable ability to explain technical concepts clearly are highly valued.`,
        },
        {
            title: "3. What will my teaching schedule look like?",
            content: `The schedule will vary depending on the course but typically involves a mix of live lectures, live Q&A sessions, and providing feedback on student work.`,
        },
        {
            title: "4. Will I have opportunities for professional development?",
            content: `Absolutely! We offer ongoing support and resources for our instructors, including workshops, training sessions, and access to the latest industry developments.`,
        },
        {
            title: "5. How big will the classes be? ",
            content: `Class sizes vary depending on the course, but we strive to maintain a manageable student-to-instructor ratio to ensure personalised attention.`,
        },
        {
            title: "6. What platform will be used for delivering the course?",
            content: `We utilise a user-friendly learning management system (LMS) that provides a smooth online learning experience for both instructors and students.`,
        },
        {
            title: "7. Will I have the opportunity to develop my own course materials?",
            content: `While we have a core curriculum, we encourage instructors to add their unique insights and approaches to enrich the learning experience.`,
        },
        {
            title: "8. How will student performance be evaluated?",
            content: `We employ a multi-faceted approach to assessment, including assignments, quizzes, projects, and participation.`,
        },
        {
            title: "9. Is there an opportunity to collaborate with other instructors? ",
            content: `We foster a collaborative environment where instructors can share best practices, resources, and ideas.`,
        },
        {
            title: "10. What are the compensation and benefits like?",
            content: `We offer a competitive compensation package that includes salary, benefits, and potential performance incentives (details will be provided during the interview process).      `,
        },
        {
            title: "11. What makes TechBairn unique in the EdTech space?",
            content: `We're committed to providing high-quality, engaging instruction that empowers learners to achieve their tech goals.      `,
        },
        {
            title: "12. What is your company culture like?",
            content: `We cultivate a supportive, collaborative, and innovative environment where educators can thrive.`,
        },
    ];
    const faqSectionRef = useRef(null);
    const initialDisplayCount = 3; // Number of FAQs initially displayed
    const [displayCount, setDisplayCount] = useState(initialDisplayCount);
    const [isCollapsed, setIsCollapsed] = useState(true);
    const handleReadMoreClick = () => {
        if (isCollapsed) {
            setDisplayCount(accordionData.length);
            scrollToFAQSection();
        }
        else {
            setDisplayCount(initialDisplayCount);
        }
        setIsCollapsed(!isCollapsed);
    };
    const scrollToFAQSection = () => {
        if (faqSectionRef.current) {
            faqSectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (_jsxs("div", { className: "faq-mentor", children: [_jsx("div", { className: "faq-headings", children: _jsx("div", { className: "faq-head1", children: _jsx("p", { children: "Frequently Asked Questions" }) }) }), _jsx("div", { className: "faq-accordion", ref: faqSectionRef, children: accordionData
                    .slice(0, displayCount)
                    .map(({ title, content }, index) => (_jsx(FaqAccordion, { title: title, content: content }, index))) }), _jsx("div", { className: "read-more-button-container", children: _jsx("button", { type: "button", className: "read-more-button", onClick: handleReadMoreClick, children: _jsx("p", { children: isCollapsed ? "Read More....." : "Collapse......" }) }) })] }));
};
export default ReferFaq;
