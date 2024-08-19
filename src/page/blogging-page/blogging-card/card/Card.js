import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import "../../../../styles/components/bCard.css";
import { useNavigate } from "react-router-dom";
const Card = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const navigate = useNavigate();
    const [isExpanded, setIsExpanded] = useState(false);
    const handleToggleReadMore = (e) => {
        e.stopPropagation();
        setIsExpanded(!isExpanded);
    };
    const handleBlogClick = (id) => {
        navigate(`/blog/${id}`);
    };
    return (_jsxs("div", { onClick: () => handleBlogClick(props.id), className: "card", children: [_jsx("div", { className: "card-image", children: _jsx("img", { src: props.cardimg, alt: "card" }) }), _jsxs("div", { className: "card-content", children: [_jsx("p", { className: "card-content-games", children: props.para }), _jsx("h3", { className: "card-content-heading", children: props.cardheading }), _jsx("p", { className: `card-content-description ${isExpanded ? "expanded" : ""}`, children: props.description }), props.description.length > 150 && (_jsx("button", { className: "read-more-btn", onClick: handleToggleReadMore, children: isExpanded ? "Show Less" : "Read More" })), _jsx("div", { className: "my", children: _jsxs("div", { className: "card-content-user-details", children: [_jsx("img", { src: props.img, alt: "", className: "card-content-user-details-img" }), _jsx("div", { className: "card-content-user-details-desc", children: _jsx("p", { className: "name", children: props.name }) }), _jsx("p", { children: props.date })] }) })] })] }));
};
export default Card;
