import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Profile.css";
import boyProfile from "../../assets/Boy photo.png";
function ProfilePage() {
    const [year, setYear] = useState(null);
    return (_jsx("div", { className: "Main mt-[10rem]", children: _jsxs("div", { className: "main_box22", children: [_jsxs("aside", { className: "left1", children: [_jsx("img", { src: boyProfile, alt: "" }), _jsxs("div", { className: "buttondabba1", children: [_jsx("button", { className: "buttun22 buttun1", children: "Change Picture" }), _jsx("button", { className: "buttun buttun2", children: "Apply Changes" })] })] }), _jsxs("div", { className: "right12", children: [_jsx("label", { children: "Fullname" }), _jsx("br", {}), _jsx("br", {}), _jsx("div", { className: "search-container", children: _jsx("input", { type: "text", name: "search", placeholder: "John Doe" }) }), _jsx("br", {}), _jsx("label", { children: "Email" }), _jsx("br", {}), _jsx("br", {}), _jsx("div", { className: "search-container", children: _jsx("input", { type: "text", name: "search", placeholder: "Johndoe@gmail.com" }) }), _jsx("br", {}), _jsx("label", { children: "Phone Number" }), _jsx("br", {}), _jsx("br", {}), _jsx("div", { className: "search-container", children: _jsx("input", { type: "text", name: "search", placeholder: "Enter phone number" }) }), _jsx("br", {}), _jsx("label", { children: "College Name" }), _jsx("br", {}), _jsx("br", {}), _jsx("div", { className: "search-container", children: _jsx("input", { type: "text", name: "search", placeholder: "Enter college name" }) }), _jsx("br", {}), _jsx("label", { children: "Year of passing" }), _jsx("br", {}), _jsx("br", {}), _jsx("div", { className: "search-container", children: _jsx(DatePicker, { selected: year, onChange: (date) => setYear(date), showYearPicker: true, dateFormat: "yyyy", placeholderText: "Enter year of passing" }) }), _jsx("br", {})] })] }) }));
}
export default ProfilePage;
