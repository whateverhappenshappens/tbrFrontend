import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./Card.css";
import { Link } from "react-router-dom";
import { useCart } from "../../../../CartContext";
import { toast } from "react-toastify";
const Card = (props) => {
    const { addToCart } = useCart();
    const handleEnroll = () => {
        // const generateUniqueId = () => {
        //   return `${Date.now()}-${Math.floor(Math.random() * 1000)}`;
        // };
        const course = {
            id: props.id,
            name: props.heading,
            description: props.para1,
            price: 4999,
            discountedPrice: 2999,
            image: props.image
        };
        addToCart(course);
        toast.success("Item successfully added to cart!");
    };
    return (_jsxs("div", { className: "course-card", children: [_jsxs("div", { className: "course-card-banner-image", children: [_jsx("p", { children: "Live Classes" }), _jsx("img", { src: props.image, alt: "Girl" })] }), _jsxs("div", { className: "course-card-content-box", children: [_jsxs("div", { className: "course-card-content-header", children: [_jsx("h3", { children: props.heading }), _jsx("div", { className: "course-card-content-header-rating", children: "4.0 \u2605 \u2605 \u2605 \u2605 \u2606 (10,000)" })] }), _jsxs("div", { className: "course-card-content", children: [_jsx("p", { className: "course-card-content-para1", children: props.para1 }), _jsxs("div", { className: "months-and-internship-oppurtunity", children: [_jsx("div", { className: "months-details", children: "3 months" }), _jsx("div", { className: "internship-oppurtunity-details", children: "Internship oppurtunity" })] }), _jsx("p", { className: "Teacher-Name", children: props.teachername }), _jsxs("div", { className: "course-card-content-button", children: [_jsx("button", { className: "enroll-btn course-card-content-button-enroll-now", onClick: handleEnroll, children: "Enroll Now" }), _jsx("button", { className: "course-card-content-button-view-details", children: _jsx(Link, { to: props.link, children: " Details" }) })] })] })] })] }));
};
export default Card;
