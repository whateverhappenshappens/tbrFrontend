import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import "./Details.css";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useCart } from "../../../../CartContext";
const Details = (props) => {
    const { addToCart } = useCart();
    const [randomStudents, setRandomStudents] = useState(0);
    const [randomRating, setRandomRating] = useState(0);
    useEffect(() => {
        let studentsIntervalId;
        let ratingIntervalId;
        let countStudents = 0;
        let countRating = 0;
        studentsIntervalId = setInterval(() => {
            if (countStudents <= props.students) {
                setRandomStudents(countStudents);
                countStudents += 100;
            }
            else {
                clearInterval(studentsIntervalId);
            }
        }, 10);
        ratingIntervalId = setInterval(() => {
            if (countRating <= props.rating) {
                setRandomRating(countRating);
                countRating += 100;
            }
            else {
                clearInterval(ratingIntervalId);
            }
        }, 10);
        return () => {
            clearInterval(studentsIntervalId);
            clearInterval(ratingIntervalId);
        };
    }, [props.students, props.rating]);
    const handleEnroll = () => {
        // const generateUniqueId = () => {
        //   return `${Date.now()}-${Math.floor(Math.random() * 1000)}`;
        // };
        const course = {
            id: "machinester",
            name: "Machinester",
            description: "A very small description of the course should be included",
            price: 4999,
            discountedPrice: 2999,
        };
        addToCart(course);
        toast.success("Item successfully added to cart!");
    };
    const arr = new Array(5).fill(0);
    return (_jsx("div", { className: "details", children: _jsx("div", { className: "details-content", children: _jsxs("div", { className: "details-info", children: [_jsxs("div", { className: "details-links", children: [_jsx("a", { href: "http://", children: _jsx("p", { children: "Programs" }) }), _jsx(AiOutlineRight, { size: 15, color: "white" }), _jsx("a", { href: "http://", children: _jsx("p", { children: "Web Dev" }) }), _jsx(AiOutlineRight, { size: 15, color: "white" }), _jsx("a", { href: "http://", children: _jsx("p", { children: "Machinester" }) })] }), _jsxs("div", { className: "details-paragraphs", children: [_jsx("p", { className: "details-paragraphs-para1", children: "A Machine Learning Journey Unlock the Future with AI and Machine Learning" }), _jsxs("p", { className: "details-paragraphs-para3", children: ["Join India's biggest Machine Learning training program along", " ", _jsx("br", {}), "with thousands of like-minded enthusiasts."] })] }), _jsxs("div", { className: "details-ratings", children: [_jsxs("div", { className: "details-stars", children: [_jsx("div", { className: "star", children: arr.map((_, key) => key < props.star ? (_jsx(AiFillStar, { color: "yellow", size: 20 }, key)) : (_jsx(AiOutlineStar, { color: "white", size: 20 }, key))) }), _jsx("div", { className: "rating", children: "(5K+ Ratings)" })] }), _jsxs("div", { className: "details-best", children: [_jsx("p", { className: "para-1", children: "10K+ Students" }), _jsx("p", { className: "para-2", children: " Bestseller" })] })] }), _jsxs("div", { className: "details-date", children: [_jsx("p", { children: "Batch Starting Date: Winter 2023 " }), _jsx("p", { children: "Program Format: Online Live Classes " }), _jsx("p", { children: "Program Duration: 3 Months , At 5-10 hrs/week" })] }), _jsxs("div", { className: "details-buttons", children: [_jsx("button", { className: "details-buttons-enroll", onClick: handleEnroll, children: _jsxs("p", { children: ["Enroll Now for", _jsx("p", { className: "details-buttons-strike", children: " \u20B9 4999" }), " ", "\u20B9 3,999"] }) }), _jsx("a", { href: "https://drive.google.com/file/d/16fUdIxhn4Ky015pdqL_aPMpHjl7IlpjF/view?usp=sharing", target: "_blank", rel: "noopener noreferrer", children: _jsx("button", { className: "details-buttons-download", children: _jsx("p", { children: "Download Syllabus" }) }) })] })] }) }) }));
};
export default Details;
