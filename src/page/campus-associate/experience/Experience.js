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
    const para4 = "Build your own network across various industries using our extensive resources.";
    const para5 = "Gain insight into the functioning of the professional world and work in an environment that mirrors real-world scenarios.";
    const para6 = "Become the proud owner of authentic merchandise and cutting-edge gadgets.";
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
    return (_jsxs("div", { className: "experience", children: [_jsxs("div", { className: "experience-texts", children: [_jsx("p", { className: "experience-head1 ", children: "Live The Perfect Experience" }), _jsx("div", { className: "experience-head2", children: "Your trust in us is valued, and we reciprocate by providing you with valuable benefits." })] }), _jsx("div", { className: "cards-container", children: cardsData.map((card, index) => (_jsx(Cards, { color: card.color, heading: card.heading, para: card.para, image: card.image }, index))) }), _jsx(Slider, { ...settings, className: "slick-slider-mobile", children: cardsData.map((card, index) => (_jsx("div", { children: _jsx(Cards, { color: card.color, heading: card.heading, para: card.para, image: card.image }) }, index))) })] }));
};
export default Experience;
