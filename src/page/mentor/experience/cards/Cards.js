import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./Cards.css";
const Cards = (props) => {
    return (_jsxs("div", { className: "exp-cards", children: [_jsx("div", { className: "exp-cards-colorfulbg", style: { backgroundColor: props.color }, children: _jsx("img", { src: props.image, alt: props.heading, className: "exp-card-image" }) }), _jsx("p", { className: "exp-cards-head1 vr-bold", children: props.heading }), _jsx("div", { className: "exp-cards-para1 vr-regular", children: props.para })] }));
};
export default Cards;
