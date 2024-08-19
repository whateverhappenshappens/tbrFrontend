import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import "./StudentSaying.css";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos, } from "react-icons/md";
import StudentSayingCard from "./studentsayingcards/StudentSayingCards";
const StudentSaying = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalCards = 4; // Total number of cards
    const handleBackward = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? totalCards - 1 : prevIndex - 1);
    };
    const handleForward = () => {
        setCurrentIndex((prevIndex) => prevIndex === totalCards - 1 ? 0 : prevIndex + 1);
    };
    const reviews = [
        {
            color: "#FECBB6",
            logocolor: "#FE4C6E",
            username: "Harsh Ambastha",
            college: "VIT Vellore",
            program: "DSA Using C++/Python",
            link: "https://example.com",
            review: "A very helpful learning experience for freshers. Instructors and management are positive, constantly motivating students. The company environment is people-friendly and easy to work in. Highly recommended for freshers starting their professional journey.",
            rating: 4,
        },
        {
            color: "#FECBB6",
            logocolor: "#FE4C6E",
            username: "Areeb Ahmad",
            college: "Birla Institute of Technology",
            program: "DSA Using C++/Python",
            link: "https://example.com",
            review: "As a TechBairn Campus Associate, I gained marketing knowledge, teamwork, communication skills, professional attitude, and expanded my network, gaining valuable insights into startup operations.",
            rating: 4,
        },
        {
            color: "#FECBB6",
            logocolor: "#FE4C6E",
            username: "Palak Shukla",
            college: "KIIT University",
            program: "DSA Using C++/Python",
            link: "https://example.com",
            review: "TechBairn provided tremendous opportunities for personal and professional growth, motivating me to face challenges and develop leadership, time management, and problem-solving skills. Thanks to all coordinators and mentors!",
            rating: 4,
        },
        {
            color: "#FECBB6",
            logocolor: "#FE4C6E",
            username: "Sanskar Sinha",
            college: "VIT Vellore",
            program: "DSA Using C++/Python",
            link: "https://example.com",
            review: "As a TechBairn Campus Associate, I enhanced campus engagement, coordinated events, identified collaboration opportunities, fostered inclusivity, and communicated well with peers and faculty, ensuring our initiatives' success through dedication and proactivity.",
            rating: 4,
        }
    ];
    return (_jsxs("div", { className: "studentsaying", children: [_jsx("div", { className: "studentsaying-heading", children: _jsx("p", { className: "vr-bold", children: "What our students are saying" }) }), _jsxs("div", { className: "studentsaying-cards", children: [_jsx("div", { className: "studentsaying-cards-left", onClick: handleBackward, children: _jsx(MdOutlineArrowBackIos, { size: 35, color: "white" }) }), _jsx("div", { className: "studentsaying-cards-card", children: _jsx(StudentSayingCard, { ...reviews[currentIndex] }) }), _jsx("div", { className: "studentsaying-cards-right", onClick: handleForward, children: _jsx(MdOutlineArrowForwardIos, { size: 35, color: "white" }) })] })] }));
};
export default StudentSaying;
