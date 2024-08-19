import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import "./StudentSaying.css";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos, } from "react-icons/md";
import StudentSayingCard from "./studentsayingcards/StudentSayingCards";
const StudentSaying = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalCards = 5; // Total number of cards
    const handleBackward = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? totalCards - 1 : prevIndex - 1);
    };
    const handleForward = () => {
        setCurrentIndex((prevIndex) => prevIndex === totalCards - 1 ? 0 : prevIndex + 1);
    };
    const reviews = [
        {
            color: "#FFEDB6",
            logocolor: "#FFC81E",
            username: "Pallavi Mohini",
            program: "Program Name",
            link: "https://example.com",
            review: "Both Alok and Mihir Sir were Awesome 😎 They gave us a full phase roadmap and knowledge on this subject , it was a lovely experience learning from both of them , both of them were friendly, helpful and understanding throughout the journey. Kudos to TechBairn ❤️",
            rating: 3,
        },
        {
            color: "#FECBC4",
            logocolor: "#FE624C",
            username: "Abhijeet Dey",
            program: "Program Name",
            link: "https://example.com",
            review: "This course really helped me in getting the detailed knowledge of full stack development.Everyday I learnt new concepts and practised a lot for my understanding and getting a command over every topic. Thank you TechBairn for this wonderful course.",
            rating: 4,
        },
        {
            color: "#B6FFED",
            logocolor: "#1EFC81",
            username: "Siddhant Jaiswal",
            program: "Another Program",
            link: "https://example.com",
            review: "The Webmonk course was excellent. The mentors assisted with doubts during and outside sessions.The projects were amazing, offering new learning in every session. I made valuable connections, and everyone, including tech staff and students, had a positive attitude.",
            rating: 5,
        },
        {
            color: "#C4CBFE",
            logocolor: "#4C62FE",
            username: "Antaripa Patra",
            program: "Different Program",
            link: "https://example.com",
            review: "My experience with TechBairn's Webmonk course was wonderful. The well-structured course provided a great understanding of Full Stack Web development. The trainers were friendly and helpful. I learned a lot and gained hands-on experience. Thank you, TechBairn!",
            rating: 4,
        },
        {
            color: "#FECBB6",
            logocolor: "#FE4C6E",
            username: "Harsh Ambastha",
            program: "Some Program",
            link: "https://example.com",
            review: "A very helpful learning experience for freshers. Instructors and management are positive, constantly motivating students. The company environment is people-friendly and easy to work in. Highly recommended for freshers starting their professional journey.",
            rating: 4,
        },
    ];
    return (_jsxs("div", { className: "studentsaying", children: [_jsx("div", { className: "studentsaying-heading", children: _jsx("p", { className: "vr-bold", children: "What our students are saying" }) }), _jsxs("div", { className: "studentsaying-cards", children: [_jsx("div", { className: "studentsaying-cards-left", onClick: handleBackward, children: _jsx(MdOutlineArrowBackIos, { size: 35, color: "white" }) }), _jsx("div", { className: "studentsaying-cards-card", children: _jsx(StudentSayingCard, { ...reviews[currentIndex] }) }), _jsx("div", { className: "studentsaying-cards-right", onClick: handleForward, children: _jsx(MdOutlineArrowForwardIos, { size: 35, color: "white" }) })] })] }));
};
export default StudentSaying;
