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
            username: "Pratyush Abhi",
            program: "Machine learning",
            link: "https://example.com",
            review: "I had always been interested in machine learning but was intimidated by the math and coding. This course made it accessible, covering basics like supervised, unsupervised, and reinforcement learning. The knowledgeable instructor explained complex concepts clearly. ",
            rating: 3,
        },
        {
            color: "#FECBC4",
            logocolor: "#FE624C",
            username: "Shambhavi Tiwari",
            program: "Machine learning",
            link: "https://example.com",
            review: " The machine learning course using Python was exceptional. The content was well-structured, and the hands-on exercises were invaluable for practical application. The instructor's expertise and engaging teaching style made complex concepts easy to grasp.",
            rating: 4,
        },
        {
            color: "#B6FFED",
            logocolor: "#1EFC81",
            username: "Shreyas Saxena",
            program: "Machine learning",
            link: "https://example.com",
            review: "It was a great experience!! I'd never thought of this course to be this interesting but because of great mentorship and guidance, I feel really confident.I would like to thank you all!",
            rating: 5,
        },
        {
            color: "#C4CBFE",
            logocolor: "#4C62FE",
            username: "Ardhi Tarun",
            program: "Machine learning",
            link: "https://example.com",
            review: "It was a great journey. I learned a lot from the faculty and fellow batch mates during group projects. Difficult concepts were made easier by the friendly faculties and tech staff. The course was totally worth it, and I recommend it to juniors.",
            rating: 4,
        },
        {
            color: "#FECBB6",
            logocolor: "#FE4C6E",
            username: "Raghav Sharma",
            program: "Machine learning",
            link: "https://example.com",
            review: "Machine learning course offered by Techbairn was an amazing experience! The instructors were knowledgeable and highly skilled, and they made the course interactive and engaging. The support from the Techbairn team was also excellent. Thank you, Techbairn!!",
            rating: 3,
        },
    ];
    return (_jsxs("div", { className: "studentsaying", children: [_jsx("div", { className: "studentsaying-heading", children: _jsx("p", { className: "vr-bold", children: "What our students are saying" }) }), _jsxs("div", { className: "studentsaying-cards", children: [_jsx("div", { className: "studentsaying-cards-left", onClick: handleBackward, children: _jsx(MdOutlineArrowBackIos, { size: 35, color: "white" }) }), _jsx("div", { className: "studentsaying-cards-card", children: _jsx(StudentSayingCard, { ...reviews[currentIndex] }) }), _jsx("div", { className: "studentsaying-cards-right", onClick: handleForward, children: _jsx(MdOutlineArrowForwardIos, { size: 35, color: "white" }) })] })] }));
};
export default StudentSaying;
