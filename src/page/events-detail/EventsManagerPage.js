import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import { events as initialEvents } from "./events";
import Papa from "papaparse";
import AddForm from "./Add"; // Import the add form component
import UpdateForm from "./Update"; // Import the update form component
import ConfirmationDialog from "./ConfirmationDialog"; // Import the confirmation dialog component
import { EventsAPI } from "../../apis/EventsAPI/EventsAPI";
import "./bulb.css";
function EventsManagerPage({ headerHeight }) {
    const eventsManagerPage = useRef(null);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [isAddFormVisible, setAddFormVisible] = useState(false); // State to control add form visibility
    const [isUpdateFormVisible, setUpdateFormVisible] = useState(false); // State to control update form visibility
    const [isConfirmDialogVisible, setConfirmDialogVisible] = useState(false); // State to control confirmation dialog visibility
    const [currentEvents, setCurrentEvents] = useState(initialEvents);
    const [allEventsDownload, setAllEventsDownload] = useState(initialEvents); // State to manage current events
    const [eventToDelete, setEventToDelete] = useState(null); // State to keep track of event to delete
    const updateComponent = (event) => {
        console.log(event);
        setSelectedEvent(event);
        setUpdateFormVisible(true); // Show the update form when an event is selected for update
    };
    useEffect(() => {
        const all = async () => {
            try {
                await EventsAPI.allEventsBasicDetail()
                    .then((res) => {
                    console.log(res.data);
                    const eventsWithActive = res.data.map((event) => ({
                        ...event,
                        isActive: true,
                    }));
                    setCurrentEvents(res.data);
                })
                    .catch((e) => {
                    console.error(e);
                });
            }
            catch (e) {
                console.error(e);
            }
        };
        const allDetailsForDownload = async () => {
            try {
                await EventsAPI.allEventsDetailsForDownload()
                    .then((res) => {
                    console.log(res.data);
                    setAllEventsDownload(res.data);
                })
                    .catch((e) => {
                    console.error(e);
                });
            }
            catch (e) {
                console.error(e);
            }
        };
        all();
        allDetailsForDownload();
    }, []);
    const handleDownload = () => {
        const csvData = Papa.unparse(allEventsDownload.map((event) => ({
            bannerLinkPC: event.bannerLinkPC,
            bannerLinkMobile: event.bannerLinkMobile,
            heading: event.heading,
            subHeading: event.subHeading,
            date: event.date,
            aboutSpeaker: event.aboutSpeaker,
            speakerSocial: event.speakerSocial,
            speakerExperience: event.speakerExperience,
            mode: event.mode,
            speakerImageLink: event.speakerImageLinkLink,
            speakerName: event.speakerName,
        })));
        const blob = new Blob([csvData], { type: "text/csv" });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "events.csv";
        a.click();
        window.URL.revokeObjectURL(url);
    };
    const handleDelete = async (event) => {
        try {
            console.log(event.id);
            if (event.isDeleted) {
                await EventsAPI.UndoDeleteEventById(event.id);
                setCurrentEvents((prevEvents) => prevEvents.map((e) => e.id === event.id ? { ...e, isDeleted: false } : e));
            }
            else {
                await EventsAPI.DeleteEventById(event.id);
                setCurrentEvents((prevEvents) => prevEvents.map((e) => e.id === event.id ? { ...e, isDeleted: true } : e));
            }
        }
        catch (e) {
            console.error(e);
        }
    };
    const handle = async (event) => {
        try {
            console.log(event.id);
            if (event.isActive) {
                await EventsAPI.pastEvents(event.id);
                setCurrentEvents((prevEvents) => prevEvents.map((e) => e.id === event.id ? { ...e, isActive: false } : e));
            }
            else {
                await EventsAPI.activeEvents(event.id);
                setCurrentEvents((prevEvents) => prevEvents.map((e) => e.id === event.id ? { ...e, isActive: false } : e));
            }
        }
        catch (e) {
            console.error(e);
        }
    };
    const confirmDelete = () => {
        if (eventToDelete) {
            setCurrentEvents(currentEvents.filter((e) => e !== eventToDelete));
            setEventToDelete(null);
            setConfirmDialogVisible(false);
        }
    };
    const cancelDelete = () => {
        setEventToDelete(null);
        setConfirmDialogVisible(false);
    };
    useEffect(() => {
        if (eventsManagerPage.current) {
            eventsManagerPage.current.style.paddingTop = `${headerHeight}px`;
        }
    }, [headerHeight]);
    return (_jsxs("div", { ref: eventsManagerPage, className: "flex flex-col gap-10 px-[30px] text-[#2E436A] overflow-visible relative", children: [_jsx("div", { className: "mt-10 text-5xl md:text-7xl md:text-center font-bold overflow-visible", children: "Manage Events" }), _jsx("button", { className: "md:w-fit bg-[#2FD18C] hover:bg-white text-white hover:text-[#2FD18C] border-2 border-[#2FD18C] font-bold text-3xl lg:text-5xl px-20 lg:px-12 py-4 lg:py-7 rounded-2xl transition visible", onClick: () => setAddFormVisible(true), children: "ADD" }), _jsx("button", { className: "md:w-fit bg-[#2FD18C] hover:bg-white text-white hover:text-[#2FD18C] border-2 border-[#2FD18C] font-bold text-3xl lg:text-5xl px-10 lg:px-12 py-4 lg:py-7 rounded-2xl transition", onClick: handleDownload, children: "Download" }), _jsx("div", { className: "w-full flex flex-col gap-5 border-2 rounded-xl p-5 lg:p-10", children: currentEvents.map((event, index) => (_jsxs("div", { className: "border rounded-lg p-3 lg:p-10 flex flex-col gap-5 lg:gap-7 relative", children: [_jsx("div", { className: `bulb ${event.isActive ? "green" : "red"}` }), _jsxs("div", { className: "lg:flex lg:flex-col lg:gap-5", children: [_jsx("div", { className: "text-3xl lg:text-5xl font-bold overflow-visible", children: event.heading }), _jsx("div", { className: "text-2xl lg:text-4xl overflow-visible", children: event.subHeading }), _jsx("div", { className: "text-lg lg:text-3xl", children: event.date })] }), _jsxs("div", { className: "text-xl lg:text-3xl font-bold flex gap-5", children: [_jsx("button", { className: "border-2 border-[#6D87F5] rounded-lg px-5 py-3 text-white hover:text-[#6D87F5] bg-[#6D87F5] hover:bg-white", onClick: () => updateComponent(event), children: "UPDATE" }), _jsx("button", { className: `border-2 rounded-lg px-5 py-3 text-white ${event.isDeleted
                                        ? "border-green-500 bg-green-500 hover:text-green-500 hover:bg-white"
                                        : "border-red-500 bg-red-500 hover:text-red-500 hover:bg-white"}`, onClick: () => handleDelete(event), children: event.isDeleted ? "UNDELETE" : "DELETE" })] })] }, index))) }), isAddFormVisible && (_jsxs("div", { className: "fixed inset-0 bg-white z-50 flex flex-col", children: [_jsx("div", { className: "text-7xl lg:text-9xl overflow-hidden pl-5 lg:pl-10 cursor-pointer w-fit self-end m-5", onClick: () => setAddFormVisible(false), children: "\u00D7" }), _jsxs("div", { className: "flex flex-1", children: [_jsx(AddForm, { setAddFormVisible: setAddFormVisible }), " "] })] })), isUpdateFormVisible && selectedEvent && (_jsxs("div", { className: "fixed inset-0 bg-white z-50 flex flex-col", children: [_jsx("div", { className: "text-7xl lg:text-9xl overflow-hidden pl-5 lg:pl-10 cursor-pointer w-fit self-end m-5", onClick: () => setUpdateFormVisible(false), children: "\u00D7" }), _jsxs("div", { className: "flex flex-1", children: [_jsx(UpdateForm, { selectedEvent: selectedEvent, setUpdateFormVisible: setUpdateFormVisible }), " "] })] })), isConfirmDialogVisible && (_jsx(ConfirmationDialog, { message: "Are you sure you want to delete this event?", onConfirm: confirmDelete, onCancel: cancelDelete }))] }));
}
export default EventsManagerPage;
