import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Benefits.css";
import BenefitsCard from "./benefits-card/Benefits-Card";
import writing from "../../../assets/writing.png";
const Benefits = () => {
    const benefitsData = [
        {
            image: writing,
            text: "Receive exclusive TechBairn merchandise such as T-shirts, swaggers, and gadgets.",
        },
        {
            image: writing,
            text: "Earn additional stipends for outstanding performance.",
        },
        {
            image: writing,
            text: "Get a stipend for each successful referral using your student referral code.",
        },
        {
            image: writing,
            text: "Receive a Letter of Recommendation, Certificates, and a Pre-Placement Offer(PPO).",
        },
        {
            image: writing,
            text: "Top three achievers will be granted free access to our online programs.",
        },
        {
            image: writing,
            text: "Gain valuable exposure by working with a startup company.",
        },
        {
            image: writing,
            text: "Join our team to enjoy surprises and bonuses on a monthly and yearly basis.",
        },
        {
            image: writing,
            text: "Acquire and enhance valuable skills.",
        },
        {
            image: writing,
            text: "Experience a positive and enriching work environment.",
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
    return (_jsxs("div", { className: "benefits", children: [_jsx("div", { className: "benefits-head", children: _jsx("p", { className: "ben", children: "Benefits of a Campus Associate" }) }), _jsx(Slider, { ...settings, children: benefitsData.map((benefit, index) => (_jsx(BenefitsCard, { image: benefit.image, text: benefit.text }, index))) })] }));
};
export default Benefits;
