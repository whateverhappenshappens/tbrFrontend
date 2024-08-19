import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./Cards.css";
const Cards = (props) => {
    return (_jsxs("div", { className: "roles-cards", children: [_jsx("div", { style: { backgroundColor: props.color }, className: "roles-colorful-bg", children: _jsx("img", { src: props.image, alt: "" }) }), _jsx("div", { className: "roles-cards-paragraph", children: _jsx("p", { className: "vr-regular", children: props.para }) })] }));
};
export default Cards;
