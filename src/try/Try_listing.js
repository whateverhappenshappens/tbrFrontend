import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./Try_listing.css";
import { Link } from "react-router-dom";
const listingsData = [
    {
        id: 1,
        title: "Building & Scaling a D2C Brand in India Building & Scaling a D2C Brand in India",
        speaker: "Arjun Vaidya, Founder- Dr. Vaidya, V3 Ventures",
        date: "13 May 2022",
        time: "13:00",
    },
    {
        id: 2,
        title: "Innovative Approaches to Digital Marketing Innovative Approaches to Digital Marketing ",
        speaker: "Ravi Kumar, Head of Marketing, XYZ Corp",
        date: "22 June 2022",
        time: "14:30",
    },
    {
        id: 3,
        title: "The Future of AI in Healthcare",
        speaker: "Dr. Meera Singh, Chief Scientist, HealthTech",
        date: "5 July 2022",
        time: "10:00",
    },
    {
        id: 4,
        title: "Sustainable Practices in Modern Business",
        speaker: "Anita Sharma, CEO, Green Solutions",
        date: "19 August 2022",
        time: "11:00",
    },
];
const TryListings = () => {
    return (_jsx("div", { className: "listings-wrapper", children: listingsData.map((listing) => (_jsxs("div", { className: " listings-container", children: [_jsx("div", { className: "listings-rectangle", children: _jsx("p", { children: "H" }) }), _jsxs("div", { className: "listings-content", children: [_jsxs("div", { className: "listings-name", children: [_jsx("p", { className: "listings-name-para1", children: listing.title }), _jsxs("p", { className: "listings-name-para2", children: ["| ", listing.speaker] })] }), _jsx("div", { className: "listings-date", children: _jsxs("p", { children: [listing.date, _jsx("br", {}), listing.time] }) })] }), _jsxs("div", { className: "listings-button", children: [_jsx("button", { className: "listings-button-enroll", children: _jsx("p", { children: "Enroll" }) }), _jsx(Link, { to: `/events/${listing.id}`, className: "listings-button-details", children: _jsx("p", { children: "Details" }) })] })] }, listing.id))) }));
};
export default TryListings;
