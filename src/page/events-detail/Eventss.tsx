import React, { useEffect, useState } from "react";
import "../../styles/pages/EventsDetail.css";
import StudentSaying from "./studentssaying/StudentSaying";
import Upcoming from "./upcoming/Upcoming";
import AboutEvents from "./about-events/AboutEvents";
import Speaker from "./about-speaker/AboutSpeaker";
import Faq from "./faq/Faq";
import Help from "./help/Help";
import { useParams } from "react-router-dom";
import { EventsAPI } from "../../apis/EventsAPI/EventsAPI";
import VideoPlayer from "./video-events/VideoEvent";

const Events: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<any>();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!id) return;
        const res = await EventsAPI.EventById(id);
        console.log(res.data);
        setData(res.data);
      } catch (error) {
        console.error("Error fetching event details:", error);
      }
    };
    fetchData();
  }, [id]); // Add id as a dependency

  return (
    <div className="events">
      <Upcoming star={4} rating={5000} students={10000} data={data} />
      {data?.youtubeLink && <VideoPlayer videolink={data.youtubeLink} />}
      <AboutEvents data={data} />
      <Speaker data={data} />
      
      <Faq />
      <Help />
    </div>
  );
};

export default Events;
