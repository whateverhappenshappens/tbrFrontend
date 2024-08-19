import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./Listings.css";
import { Link } from "react-router-dom";
const Listings = (props) => {
    return (_jsxs("div", { className: "listings-container", children: [_jsx("div", { className: "listings-rectangle", style: { backgroundColor: props.rectColor }, children: _jsx("p", { style: { color: props.hColor }, children: "H" }) }), _jsxs("div", { className: "listings-name", children: [_jsx("p", { className: "visbyroundCF bold listings-name-para1", children: props.heading }), _jsx("p", { className: "visbyroundCF medium listings-name-para2", children: props.para })] }), _jsx("div", { className: "listings-date", children: _jsx("p", { className: "visbyroundCF bold", children: props.date }) }), _jsxs("div", { className: "listings-button", children: [_jsx("button", { className: "visbyroundCF demibold listings-button-enroll", children: _jsx("p", { children: "Enroll" }) }), _jsx(Link, { to: `/events/${props.id}`, className: "visbyroundCF demibold listings-button-details", children: _jsx("p", { children: "Details" }) })] })] }));
};
export default Listings;
