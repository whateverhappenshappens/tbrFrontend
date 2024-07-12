// import Slider from "react-slick";
// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";
// import growth from "../../assets/growth-graph.png";

// interface Props {
//   pastdata: any;
// }

// const Events: React.FC<Props> = ({ pastdata }) => {
//   const settings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           prevArrow: <div className="prev-arrow">&#10094;</div>,
//           nextArrow: <div className="next-arrow">&#10095;</div>,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="events py-[50px] md:pl-[70px] md:pr-[60px] xl:my-20">
//       <h1 className="text-[#2E436A] text-center mb-10 text-5xl md:text-7xl font-extrabold overflow-hidden xl:pl-[140px] xl:pr-[100px]">
//         Events
//       </h1>
//       <div className="xl:pl-[140px] xl:pr-[100px]">
//         <Slider {...settings} className="px-[30px] text-[#2E436A]">
//           {pastdata?.map((card, index) => (
//             <div key={index} className="border rounded-2xl p-10">
//               <div className="w-full h-full flex flex-col gap-5">
//                 <div
//                   className="rounded-xl h-1/2 p-10"
//                   style={{ backgroundColor: card.color }}
//                 >
//                   <iframe
//                     width="100%"
//                     height="100%"
//                     src={`https://www.youtube.com/embed/${card.youtubeLink}`}
//                     title={card.heading}
//                     frameBorder="0"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                     className="rounded-xl"
//                   ></iframe>
//                 </div>
//                 <div className="h-1/2 md:flex md:flex-col md:gap-5">
//                   <p className="vr-bold font-bold text-4xl md:text-5xl overflow-hidden">
//                     {card.heading}
//                   </p>
//                   <div className="vr-regular text-3xl md:text-4xl overflow-hidden">
//                     {card.subHeading}
//                   </div>
//                 </div>
//                 <div className="vr-bold text-4xl font-bold overflow-hidden">
//                   {card.speakerName}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default Events;

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

interface Props {
  pastdata: any;
}

const Events: React.FC<Props> = ({ pastdata }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          prevArrow: <div className="prev-arrow">&#10094;</div>,
          nextArrow: <div className="next-arrow">&#10095;</div>,
        },
      },
    ],
  };

  const extractVideoId = (youtubeUrl: string): string | null => {
    try {
      const url = new URL(youtubeUrl);
      const params = new URLSearchParams(url.search);
      return params.get("v");
    } catch (error) {
      console.error("Invalid YouTube URL", error);
      return null;
    }
  };

  return (
    <div className="events py-[50px] md:pl-[70px] md:pr-[60px] xl:my-20">
      {/* <h1 className="text-[#2E436A] text-center mb-10 text-5xl md:text-7xl font-extrabold overflow-hidden xl:pl-[140px] xl:pr-[100px]">
        Events
      </h1> */}
      <div className="xl:pl-[140px] xl:pr-[100px]">
        <Slider {...settings} className="px-[30px] text-[#2E436A]">
          {pastdata?.map((card: any, index: any) => {
            const videoId = extractVideoId(card.youtubeLink);
            return (
              <div key={index} className="border rounded-2xl p-10">
                <div className="w-full h-full flex flex-col gap-5">
                  <div
                    className="rounded-xl h-1/2 p-10"
                    style={{ backgroundColor: card.color }}
                  >
                    {videoId ? (
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title={card.heading}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-xl"
                      ></iframe>
                    ) : (
                      <div className="text-red-500">Invalid YouTube URL</div>
                    )}
                  </div>
                  <div className="h-1/2 md:flex md:flex-col md:gap-5">
                    <p className="vr-bold font-bold text-4xl md:text-5xl overflow-hidden">
                      {card.heading}
                    </p>
                    <div className="vr-regular text-3xl md:text-4xl overflow-hidden">
                      {card.subHeading}
                    </div>
                  </div>
                  <div className="vr-bold text-4xl font-bold overflow-hidden">
                    {card.speakerName}
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Events;
