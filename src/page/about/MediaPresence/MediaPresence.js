import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./MediaPresence.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const MediaItem = ({ title, link, para, image }) => {
    return (_jsxs("div", { className: "media-item", children: [_jsx("div", { className: "image", children: _jsx("img", { src: image, alt: title }) }), _jsx("div", { className: "media-title", children: title }), _jsx("div", { className: "media-para", children: para }), _jsx("a", { href: link, target: "_blank", rel: "noopener noreferrer", className: "read-now", children: "READ NOW" })] }));
};
const MediaPresence = ({ mediaItems }) => {
    const settings = {
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
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    prevArrow: _jsx("div", { className: "prev-arrow", children: "\u276E" }),
                    nextArrow: _jsx("div", { className: "next-arrow", children: "\u276F" }),
                },
            },
        ],
    };
    return (_jsxs("div", { className: "media-presence", children: [_jsx("h2", { children: "Media Presence" }), _jsx(Slider, { ...settings, className: "slider", children: mediaItems.map((item, idx) => (_jsx(MediaItem, { title: item.title, para: item.para, image: item.image, link: item.link }, idx))) })] }));
};
export default MediaPresence;
