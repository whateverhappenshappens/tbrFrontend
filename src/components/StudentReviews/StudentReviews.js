import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./StudentReviews.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ReviewItem = ({ name, program_name, review, rating, social, }) => {
    return (_jsxs("div", { className: "review-item", children: [_jsxs("div", { className: "profile", children: [_jsx("img", { src: "", alt: "" }), _jsxs("div", { className: "desc", children: [_jsx("div", { className: "name", children: name }), _jsx("div", { className: "program", children: program_name })] }), _jsx("div", { className: "social", children: _jsx("a", { href: social, children: _jsx("img", { src: "", alt: "" }) }) })] }), _jsx("div", { className: "review", children: review }), _jsx("div", { className: "rating", children: rating })] }));
};
const StudentReviews = ({ reviewItems }) => {
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
                    prevArrow: _jsx("div", { className: "prev-arrow", children: "❮" }),
                    nextArrow: _jsx("div", { className: "next-arrow", children: "❯" }),
                },
            },
        ],
    };
    return (_jsxs("div", { className: "studentReviews", children: [_jsx("h2", { children: "Student Reviews" }), _jsx(Slider, { ...settings, className: "slider", children: reviewItems.map((item, idx) => (_jsx(ReviewItem, { name: item.name, program_name: item.program_name, review: item.review, rating: item.rating, social: item.social }, idx))) })] }));
};
export default StudentReviews;
