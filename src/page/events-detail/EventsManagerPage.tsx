import React, { useState, useEffect, useRef } from "react";
import { Event } from "../../types/Event";
import { events as initialEvents } from "./events";
import Papa from "papaparse";
import AddForm from "./Add"; // Import the add form component
import UpdateForm from "./Update"; // Import the update form component
import ConfirmationDialog from "./ConfirmationDialog"; // Import the confirmation dialog component
import { EventsAPI } from "../../apis/EventsAPI/EventsAPI";

function EventsManagerPage({ headerHeight }: any) {
  const eventsManagerPage = useRef<HTMLDivElement | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isAddFormVisible, setAddFormVisible] = useState(false); // State to control add form visibility
  const [isUpdateFormVisible, setUpdateFormVisible] = useState(false); // State to control update form visibility
  const [isConfirmDialogVisible, setConfirmDialogVisible] = useState(false); // State to control confirmation dialog visibility
  const [currentEvents, setCurrentEvents] = useState<Event[]>(initialEvents);
  const [allEventsDownload, setAllEventsDownload] =
    useState<Event[]>(initialEvents); // State to manage current events
  const [eventToDelete, setEventToDelete] = useState<Event | null>(null); // State to keep track of event to delete

  const updateComponent = (event: Event) => {
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
            setCurrentEvents(res.data);
          })
          .catch((e) => {
            console.error(e);
          });
      } catch (e) {
        console.error(e);
      }
    };

    const allDetailsForDownload = async () => {
      try {
        await EventsAPI.allEventsDetailsForDownload()
          .then((res: any) => {
            console.log(res.data);
            setAllEventsDownload(res.data);
          })
          .catch((e) => {
            console.error(e);
          });
      } catch (e) {
        console.error(e);
      }
    };

    all();
    allDetailsForDownload();
  }, []);

  const handleDownload = () => {
    const csvData = Papa.unparse(
      allEventsDownload.map((event) => ({
        bannerLinkPC: event.bannerLinkPC,
        bannerLinkMobile: event.bannerLinkMobile,
        heading: event.heading,
        subHeading: event.subHeading,
        date: event.date,
        aboutSpeaker: event.aboutSpeaker,
        speakerSocial: event.speakerSocial,
        speakerExperience: event.speakerExperience,
        mode: event.mode,
        speakerImage: event.speakerImageLink,
        speakerName: event.speakerName,
      }))
    );

    const blob = new Blob([csvData], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "events.csv";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const handleDelete = async (event: any) => {
    try {
      console.log(event.id);
      await EventsAPI.DeleteEventById(event.id);
    } catch (e) {
      console.error(e);
    }
    // setEventToDelete(event);
    // setConfirmDialogVisible(true);
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

  return (
    <div
      ref={eventsManagerPage}
      className="flex flex-col gap-10 px-[30px] text-[#2E436A] overflow-visible relative"
    >
      <div className="mt-10 text-5xl md:text-7xl md:text-center font-bold overflow-visible">
        Manage Events
      </div>

      <button
        className="md:w-fit bg-[#2FD18C] hover:bg-white text-white hover:text-[#2FD18C] border-2 border-[#2FD18C] font-bold text-3xl lg:text-5xl px-20 lg:px-12 py-4 lg:py-7 rounded-2xl transition visible"
        onClick={() => setAddFormVisible(true)}
      >
        ADD
      </button>
      <button
        className="md:w-fit bg-[#2FD18C] hover:bg-white text-white hover:text-[#2FD18C] border-2 border-[#2FD18C] font-bold text-3xl lg:text-5xl px-10 lg:px-12 py-4 lg:py-7 rounded-2xl transition"
        onClick={handleDownload}
      >
        Download
      </button>

      <div className="w-full flex flex-col gap-5 border-2 rounded-xl p-5 lg:p-10">
        {currentEvents.map((event, index) => (
          <div
            key={index}
            className="border rounded-lg p-3 lg:p-10 flex flex-col gap-5 lg:gap-7"
          >
            <div className="lg:flex lg:flex-col lg:gap-5">
              <div className="text-3xl lg:text-5xl font-bold overflow-visible">
                {event.heading}
              </div>
              <div className="text-2xl lg:text-4xl overflow-visible">
                {event.subHeading}
              </div>
              <div className="text-lg lg:text-3xl">{event.date}</div>
            </div>
            <div className="text-xl lg:text-3xl font-bold flex gap-5">
              <button
                className="border-2 border-[#6D87F5] rounded-lg px-5 py-3 text-white hover:text-[#6D87F5] bg-[#6D87F5] hover:bg-white"
                onClick={() => updateComponent(event)}
              >
                UPDATE
              </button>

              <button
                className="border-2 border-red-500 rounded-lg px-5 py-3 text-white hover:text-red-500 bg-red-500 hover:bg-white"
                onClick={() => handleDelete(event)}
              >
                DELETE
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Render the add event form */}
      {isAddFormVisible && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col">
          <div
            className="text-7xl lg:text-9xl overflow-hidden pl-5 lg:pl-10 cursor-pointer w-fit self-end m-5"
            onClick={() => setAddFormVisible(false)}
          >
            &times;
          </div>
          <div className="flex flex-1">
            <AddForm setAddFormVisible={setAddFormVisible} />{" "}
            {/* Render the add form component */}
          </div>
        </div>
      )}

      {/* Render the update event form */}
      {isUpdateFormVisible && selectedEvent && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col">
          <div
            className="text-7xl lg:text-9xl overflow-hidden pl-5 lg:pl-10 cursor-pointer w-fit self-end m-5"
            onClick={() => setUpdateFormVisible(false)}
          >
            &times;
          </div>
          <div className="flex flex-1">
            <UpdateForm
              selectedEvent={selectedEvent}
              setUpdateFormVisible={setUpdateFormVisible}
            />{" "}
            {/* Render the update form component */}
          </div>
        </div>
      )}

      {/* Render the confirmation dialog */}
      {isConfirmDialogVisible && (
        <ConfirmationDialog
          message="Are you sure you want to delete this event?"
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </div>
  );
}

export default EventsManagerPage;
