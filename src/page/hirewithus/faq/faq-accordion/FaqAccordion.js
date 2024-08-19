import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./FaqAccordion.css";
import { useState } from "react";
const FaqAccordion = (props) => {
    const [isActive, setIsActive] = useState(false);
    const style = {
        borderTopLeftRadius: "60px",
        borderTopRightRadius: "60px",
        borderBottomLeftRadius: !isActive ? "60px" : "0",
        borderBottomRightRadius: !isActive ? "60px" : "0",
        boxShadow: isActive ? "0px 8px 6px #00000029" : "none",
    };
    return (_jsx("div", { className: "faqaccordion", children: _jsxs("div", { className: "faqaccordion-item", children: [_jsxs("div", { style: style, className: "faqaccordion-title", onClick: () => setIsActive(!isActive), children: [_jsx("div", { className: "faqaccordion-question-mentor", children: _jsx("p", { children: props.title }) }), _jsx("div", { className: "faqaccordion-plus-minus", children: isActive ? "-" : "+" })] }), isActive && (_jsx("div", { className: "faqaccordion-content", children: props.content }))] }) }));
};
export default FaqAccordion;
