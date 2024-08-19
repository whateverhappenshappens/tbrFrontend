import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Roles.css";
import Cards from "./Cards/Cards";
import adduser from "../../../assets/add-friend.png";
import fly from "../../../assets/flyers.png";
import mega from "../../../assets/megaphone.png";
const Roles = () => {
    const cardsData = [
        {
            para: "Enhance your marketing skills to elevate our brand presence and gain recognition in your college.",
            image: mega,
            color: "#FECBC4",
        },
        {
            para: "Encourage your college peers to join our diverse social media platforms.",
            image: adduser,
            color: "#FFEDB6",
        },
        {
            para: "Promote TechBairn by sharing posters on WhatsApp, Facebook, and Instagram.",
            image: fly,
            color: "#B2E2C6",
        },
        {
            para: "Display our event and program posters on your college notice boards.",
            image: mega,
            color: "#FECBC4",
        },
        {
            para: "Provide weekly updates on your work database.",
            image: adduser,
            color: "#FFD75B",
        },
        {
            para: "Represent us in various college clubs and groups, sharing your innovative ideas.",
            image: fly,
            color: "#B2E2C6",
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
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (_jsxs("div", { className: "roles", children: [_jsx("div", { className: "roles-head", children: _jsx("p", { className: "vr-bold", children: "Roles and Responsibilities" }) }), _jsx("div", { className: "cards-container", children: cardsData.map((card, index) => (_jsx(Cards, { image: card.image, color: card.color, para: card.para }, index))) }), _jsx(Slider, { ...settings, className: "slick-slider-mobile", children: cardsData.map((card, index) => (_jsx("div", { children: _jsx(Cards, { image: card.image, color: card.color, para: card.para }) }, index))) })] }));
};
export default Roles;
