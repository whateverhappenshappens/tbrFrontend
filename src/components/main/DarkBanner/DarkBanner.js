import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "../../../styles/components/DarkBanner.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const DarkBanner = ({ title, subtitle, logos }) => {
    const settings = {
        infinite: true,
        speed: 1500,
        slidesToShow: logos.length / 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: logos.length / 4,
                },
            },
        ],
    };
    return (_jsxs("div", { className: "dark-banner mb-[5rem]", children: [_jsx("div", { className: "title", children: title }), _jsx("div", { className: "subtitle", children: subtitle }), _jsx("div", { className: "logo-container", children: _jsx(Slider, { ...settings, children: logos.map((logo, index) => (_jsx("img", { src: logo, alt: `logo-${index}` }, index))) }) })] }));
};
export default DarkBanner;
