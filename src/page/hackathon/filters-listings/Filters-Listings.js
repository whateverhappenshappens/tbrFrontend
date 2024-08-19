import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import "./Filters-Listings.css";
import Listings from "./hackathons-listings/Listings";
const FiltersListings = ({ Activedata, Pastdata, isactive, }) => {
    return (_jsx("div", { className: "hackathons-info", children: _jsx("div", { className: "hackathon-listings", children: isactive
                ? Activedata?.map((item, index) => (_jsxs(React.Fragment, { children: [_jsx(Listings, { rectColor: "#FFEDB6", hColor: "#FFC001", heading: item.heading, para: item.subHeading, id: item.id, date: new Date(item.date).toLocaleString("en-US", {
                                day: "2-digit",
                                month: "long",
                                year: "numeric",
                                hour: "numeric",
                                minute: "numeric",
                                hour12: true,
                            }) }), _jsx("hr", {})] }, index)))
                : Pastdata?.map((item, index) => (_jsxs(React.Fragment, { children: [_jsx(Listings, { rectColor: "#FFEDB6", hColor: "#FFC001", heading: item.heading, para: item.subHeading, date: new Date(item.date).toLocaleString("en-US", {
                                day: "2-digit",
                                month: "long",
                                year: "numeric",
                                hour: "numeric",
                                minute: "numeric",
                                hour12: true,
                            }), id: item.id }), _jsx("hr", {})] }, index))) }) }));
};
export default FiltersListings;
