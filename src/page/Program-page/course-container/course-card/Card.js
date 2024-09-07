import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./Card.css";
import { Link } from "react-router-dom";
import { useCart } from "../../../../CartContext";
import { toast } from "react-toastify";

const Card = (props) => {
    const { addToCart } = useCart();

    // Function to generate a random number between 8000 and 10000
    const getRandomRatingCount = () => {
        return Math.floor(Math.random() * (10000 - 8000 + 1)) + 8000;
    };

    // Call the function to generate a random rating count for each card
    const randomRatingCount = getRandomRatingCount();

    const handleEnroll = () => {
        const course = {
            id: props.id,
            name: props.heading,
            description: props.para1,
            price: 4999,
            discountedPrice: 3429,
            image: props.image,
        };
        addToCart(course);
        toast.success("Item successfully added to cart!");
    };

    return (
        _jsxs("div", {
            className: "course-card",
            children: [
                _jsxs("div", {
                    className: "course-card-banner-image",
                    children: [
                        _jsx("p", { children: "Live Classes" }),
                        _jsx("img", { src: props.image, alt: "Girl" }),
                    ],
                }),
                _jsxs("div", {
                    className: "course-card-content-box",
                    children: [
                        _jsxs("div", {
                            className: "course-card-content-header",
                            children: [
                                _jsx("h3", { children: props.heading }),
                                _jsx("div", {
                                    className: "course-card-content-header-rating",
                                    children: `4.0 ★★★★☆ (${randomRatingCount})`,
                                }),
                            ],
                        }),
                        _jsxs("div", {
                            className: "course-card-content",
                            children: [
                                _jsx("p", {
                                    className: "course-card-content-para1",
                                    children: props.para1,
                                }),
                                _jsxs("div", {
                                    className:
                                        "months-and-internship-oppurtunity",
                                    children: [
                                        _jsx("div", {
                                            className: "months-details",
                                            children: "3 months",
                                        }),
                                        _jsx("div", {
                                            className:
                                                "internship-oppurtunity-details",
                                            children:
                                                "Internship oppurtunity",
                                        }),
                                    ],
                                }),
                                _jsx("p", {
                                    className: "Teacher-Name",
                                    children: props.teachername,
                                }),
                                _jsxs("div", {
                                    className: "course-card-content-button",
                                    children: [
                                        _jsx("button", {
                                            className:
                                                "enroll-btn course-card-content-button-enroll-now",
                                            onClick: handleEnroll,
                                            children: "Enroll Now",
                                        }),
                                        _jsx("button", {
                                            className:
                                                "course-card-content-button-view-details",
                                            children: _jsx(Link, {
                                                to: props.link,
                                                children: " Details",
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
};

export default Card;
