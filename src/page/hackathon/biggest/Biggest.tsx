import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Biggest.css";
import eventBoy from "../../../assets/event boy@2x.png";
import { Link } from "react-router-dom";

interface Props {
  ActiveData: any;
}

const Biggest: React.FC<Props> = ({ ActiveData }) => {
  console.log(ActiveData);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div className="biggest-hackathon-carousel overflow-visible">
      <h1 className="text-[#2E436A] text-center mb-10 text-5xl md:text-7xl font-extrabold overflow-hidden xl:pl-[140px] xl:pr-[100px]">
        Events
      </h1>
      <Slider {...settings}>
        {ActiveData && Array.isArray(ActiveData) ? (
          ActiveData.map((data: any, index: any) => (
            <div key={index} className="biggest-hackathon-slide">
              <div className="biggest-hackathon">
                <div className="biggest-hackathon-text">
                  <p className="biggest-hackathon-text-large visbyroundCF extrabold">
                    {data.heading}
                  </p>
                  <p className="biggest-hackathon-text-small visbyroundCF medium">
                    {data.description}
                  </p>
                  <Link to={`/events/${data.id}`}>
                    <button className="biggest-hackathon-button visbyroundCF bold">
                      <p>Enroll Now</p>
                    </button>
                  </Link>
                </div>
                <div className="biggest-hackathon-img">
                  <p className="image-para visbyroundCF extrabold">
                    {data.heading}
                  </p>
                  <img src={eventBoy} alt="Event"></img>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </Slider>
    </div>
  );
};

export default Biggest;

// import React from "react";
// // import axios from "axios";
// import "./Biggest.css";
// import eventBoy from "../../../assets/event boy@2x.png";
// import { Link } from "react-router-dom";

// interface Props {
//   ActiveData: any;
// }

// const Biggest: React.FC<Props> = ({ ActiveData }) => {
//   // const handleEnroll = async () => {
//   //   try {
//   //     const accessToken = localStorage.getItem("access-token");
//   //     const response = await axios.post(
//   //       "/api/cart/add",
//   //       {
//   //         userId: "user-id",
//   //         courses: ["web-dev-hackathon"],
//   //       },
//   //       {
//   //         headers: {
//   //           Authorization: `Bearer ${accessToken}`,
//   //         },
//   //       }
//   //     );
//   //     console.log("Enrollment successful", response.data);
//   //   } catch (error) {
//   //     console.error("Error enrolling in hackathon", error);
//   //   }
//   // };

//   return (
//     <div className="biggest-hackathon">
//       {ActiveData.map((data:any,index:any)=>(
//         <div key={index} className="biggest-hackathon-text">
//         <p className="biggest-hackathon-text-large visbyroundCF extrabold">
//           {/* All India Biggest <br /> Web Dev Hackathon */}
//           {data.heading}
//         </p>
//         <p className="biggest-hackathon-text-small visbyroundCF medium">
//           {/* Join India's biggest Web Dev Hackathon and be a part of something
//           grand! Earn exciting goodies on winning. */}
//           {data.description}
//         </p>
//         <Link  to={`/events/${data.id}`}><button
//           className="biggest-hackathon-button visbyroundCF bold"
//           // onClick={handleEnroll}
//         >
//           <p>Enroll Now</p>
//         </button>
//         </Link>
//       </div>
//       <div className="biggest-hackathon-img">
//         <p className="image-para visbyroundCF extrabold">
//           {/* All India Biggest <br /> Web Dev Hackathon */}
//           {data.heading}
//         </p>
//         <img src={eventBoy} alt="Event"></img>
//       </div>
//       ))}

//     </div>
//   );
// };

// export default Biggest;
