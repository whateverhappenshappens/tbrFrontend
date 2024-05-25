import { useState, useEffect, useRef } from "react";
import { Event } from "../../types/Event";
import { events } from "./events";

function EventsManagerPage({ headerHeight }: any) {
  const eventsManagerPage = useRef<HTMLDivElement | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [editableHeading, setEditableHeading] = useState<string>("");
  const [editableSubHeading, setEditableSubHeading] = useState<string>("");
  const [editableMode, setEditableMode] = useState<string>("");
  const [editableSpeakerImg, setSpeakerImg] = useState<string>("");
  const [editableDate, setEditableDate] = useState<string>("");
  const [editableBannerLinkPC, setEditableBannerLinkPC] = useState<string>("");
  const [editableBannerLinkMobile, setEditableBannerLinkMobile] =
    useState<string>("");
  const [editableAboutSpeaker, setEditableAboutSpeaker] = useState<string>("");
  const [editableSpeakerSocial, setEditableSpeakerSocial] =
    useState<string>("");
  const [editableSpeakerExperience, setEditableSpeakerExperience] =
    useState<string>("");

  const [addEvent, setAddEvent] = useState<Event | null>(null);

  const update_component = (event: Event) => {
    setSelectedEvent(event);
    setEditableHeading(event.heading);
    setEditableSubHeading(event.subHeading);
    setEditableMode(event.mode);
    setSpeakerImg(event.speakerImg);
    setEditableDate(event.date);
    setEditableBannerLinkPC(event.bannerLinkPC);
    setEditableBannerLinkMobile(event.bannerLinkMobile);
    setEditableAboutSpeaker(event.aboutSpeaker);
    setEditableSpeakerSocial(event.speakerSocial);
    setEditableSpeakerExperience(event.speakerExperience);
  };

  const handleUpdate = () => {
    if (selectedEvent) {
      // Log the updated data
      console.log(
        `Event updated!:\n${editableHeading}\n${editableSubHeading}\n${editableDate}`
      );

      // Here you can prepare your API call
      // Example:
      // const updatedEvent = {
      //   id: selectedEvent.id,
      //   title: editableTitle,
      //   sub_heading: editableSubHeading,
      //   datetime: editableDatetime,
      // };
      // Then make your API call using updatedEvent

      setSelectedEvent(null);
      setEditableHeading("");
      setEditableSubHeading("");
      setEditableDate("");
    }
  };

  const handleAddEvent = () => {
    setAddEvent({
      bannerLinkPC: "",
      bannerLinkMobile: "",
      heading: "",
      subHeading: "",
      date: "",
      aboutSpeaker: "",
      speakerSocial: "",
      speakerExperience: "",
      mode: "",
      speakerImg: "",
    });
  };

  const handleSaveEvent = () => {
    console.log(addEvent);
    // Here you can handle saving the new event
    // Example:
    // const newEvent: Event = {
    //   id: events.length + 1, // You might want to generate a unique id
    //   title: editableTitle,
    //   sub_heading: editableSubHeading,
    //   datetime: editableDatetime,
    // };
    // console.log("New Event:", newEvent);
    // Push newEvent to your events array or make an API call to save it

    // Reset fields after saving
    setAddEvent(null);
  };

  useEffect(() => {
    eventsManagerPage.current!.style.paddingTop = `${headerHeight}px`;
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
        className="md:w-fit  bg-[#2FD18C] hover:bg-white text-white hover:text-[#2FD18C] border-2 border-[#2FD18C] font-bold text-3xl lg:text-5xl px-10 lg:px-12 py-4 lg:py-7 rounded-2xl transition"
        onClick={handleAddEvent}
      >
        ADD
      </button>

      <div className="w-full flex flex-col gap-5 border-2 rounded-xl p-5 lg:p-10">
        {events.map((event, index) => (
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
                onClick={() => update_component(event)}
              >
                UPDATE
              </button>
              <button className="border-2 border-red-500 rounded-lg px-5 py-3 text-white hover:text-red-500 bg-red-500 hover:bg-white">
                DELETE
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Render the selected event */}
      {selectedEvent && (
        <div className="w-fit h-[100vh] lg:w-5/12 border rounded-xl shadow-2xl   bg-white fixed left-1/2 -translate-x-1/2 top-[32vh] -translate-y-[33%]  overflow-y-scroll z-50 ">
          <div
            className="text-7xl lg:text-9xl overflow-hidden pl-5 lg:pl-10  cursor-pointer w-fit"
            onClick={() => setSelectedEvent(null)}
          >
            &times;
          </div>

          <div className="flex h-full flex-col gap-5 p-5 lg:p-10">
          <div className="flex justify-between items-center">
            <label >Upload the PC banner</label>
            <button className="h-[35px] w-[105px] border-solid border-4 border-black-800 text-3xl">Upload</button>
            </div>
            <input
              type="text"
              placeholder="PC Banner Link"
              value={editableBannerLinkPC}
              onChange={(e) => setEditableBannerLinkPC(e.target.value)}
              className="border px-5 lg:px-7 py-3 lg:py-5 text-xl lg:text-3xl focus:outline-[#2FD18C] rounded-lg overflow-y-scroll"
            />
            
            <input
              type="text"
              placeholder="PC Banner Link"
              value={editableBannerLinkMobile}
              onChange={(e) => setEditableBannerLinkMobile(e.target.value)}
              className="border px-5 lg:px-7 py-3 lg:py-5 text-xl lg:text-3xl focus:outline-[#2FD18C] rounded-lg"
            />
            <input
              type="text"
              placeholder="Event Mode"
              value={editableMode}
              onChange={(e) => setEditableMode(e.target.value)}
              className="border px-5 lg:px-7 py-3 lg:py-5 text-xl lg:text-3xl focus:outline-[#2FD18C] rounded-lg"
            />
            <input
              type="text"
              placeholder="Speaker Image"
              value={editableSpeakerImg}
              onChange={(e) => setSpeakerImg(e.target.value)}
              className="border px-5 lg:px-7 py-3 lg:py-5 text-xl lg:text-3xl focus:outline-[#2FD18C] rounded-lg"
            />
            <input
              type="text"
              placeholder="Heading"
              value={editableHeading}
              onChange={(e) => setEditableHeading(e.target.value)}
              className="border px-5 lg:px-7 py-3 lg:py-5 text-xl lg:text-3xl focus:outline-[#6D87F5] rounded-lg"
            />
            <input
              type="text"
              placeholder="Sub Heading"
              value={editableSubHeading}
              onChange={(e) => setEditableSubHeading(e.target.value)}
              className="border px-5 lg:px-7 py-3 lg:py-5 text-xl lg:text-3xl focus:outline-[#6D87F5] rounded-lg"
            />
            <input
              type="text"
              placeholder="Date"
              value={editableDate}
              onChange={(e) => setEditableDate(e.target.value)}
              className="border px-5 lg:px-7 py-3 lg:py-5 text-xl lg:text-3xl focus:outline-[#6D87F5] rounded-lg"
            />
            <input
              type="text"
              placeholder="About Speaker"
              value={editableAboutSpeaker}
              onChange={(e) => setEditableAboutSpeaker(e.target.value)}
              className="border px-5 lg:px-7 py-3 lg:py-5 text-xl lg:text-3xl focus:outline-[#6D87F5] rounded-lg"
            />
            <input
              type="text"
              placeholder="Speaker's Social Link"
              value={editableSpeakerSocial}
              onChange={(e) => setEditableSpeakerSocial(e.target.value)}
              className="border px-5 lg:px-7 py-3 lg:py-5 text-xl lg:text-3xl focus:outline-[#6D87F5] rounded-lg"
            />
            <input
              type="text"
              placeholder="Speaker's Experience Details"
              value={editableSpeakerExperience}
              onChange={(e) => setEditableSpeakerExperience(e.target.value)}
              className="border px-5 lg:px-7 py-3 lg:py-5 text-xl lg:text-3xl focus:outline-[#6D87F5] rounded-lg"
            />
            <button
              className="border-2 border-[#6D87F5] rounded-lg px-5 lg:px-7 py-3 lg:py-5  text-xl lg:text-3xl font-bold text-white hover:text-[#6D87F5] bg-[#6D87F5] hover:bg-white"
              onClick={handleUpdate}
            >
              UPDATE
            </button>
          </div>
        </div>
      )}

      {/* Render the add event form */}
      {addEvent && (
        <div className="w-fit h-[100vh] lg:w-5/12 border rounded-xl shadow-2xl  bg-white fixed left-1/2 -translate-x-1/2 top-[31vh] -translate-y-[33%]  overflow-y-scroll overflow-hidden z-50  ">
          <div
            className="text-7xl lg:text-9xl overflow-hidden pl-5 lg:pl-10  cursor-pointer w-fit"
            onClick={() => setAddEvent(null)}
          >
            &times;
          </div>

          <div className="flex overflow-auto flex-col gap-5  lg:p-10">
          <div className="flex justify-between items-center">
            <label >Upload the PC banner</label>
            <button className="h-[35px] w-[105px] border-solid border-4 border-black-800 text-3xl">Upload</button>
            </div>
            <input
              type="text"
              placeholder="PC Banner Link"
              value={addEvent.bannerLinkPC}
              onChange={(e) =>
                setAddEvent({ ...addEvent, bannerLinkPC: e.target.value })
              }
              className="border px-5 lg:px-5 py-3 lg:py-5 text-xl lg:text-xl focus:outline-[#2FD18C] rounded-lg"
            />
            <div className="flex justify-between items-center">
            <label >Upload the Mobile banner</label>
            <button className="h-[35px] w-[105px] border-solid border-4 border-black-800 text-3xl">Upload</button>
            </div>
            <input
              type="text"
              placeholder="Mobile Banner Link"
              value={addEvent.bannerLinkMobile}
              onChange={(e) =>
                setAddEvent({ ...addEvent, bannerLinkMobile: e.target.value })
              }
              className="border px-5 lg:px-7 py-3 lg:py-5 text-xl lg:text-3xl focus:outline-[#2FD18C] rounded-lg"
            />
            <div className="flex justify-between items-center">
            <label >Upload the Event banner</label>
            <button className="h-[35px] w-[105px] border-solid border-4 border-black-800 text-3xl">Upload</button>
            </div>
            <input
              type="text"
              placeholder="Event Mode"
              value={addEvent.mode}
              onChange={(e) =>
                setAddEvent({ ...addEvent, mode: e.target.value })
              }
              className="border px-5 lg:px-7 py-3 lg:py-5 text-xl lg:text-3xl focus:outline-[#2FD18C] rounded-lg"
            />
            <div className="flex justify-between items-center">
            <label >Upload the  banner</label>
            <button className="h-[35px] w-[105px] border-solid border-4 border-black-800 text-3xl">Upload</button>
            </div>
            <input
              type="text"
              placeholder="Speaker Image"
              value={addEvent.speakerImg}
              onChange={(e) =>
                setAddEvent({ ...addEvent, speakerImg: e.target.value })
              }
              className="border px-5 lg:px-7 py-3 lg:py-5 text-xl lg:text-3xl focus:outline-[#2FD18C] rounded-lg"
            />
            <div className="flex justify-between items-center">
            <label >Upload the Mobile banner</label>
            <button className="h-[35px] w-[105px] border-solid border-4 border-black-800 text-3xl">Upload</button>
            </div>
            <input
              type="text"
              placeholder="Heading"
              value={addEvent.heading}
              onChange={(e) =>
                setAddEvent({ ...addEvent, heading: e.target.value })
              }
              className="border px-5 lg:px-7 py-3 lg:py-5 text-xl lg:text-3xl focus:outline-[#2FD18C] rounded-lg"
            />
            <div className="flex justify-between items-center">
            <label >Upload the Mobile banner</label>
            <button className="h-[35px] w-[105px] border-solid border-4 border-black-800 text-3xl">Upload</button>
            </div>
            <input
              type="text"
              placeholder="Sub Heading"
              value={addEvent.subHeading}
              onChange={(e) =>
                setAddEvent({ ...addEvent, subHeading: e.target.value })
              }
              className="border px-5 lg:px-7 py-3 lg:py-5 text-xl lg:text-3xl focus:outline-[#2FD18C] rounded-lg"
            />
            <div className="flex justify-between items-center">
            <label >Upload the Mobile banner</label>
            <button className="h-[35px] w-[105px] border-solid border-4 border-black-800 text-3xl">Upload</button>
            </div>
            <input
              type="text"
              placeholder="Date"
              value={addEvent.date}
              onChange={(e) =>
                setAddEvent({ ...addEvent, date: e.target.value })
              }
              className="border px-5 lg:px-7 py-3 lg:py-5 text-xl lg:text-3xl focus:outline-[#2FD18C] rounded-lg"
            />
            <div className="flex justify-between items-center">
            <label >Upload the Mobile banner</label>
            <button className="h-[35px] w-[105px] border-solid border-4 border-black-800 text-3xl">Upload</button>
            </div>
            <input
              type="text"
              placeholder="About Speaker"
              value={addEvent.aboutSpeaker}
              onChange={(e) =>
                setAddEvent({ ...addEvent, aboutSpeaker: e.target.value })
              }
              className="border px-5 lg:px-7 py-3 lg:py-5 text-xl lg:text-3xl focus:outline-[#2FD18C] rounded-lg"
            />
            <label>Upload the speaker banner</label>
            <input
              type="text"
              placeholder="Speaker's Social Link"
              value={addEvent.speakerSocial}
              onChange={(e) =>
                setAddEvent({ ...addEvent, speakerSocial: e.target.value })
              }
              className="border px-5 lg:px-7 py-3 lg:py-5 text-xl lg:text-3xl focus:outline-[#2FD18C] rounded-lg"
            />
            <label>Upload the speaker banner</label>
            <input
              type="text"
              placeholder="Speaker's Experience Details"
              value={addEvent.speakerExperience}
              onChange={(e) =>
                setAddEvent({ ...addEvent, speakerExperience: e.target.value })
              }
              className="border px-5 lg:px-7 py-3 lg:py-5 text-xl lg:text-3xl focus:outline-[#2FD18C] rounded-lg"
            />
            <button
              className="border-2 border-[#2FD18C] rounded-lg px-5 lg:px-7 py-3 lg:py-5 text-xl lg:text-3xl font-bold text-white hover:text-[#2FD18C] bg-[#2FD18C] hover:bg-white"
              onClick={handleSaveEvent}
            >
              SAVE
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default EventsManagerPage;
