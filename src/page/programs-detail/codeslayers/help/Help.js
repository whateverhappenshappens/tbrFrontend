import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./Help.css";
import Phone from "../../../../assets/phone-blue.png";
const Help = () => {
    return (_jsxs("div", { className: "help-container", children: [_jsxs("div", { className: "help", children: [_jsx("p", { className: "help-head1", children: "Need help? Don't hesitate!" }), _jsxs("p", { className: "help-head2", children: ["You can reach us at:", " ", _jsx("a", { href: "mailto:info@techbairn.com", children: "info@techbairn.com" }), " or call us at: ", _jsx("a", { href: "tel:+91123456789", children: "+91 123456789" }), "."] })] }), _jsxs("div", { className: "connected-button", children: [_jsx("button", { className: "connected-button-request visbyroundCF bold ", children: _jsxs("div", { className: "connected-button-request-div", children: [_jsx("img", { src: Phone, alt: "" }),_jsx("a", { href: "https://docs.google.com/forms/d/e/1FAIpQLSdKJREAXanAnHM_bDf5OuKje08OHyaxXVypePaqPm0Wlv61gQ/viewform", target: "_blank", rel: "noopener noreferrer", children: _jsx("p", { className: "vr-medium", children: "Request a call back" }) })] }) }),  _jsx("a", { href: "http://bit.ly/forms_TB-CA", target: "_blank", rel: "noopener noreferrer", children: _jsx("button", { className: "connected-button-join", children: _jsx("p", { className: "vr-medium", children: "Join Us" }) }) })] })] }));
};
export default Help;
