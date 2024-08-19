import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import "./HackathonPage.css";
import Biggest from "./biggest/Biggest";
import Buttons from "./buttons/Buttons";
import FiltersListings from "./filters-listings/Filters-Listings";
const HackathonPage = ({ Pastdata, Activedata, }) => {
    const [isactive, setIsactive] = useState(true);
    const activeCallback = () => {
        setIsactive(!isactive);
    };
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
    }, []);
    return (_jsxs("div", { className: "hackathon-page", children: [_jsx(Biggest, { ActiveData: Activedata }), _jsx(Buttons, { activeCallback: activeCallback, Pastdata: Pastdata, Activedata: Activedata }), _jsx(FiltersListings, { isactive: isactive, Pastdata: Pastdata, Activedata: Activedata })] }));
};
export default HackathonPage;
