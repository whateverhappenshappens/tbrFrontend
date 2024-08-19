import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Experience.css";
import Cards from "./cards/Cards";
import growth from "../../../assets/growth-graph.png";
import heart from "../../../assets/heart.png";
import skills from "../../../assets/skills.png";
const Experience = () => {
    const para1 = "We offer live, interactive classes tailored to meet individual learning needs, ensuring a more effective and engaging educational experience.";
    const para2 = "Our platform fosters a collaborative learning environment where students can engage, share knowledge, and support each other through community interactions.";
    const para3 = "We provide dedicated teaching assistant support and a vibrant discussion forum to help students resolve queries and deepen their understanding of the subject matter.    ";
    const para4 = "Students earn live badges and receive certifications recognized by leading industries, enhancing their professional credibility.";
    const para5 = "We connect learners with exclusive internship and job opportunities, bridging the gap between education and employment.";
    const para6 = " We are committed to delivering top-notch education through well-structured courses, expert instructors, and up-to-date content.";
    const cardsData = [
        {
            color: "#2FD18C",
            heading: "Live & Personalized Learning:",
            para: para1,
            image: growth,
        },
        {
            color: "#FFD75B",
            heading: " Community-Based Learning:",
            para: para2,
            image: heart,
        },
        {
            color: "#FF6954",
            heading: "TA Support & Discussion Forum:",
            para: para3,
            image: skills,
        },
        {
            color: "#2FD18C",
            heading: "Live Badges & Certification:",
            para: para4,
            image: growth,
        },
        {
            color: "#FFD75B",
            heading: "Internship & Job Opportunities:",
            para: para5,
            image: heart,
        },
        {
            color: "#FF6954",
            heading: "Quality Learning:",
            para: para6,
            image: skills,
        },
    ];
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (_jsxs("div", { className: "experience", children: [_jsxs("div", { className: "experience-texts", children: [_jsx("p", { className: "experience-head1 vr-bold", children: "Why we stand out Different?" }), _jsx("p", { className: "experience-head2 vr-regular", children: "We appreciate your trust and we reciprocate by benefiting you." })] }), _jsx("div", { className: "cards-container", children: cardsData.map((card, index) => (_jsx(Cards, { color: card.color, heading: card.heading, para: card.para, image: card.image }, index))) }), _jsx(Slider, { ...settings, className: "slick-slider-mobile", children: cardsData.map((card, index) => (_jsx("div", { children: _jsx(Cards, { color: card.color, heading: card.heading, para: card.para, image: card.image }) }, index))) })] }));
};
export default Experience;
