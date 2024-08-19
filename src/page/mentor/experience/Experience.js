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
    const para1 = "Through our comprehensive program, we aim to bring out the best in you both personally and professionally.";
    const para2 = "We have confidence in your talent and are unafraid to delegate crucial roles to capable individuals like you.";
    const para3 = "Sharpen your communication and leadership skills, giving you the opportunity to stand out from the crowd.";
    const para4 = "Strengthen connections for strategic industry partnerships and collaborations.";
    const para5 = "Experience real-world professional environments for insight.";
    const para6 = "Get top-notch merchandise and gadgets for an unparalleled ownership experience.";
    const cardsData = [
        {
            color: "#2FD18C",
            heading: "Professional Growth",
            para: para1,
            image: growth,
        },
        { color: "#FFD75B", heading: "Responsibility", para: para2, image: heart },
        {
            color: "#FF6954",
            heading: "Skills Enhancement",
            para: para3,
            image: skills,
        },
        {
            color: "#2FD18C",
            heading: "Networking Opportunities",
            para: para4,
            image: growth,
        },
        {
            color: "#FFD75B",
            heading: "Real-world Exposure",
            para: para5,
            image: heart,
        },
        {
            color: "#FF6954",
            heading: "Rewards and Recognition",
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
    return (_jsxs("div", { className: "experience", children: [_jsxs("div", { className: "experience-texts", children: [_jsx("p", { className: "experience-head1 vr-bold", children: "Live The Perfect Experience" }), _jsx("p", { className: "experience-head2 vr-regular", children: "Your trust in us is valued, and we reciprocate by providing you with valuable benefits." })] }), _jsx("div", { className: "cards-container", children: cardsData.map((card, index) => (_jsx(Cards, { color: card.color, heading: card.heading, para: card.para, image: card.image }, index))) }), _jsx(Slider, { ...settings, className: "slick-slider-mobile", children: cardsData.map((card, index) => (_jsx("div", { children: _jsx(Cards, { color: card.color, heading: card.heading, para: card.para, image: card.image }) }, index))) })] }));
};
export default Experience;
