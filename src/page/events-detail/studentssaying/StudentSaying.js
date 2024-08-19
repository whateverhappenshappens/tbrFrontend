import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import "./StudentSaying.css";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos, } from "react-icons/md";
import StudentSayingCard from "./studentsayingcards/StudentSayingCards";
const StudentSaying = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalCards = 2; // Total number of cards
    const handleBackward = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? totalCards - 1 : prevIndex - 1);
    };
    const handleForward = () => {
        setCurrentIndex((prevIndex) => prevIndex === totalCards - 1 ? 0 : prevIndex + 1);
    };
    return (_jsxs("div", { className: "studentsaying", children: [_jsx("div", { className: "studentsaying-heading", children: _jsx("p", { className: "vr-bold", children: "What our students are saying" }) }), _jsxs("div", { className: "studentsaying-cards", children: [_jsx("div", { className: "studentsaying-cards-left", onClick: handleBackward, children: _jsx(MdOutlineArrowBackIos, { size: 35, color: "white" }) }), _jsxs("div", { className: "studentsaying-cards-card", children: [_jsx(StudentSayingCard, { color: "#FFEDB6", logocolor: "#FFC81E", username: "John Doe", program: "Program Name", link: "https://example.com" // Replace with correct URL
                                , review: "Here there should be a short para of the review of the particular student. The review should be concise, brief and to the point. It is very important so as to keep the space clean.", rating: 3 }), totalCards > 1 && currentIndex === 0 && (_jsx(StudentSayingCard, { color: "#FECBC4", logocolor: "#FE624C", username: "Jane Doe", program: "Program Name", link: "https://example.com" // Replace with correct URL
                                , review: "Another short para of the review of another student. Keeping it concise and clean.", rating: 4 }))] }), _jsx("div", { className: "studentsaying-cards-right", onClick: handleForward, children: _jsx(MdOutlineArrowForwardIos, { size: 35, color: "white" }) })] })] }));
};
export default StudentSaying;
