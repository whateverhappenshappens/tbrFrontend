import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import "./StudentSaying.css";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos, } from "react-icons/md";
import StudentSayingCard from "./studentsayingcards/StudentSayingCards";
const StudentSaying = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalCards = 8; // Total number of cards
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
            username: "Tithi Pal",
            college: "KIIT university",
            program: "DSA Using C++/Python",
            link: "https://example.com",
            review: "I really had a good experience in this course. Under the guidance of Shashank bhaiya, we learned a lot! ",
            rating: 4,
        },
        {
            color: "#FECBC4",
            logocolor: "#FE624C",
            username: "Siddhant Jaiswal",
            college: "KIIT university",
            program: "DSA Using C++/Python",
            link: "https://example.com",
            review: "Techbairn's initiative was amazing. We learned a lot, including DP, graphs, and trees. The mentor was fabulous and accessible, and students were helpful. The course was focused and versatile. Recorded sessions were always available for review. I'm very grateful for this experience.",
            rating: 4,
        },
        {
            color: "#B6FFED",
            logocolor: "#1EFC81",
            username: "Subhashis Dutta",
            college: "Netaji Subha College",
            program: "DSA Using C++/Python",
            link: "https://example.com",
            review: "First of all I would like to thank our teacher for his friendly way of teaching. It was very helpful for someone like me who is new to C++. It will help me a lot in preparing for placements.",
            rating: 5,
        },
        {
            color: "#C4CBFE",
            logocolor: "#4C62FE",
            username: "Abhinandan Panua",
            college: "KIIT university",
            program: "DSA Using C++/Python",
            link: "https://example.com",
            review: "I gained immense knowledge about competitive coding and various algorithms. The course clarified many concepts. Shashank Bhaiya was incredibly helpful, knowledgeable, and patient. Overall, it boosted my confidence and opened doors in competitive coding.",
            rating: 4,
        },
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
