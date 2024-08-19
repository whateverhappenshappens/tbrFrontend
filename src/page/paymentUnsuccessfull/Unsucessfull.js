import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import unsuccess from "../../assets/unsuccess.png";
import "./Unsucessfull.css";
import { NavLink } from 'react-router-dom';
function Unsucessfull() {
    return (_jsx(_Fragment, { children: _jsxs("div", { className: 'himan mt-[10rem] ', children: [_jsx("div", { className: 'h-[50rem] flex justify-center items-center', children: _jsx("img", { src: unsuccess, alt: "" }) }), _jsx("p", { className: 'imp flex justify-center items-center', children: "Your Payment was unsuccessful !" }), _jsx("p", { className: 'impo1 flex justify-center items-center', children: "So sorry to hear that your payment didn't go through!" }), _jsx("p", { className: 'imp2 flex justify-center items-center', children: " Need help? Don't hesitate!" }), _jsx("p", { className: 'impo1 flex justify-center items-center', children: " You can reach us at: hello@techbain.comor call us at: +91 8789726459" }), _jsxs(NavLink, { to: "/", children: [" ", _jsx("div", { className: 'impo-button', children: _jsx("button", { children: "Return to Home" }) })] })] }) }));
}
export default Unsucessfull;
