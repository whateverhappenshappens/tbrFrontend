import React, { useState, useEffect } from "react";
import "./styles.css";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { EventsAPI } from "../../apis/EventsAPI/EventsAPI";
import toast from "react-hot-toast";
import { api } from "../../apis/configs/axiosConfigs";
import * as jsonpatch from "fast-json-patch";
import { useNavigate } from "react-router-dom";

// S3 Configuration
const config = {
  bucketName: "myBucket",
  dirName: "photos" /* optional */,
  region: "eu-west-1",
  accessKeyId: "ANEIFNENI4324N2NIEXAMPLE",
  secretAccessKey: "cms21uMxçduyUxYjeg20+DEkgDxe6veFosBT7eUgEXAMPLE",
};

// JSON Patch Operation Type
type JsonPatchOp = {
  op: "add" | "remove" | "replace" | "move" | "copy" | "test";
  path: string;
  value?: any;
};

// Function to patch data
const patchData = async (
  url: string,
  patchOps: JsonPatchOp[],
  accessToken: string
) => {
  try {
    const response = await api.patch(url, patchOps, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("An error occurred while patching data:", error);
    throw error;
  }
};

// FormData Type
interface FormData {
  pcBanner: string;
  mobileBanner: string;
  eventMode: string;
  speakerImage: string;
  heading: string;
  subHeading: string;
  date: string;
  aboutSpeaker: string;
  speakerSocialLink: string;
  speakerExperienceDetails: string;
  speakerName: string;
  youtubeLink: string;
  isActive: boolean;
  enrollLink: string;
}

function UpdateForm({ selectedEvent, setUpdateFormVisible }) {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [data, setData] = useState<FormData | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(
    localStorage.getItem("access-token")
  );
  const [formData, setFormData] = useState<FormData>({
    pcBanner: "",
    mobileBanner: "",
    eventMode: "",
    speakerImage: "",
    heading: "",
    subHeading: "",
    date: "",
    aboutSpeaker: "",
    speakerSocialLink: "",
    speakerExperienceDetails: "",
    speakerName: "",
    youtubeLink: "",
    isActive: false,
    enrollLink: "",
  });

  const [originalData, setOriginalData] = useState<FormData | null>(null);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const res = await EventsAPI.EventById(selectedEvent.id);
        const eventData = res.data;
        setData(eventData);
        setOriginalData(eventData);
        setFormData({
          pcBanner: eventData.bannerLinkPC,
          mobileBanner: eventData.bannerLinkMobile,
          eventMode: eventData.mode,
          speakerImage: eventData.speakerImageLink,
          heading: eventData.heading,
          subHeading: eventData.subHeading,
          date: eventData.date,
          aboutSpeaker: eventData.aboutSpeaker,
          speakerSocialLink: eventData.speakerSocial,
          speakerExperienceDetails: eventData.speakerExperience,
          speakerName: eventData.speakerName,
          youtubeLink: eventData.youtubeLink,
          isActive: eventData.isActive,
          enrollLink: eventData.enrollLink,
        });
      } catch (e) {
        console.error(e);
      }
    };

    if (selectedEvent) {
      fetchEventData();
    }
  }, [selectedEvent]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isActive = e.target.value === "true";
    setFormData((prevState) => ({
      ...prevState,
      isActive,
    }));
  };

  const handleFileChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: keyof FormData
  ) => {
    setShowPopup(true);
    const file = e.target.files?.[0];
    if (file) {
      try {
        const data = await S3FileUpload.uploadFile(file, config);
        setFormData((prevState) => ({
          ...prevState,
          [fieldName]: data.location,
        }));
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleUploadClick = (fieldName: keyof FormData) => {
    const fileInput = document.getElementById(
      `${fieldName}File`
    ) as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleSaveClick = async () => {
    if (!accessToken || !data) {
      navigate("/login");
      return;
    }

    if (!originalData) {
      console.error("Original data is not available");
      return;
    }

    const preprocessedFormData: FormData = { ...originalData, ...formData };
    const patchOps = jsonpatch.compare(originalData, preprocessedFormData);

    if (patchOps.length > 0) {
      const url = `/v1.5/events/${selectedEvent.id}`;
      try {
        const result = await patchData(url, patchOps, accessToken);
        setData(result);
        toast.success("Event updated successfully!");
      } catch (error) {
        console.error("Failed to patch data:", error);
        toast.error("Failed to update event!");
      }
    } else {
      toast.error("No changes to update.");
    }

    setUpdateFormVisible(false);
  };

  const handleOptionClick = (option: string) => {
    setShowPopup(false);
    if (option === "yes") {
      handleSaveClick();
    } else {
      console.log("Update cancelled");
    }
  };

  return (
    <div className="main">
      <div className="inline-form">
        <label htmlFor="pcBanner">PC Banner Link:</label>
        <input
          type="text"
          id="pcBanner"
          name="pcBanner"
          placeholder="PC Banner Link"
          value={formData.pcBanner}
          onChange={handleInputChange}
        />
        <input
          type="file"
          id="pcBannerFile"
          style={{ display: "none" }}
          onChange={(e) => handleFileChange(e, "pcBanner")}
        />
        <button
          onClick={() => handleUploadClick("pcBanner")}
          className="upload-btn"
        >
          Upload
        </button>
      </div>
      <br />
      <div className="inline-form">
        <label htmlFor="mobileBanner">Mobile Banner Link:</label>
        <input
          type="text"
          id="mobileBanner"
          name="mobileBanner"
          placeholder="Mobile Banner Link"
          value={formData.mobileBanner}
          onChange={handleInputChange}
        />
        <input
          type="file"
          id="mobileBannerFile"
          style={{ display: "none" }}
          onChange={(e) => handleFileChange(e, "mobileBanner")}
        />
        <button
          onClick={() => handleUploadClick("mobileBanner")}
          className="upload-btn"
        >
          Upload
        </button>
      </div>
      <br />
      <div className="inline-form">
        <label htmlFor="speakerImage">Speaker Image:</label>
        <input
          type="text"
          id="speakerImage"
          name="speakerImage"
          placeholder="Speaker Image"
          value={formData.speakerImage}
          onChange={handleInputChange}
        />
        <input
          type="file"
          id="speakerImageFile"
          style={{ display: "none" }}
          onChange={(e) => handleFileChange(e, "speakerImage")}
        />
        <button
          onClick={() => handleUploadClick("speakerImage")}
          className="upload-btn"
        >
          Upload
        </button>
      </div>
      <br />
      <div className="inline-form">
        <label htmlFor="enrollLink">Enroll Link:</label>
        <input
          type="text"
          id="enrollLink"
          name="enrollLink"
          placeholder="Enroll Link"
          value={formData.enrollLink}
          onChange={handleInputChange}
        />
        <input
          type="file"
          id="enrollLinkFile"
          style={{ display: "none" }}
          onChange={(e) => handleFileChange(e, "enrollLink")}
        />
        <button
          onClick={() => handleUploadClick("enrollLink")}
          className="upload-btn"
        >
          Upload
        </button>
      </div>
      <br />
      <div className="inline-form">
        <label htmlFor="heading">Heading:</label>
        <input
          type="text"
          id="heading"
          name="heading"
          placeholder="Heading"
          value={formData.heading}
          onChange={handleInputChange}
        />
      </div>
      <br />
      <div className="inline-form">
        <label htmlFor="subHeading">Sub-Heading:</label>
        <input
          type="text"
          id="subHeading"
          name="subHeading"
          placeholder="Sub-Heading"
          value={formData.subHeading}
          onChange={handleInputChange}
        />
      </div>
      <br />
      <div className="inline-form">
        <label htmlFor="date">Date:</label>
        <div className="date-input-container">
          <input
            type="date"
            id="date"
            name="date"
            placeholder="Date"
            value={formData.date}
            onChange={handleInputChange}
            className="date"
          />
          <span className="calendar-icon">
            <IoCalendarNumberSharp />
          </span>
        </div>
      </div>
      <br />
      <div className="inline-form">
        <label htmlFor="aboutSpeaker">About Speaker:</label>
        <input
          type="text"
          id="aboutSpeaker"
          name="aboutSpeaker"
          placeholder="About Speaker"
          value={formData.aboutSpeaker}
          onChange={handleInputChange}
        />
      </div>
      <br />
      <div className="inline-form">
        <label htmlFor="speakerSocialLink">Speaker Social Link:</label>
        <input
          type="text"
          id="speakerSocialLink"
          name="speakerSocialLink"
          placeholder="Speaker Social Link"
          value={formData.speakerSocialLink}
          onChange={handleInputChange}
        />
      </div>
      <br />
      <div className="inline-form">
        <label htmlFor="speakerExperienceDetails">
          Speaker Experience Details:
        </label>
        <input
          type="text"
          id="speakerExperienceDetails"
          name="speakerExperienceDetails"
          placeholder="Speaker Experience Details"
          value={formData.speakerExperienceDetails}
          onChange={handleInputChange}
        />
      </div>
      <br />
      <div className="inline-form">
        <label htmlFor="speakerName">Speaker Name:</label>
        <input
          type="text"
          id="speakerName"
          name="speakerName"
          placeholder="Speaker Name"
          value={formData.speakerName}
          onChange={handleInputChange}
        />
      </div>
      <br />
      <div className="inline-form">
        <label htmlFor="youtubeLink">YouTube Link:</label>
        <input
          type="text"
          id="youtubeLink"
          name="youtubeLink"
          placeholder="YouTube Link"
          value={formData.youtubeLink}
          onChange={handleInputChange}
        />
      </div>
      <br />
      <div className="inline-form">
        <label htmlFor="isActive">Is Active:</label>
        <label>
          <input
            type="radio"
            name="isActive"
            value="true"
            checked={formData.isActive === true}
            onChange={handleRadioChange}
          />
          Active
        </label>
        <label>
          <input
            type="radio"
            name="isActive"
            value="false"
            checked={formData.isActive === false}
            onChange={handleRadioChange}
          />
          Inactive
        </label>
      </div>
      <br />
      <button
        className="btn-save bg-blue-400 border-none"
        onClick={handleSaveClick}
      >
        Save
      </button>
      <button
        className="btn-save bg-red-400 mt-4 border-none"
        onClick={() => setUpdateFormVisible(false)}
      >
        Cancel
      </button>
    </div>
  );
}

export default UpdateForm;

// import React, { useState, useEffect } from "react";
// import "./styles.css";
// import { IoCalendarNumberSharp } from "react-icons/io5";
// import { EventsAPI } from "../../apis/EventsAPI/EventsAPI";
// import toast from "react-hot-toast";
// import axios from "axios";
// import { api } from "../../apis/configs/axiosConfigs";
// import * as jsonpatch from "fast-json-patch";
// import { useNavigate } from "react-router-dom";

// type JsonPatchOp = {
//   op: "add" | "remove" | "replace" | "move" | "copy" | "test";
//   path: string;
//   value?: any;
// };

// const patchData = async (
//   url: string,
//   patchOps: JsonPatchOp[],
//   accessToken: string
// ) => {
//   try {
//     const response = await api.patch(url, patchOps, {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${accessToken}`,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("An error occurred while patching data:", error);
//     throw error;
//   }
// };

// interface FormData {
//   pcBanner: string;
//   mobileBanner: string;
//   eventMode: string;
//   speakerImage: string;
//   heading: string;
//   subHeading: string;
//   date: string;
//   aboutSpeaker: string;
//   speakerSocialLink: string;
//   speakerExperienceDetails: string;
//   speakerName: string;
//   youtubeLink: string;
//   isActive: boolean;
//   enrollLink: string;
// }

// function UpdateForm({ selectedEvent, setUpdateFormVisible }) {
//   const Navigate = useNavigate();
//   const [showPopup, setShowPopup] = useState(false);
//   const [data, setData] = useState<FormData | null>(null);
//   const [accessToken, setAccessToken] = useState<string | null>(
//     localStorage.getItem("access-token")
//   );
//   const [formData, setFormData] = useState<FormData>({
//     pcBanner: "",
//     mobileBanner: "",
//     eventMode: "",
//     speakerImage: "",
//     heading: "",
//     subHeading: "",
//     date: "",
//     aboutSpeaker: "",
//     speakerSocialLink: "",
//     speakerExperienceDetails: "",
//     speakerName: "",
//     youtubeLink: "",
//     isActive: false,
//     enrollLink: "",
//   });

//   // Store the original data to compare with later
//   const [originalData, setOriginalData] = useState<FormData | null>(null);

//   useEffect(() => {
//     const calldata = async () => {
//       try {
//         console.log(selectedEvent.id);
//         const res = await EventsAPI.EventById(selectedEvent.id);
//         const eventData = res.data;
//         console.log("API response data:", eventData);
//         setData(eventData);
//         setOriginalData(eventData); // Store the original data
//         setFormData({
//           pcBanner: eventData.bannerLinkPC,
//           mobileBanner: eventData.bannerLinkMobile,
//           eventMode: eventData.mode,
//           speakerImage: eventData.speakerImageLink,
//           heading: eventData.heading,
//           subHeading: eventData.subHeading,
//           date: eventData.date,
//           aboutSpeaker: eventData.aboutSpeaker,
//           speakerSocialLink: eventData.speakerSocial,
//           speakerExperienceDetails: eventData.speakerExperience,
//           speakerName: eventData.speakerName,
//           youtubeLink: eventData.youtubeLink,
//           isActive: eventData.isActive,
//           enrollLink: eventData.enrollLink,
//         });
//       } catch (e) {
//         console.error(e);
//       }
//     };

//     if (selectedEvent) {
//       calldata();
//     }
//   }, [selectedEvent]);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const isActive = e.target.value === "true";
//     setFormData((prevState) => ({
//       ...prevState,
//       isActive,
//     }));
//   };

//   const handleUploadClick = () => {
//     setShowPopup(true);
//   };

//   const handleSaveClick = async () => {
//     if (!accessToken || !data) {
//       Navigate("/login");
//       return;
//     }

//     if (!originalData) {
//       console.error("Original data is not available");
//       return;
//     }

//     const preprocessedFormData: FormData = { ...originalData, ...formData };
//     const patchOps = jsonpatch.compare(originalData, preprocessedFormData);
//     console.log(patchOps);

//     // const generatePatchOps = (
//     //   original: FormData,
//     //   updated: FormData
//     // ): Operation[] => {
//     //   const observer = jsonpatch.observe(original);
//     //   // Apply updated values to original to detect changes
//     //   for (const key in updated) {
//     //     if (updated.hasOwnProperty(key)) {
//     //       original[key as keyof FormData] = updated[key as keyof FormData];
//     //     }
//     //   }
//     //   // Generate the patch operations based on observed changes
//     //   return jsonpatch.generate(observer);
//     // };

//     // const patchOps = generatePatchOps(originalData, formData);
//     console.log("Final Patch Operations:", patchOps);
//     if (patchOps.length > 0) {
//       console.log(selectedEvent.id);
//       const url = `/v1.5/events/${selectedEvent.id}`;
//       console.log("URL for PATCH request:", url);

//       try {
//         const result = await patchData(url, patchOps, accessToken);
//         setData(result);
//         toast.success("Event updated successfully!");
//       } catch (error) {
//         console.error("Failed to patch data:", error);
//         toast.error("Failed to update event!");
//       }
//     } else {
//       toast.error("No changes to update.");
//     }

//     setUpdateFormVisible(false);
//   };

//   const handleOptionClick = (option: string) => {
//     setShowPopup(false);
//     if (option === "yes") {
//       handleSaveClick();
//     } else {
//       console.log("Update cancelled");
//     }
//   };

//   return (
//     <div className="main">
//       {/* Existing form fields */}
//       <div className="inline-form">
//         <label htmlFor="pcBanner">PC Banner Link:</label>
//         <input
//           type="text"
//           id="pcBanner"
//           name="pcBanner"
//           placeholder="PC Banner Link"
//           value={formData.pcBanner}
//           onChange={handleInputChange}
//         />
//         <button onClick={handleUploadClick}>Upload</button>
//       </div>
//       <br></br>
//       <div className="inline-form">
//         <label htmlFor="mobileBanner">Mobile Banner Link:</label>
//         <input
//           type="text"
//           id="mobileBanner"
//           name="mobileBanner"
//           placeholder="Mobile Banner Link"
//           value={formData.mobileBanner}
//           onChange={handleInputChange}
//         />
//         <button onClick={handleUploadClick}>Upload</button>
//       </div>
//       <br></br>
//       <div className="inline-form">
//         <label htmlFor="mobileBanner">Enroll Link:</label>
//         <input
//           type="text"
//           id="enrollLink"
//           name="enrollLink"
//           placeholder="Enroll Link"
//           value={formData.enrollLink}
//           onChange={handleInputChange}
//         />
//         <button onClick={handleUploadClick}>Upload</button>
//       </div>
//       <br></br>
//       <div className="inline-form">
//         <label htmlFor="eventMode">Event Mode:</label>
//         <input
//           type="text"
//           id="eventMode"
//           name="eventMode"
//           placeholder="Event Mode"
//           value={formData.eventMode}
//           onChange={handleInputChange}
//         />
//       </div>
//       <br></br>
//       <div className="inline-form">
//         <label htmlFor="speakerImage">Speaker Image:</label>
//         <input
//           type="text"
//           id="speakerImage"
//           name="speakerImage"
//           placeholder="Speaker Image"
//           value={formData.speakerImage}
//           onChange={handleInputChange}
//         />
//         <button onClick={handleUploadClick}>Upload</button>
//       </div>
//       <br></br>
//       <div className="inline-form">
//         <label htmlFor="heading">Heading:</label>
//         <input
//           type="text"
//           id="heading"
//           name="heading"
//           placeholder="Heading"
//           value={formData.heading}
//           onChange={handleInputChange}
//         />
//       </div>
//       <br></br>
//       <div className="inline-form">
//         <label htmlFor="subHeading">Sub-Heading:</label>
//         <input
//           type="text"
//           id="subHeading"
//           name="subHeading"
//           placeholder="Sub-Heading"
//           value={formData.subHeading}
//           onChange={handleInputChange}
//         />
//       </div>
//       <br></br>
//       <div className="inline-form">
//         <label htmlFor="date">Date:</label>
//         <div className="date-input-container">
//           <input
//             type="date"
//             id="date"
//             name="date"
//             placeholder="Date"
//             value={formData.date}
//             onChange={handleInputChange}
//             className="date"
//           />
//           <span className="calendar-icon">
//             <IoCalendarNumberSharp />
//           </span>
//         </div>
//       </div>
//       <br></br>
//       <div className="inline-form">
//         <label htmlFor="aboutSpeaker">About Speaker:</label>
//         <input
//           type="text"
//           id="aboutSpeaker"
//           name="aboutSpeaker"
//           placeholder="About Speaker"
//           value={formData.aboutSpeaker}
//           onChange={handleInputChange}
//         />
//       </div>
//       <br></br>
//       <div className="inline-form">
//         <label htmlFor="speakerSocialLink">Speaker Social Link:</label>
//         <input
//           type="text"
//           id="speakerSocialLink"
//           name="speakerSocialLink"
//           placeholder="Speaker Social Link"
//           value={formData.speakerSocialLink}
//           onChange={handleInputChange}
//         />
//       </div>
//       <br></br>
//       <div className="inline-form">
//         <label htmlFor="speakerExperienceDetails">
//           Speaker Experience Details:
//         </label>
//         <input
//           type="text"
//           id="speakerExperienceDetails"
//           name="speakerExperienceDetails"
//           placeholder="Speaker Experience Details"
//           value={formData.speakerExperienceDetails}
//           onChange={handleInputChange}
//         />
//       </div>
//       <br></br>
//       <div className="inline-form">
//         <label htmlFor="speakerName">Speaker Name:</label>
//         <input
//           type="text"
//           id="speakerName"
//           name="speakerName"
//           placeholder="Speaker Name"
//           value={formData.speakerName}
//           onChange={handleInputChange}
//         />
//       </div>
//       <br></br>
//       <div className="inline-form">
//         <label htmlFor="youtubeLink">YouTube Link:</label>
//         <input
//           type="text"
//           id="youtubeLink"
//           name="youtubeLink"
//           placeholder="YouTube Link"
//           value={formData.youtubeLink}
//           onChange={handleInputChange}
//         />
//       </div>
//       <br></br>
//       <div className="inline-form">
//         <label htmlFor="isActive">Is Active:</label>
//         <label>
//           <input
//             type="radio"
//             name="isActive"
//             value="true"
//             checked={formData.isActive === true}
//             onChange={handleRadioChange}
//           />
//           Active
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="isActive"
//             value="false"
//             checked={formData.isActive === false}
//             onChange={handleRadioChange}
//           />
//           Inactive
//         </label>
//       </div>
//       <br></br>
//       <button
//         className="btn-save bg-blue-400 border-none"
//         onClick={handleSaveClick}
//       >
//         Save
//       </button>
//       {/* {showPopup && (
//         <div className="popup-container">
//           <div className="popup">
//             <h2>Are you sure you want to update:</h2>
//             <button onClick={() => handleOptionClick("yes")}>Yes</button>
//             <button onClick={() => handleOptionClick("no")}>No</button>
//           </div>
//         </div>
//       )} */}
//       <button
//         className="btn-save bg-red-400 mt-4 border-none"
//         onClick={() => setUpdateFormVisible(false)}
//       >
//         Cancel
//       </button>
//     </div>
//   );
// }

// export default UpdateForm;

// // import React, { useState, useEffect } from "react";
// // import "./styles.css";
// // import { IoCalendarNumberSharp } from "react-icons/io5";
// // import { EventsAPI } from "../../apis/EventsAPI/EventsAPI";
// // import toast from "react-hot-toast";
// // import patchData from "../../utils/patchData";

// // function UpdateForm({ selectedEvent, setUpdateFormVisible }) {
// //   const [showPopup, setShowPopup] = useState(false);
// //   const [data, setData] = useState<any>();
// //   const [accessToken, setAccessToken] = useState<string | null>(localStorage.getItem('access-token'));
// //   const [formData, setFormData] = useState({
// //     pcBanner: "",
// //     mobileBanner: "",
// //     eventMode: "",
// //     speakerImage: "",
// //     heading: "",
// //     subHeading: "",
// //     date: "",
// //     aboutSpeaker: "",
// //     speakerSocialLink: "",
// //     speakerExperienceDetails: "",
// //     speakerName: "",
// //     youtubeLink: "",
// //     isActive: false,
// //   });

// //   const handlePatch = async () => {
// //     if (!accessToken) {
// //       console.error('Access token is not available');
// //       return;
// //     }

// //     const patchOps = [
// //       { op: 'replace', path: '/heading', value: 'New Heading' },
// //       { op: 'replace', path: '/subHeading', value: 'New Sub Heading' },
// //     ];
// //   // console.log("hello");
// //   // const getEventDetailByid = (selectedEvent: any) => {
// //   //   try {
// //   //     console.log(data);
// //   //   } catch (e) {
// //   //     console.error(e);
// //   //   }
// //   // };

// //   useEffect(() => {
// //     const calldata = async () => {
// //       try {
// //         const res = await EventsAPI.EventById(selectedEvent.id);
// //         setData(res.data);
// //       } catch (e) {
// //         console.error(e);
// //       }
// //     };

// //     if (selectedEvent) {
// //       calldata();
// //     }
// //   }, [selectedEvent]);

// //   useEffect(() => {
// //     if (data) {
// //       setFormData({
// //         pcBanner: data.bannerLinkPC,
// //         mobileBanner: data.bannerLinkMobile,
// //         eventMode: data.mode,
// //         speakerImage: data.speakerImageLink,
// //         heading: data.heading,
// //         subHeading: data.subHeading,
// //         date: data.date,
// //         aboutSpeaker: data.aboutSpeaker,
// //         speakerSocialLink: data.speakerSocial,
// //         speakerExperienceDetails: data.speakerExperience,
// //         speakerName: data.speakerName,
// //         youtubeLink: data.youtubeLink,
// //         isActive: data.isActive,
// //       });
// //     }
// //   }, [data]);
// //   // useEffect(() => {

// //   //   const calldata = async()=>{
// //   //     try{
// //   //     await EventsAPI.EventById(selectedEvent.id)
// //   //     .then(res=>{
// //   //       setData(res.data);
// //   //     }).catch(e=>{
// //   //       console.error(e);
// //   //     })}catch(e){
// //   //       console.error(e)
// //   //     }

// //   //   if (selectedEvent) {
// //   //     setFormData({
// //   //       pcBanner: data?.bannerLinkPC,
// //   //       mobileBanner: data?.bannerLinkMobile,
// //   //       eventMode: data?.mode,
// //   //       speakerImage: data?.speakerImageLink,
// //   //       heading: data?.heading,
// //   //       subHeading: data?.subHeading,
// //   //       date: data?.date,
// //   //       aboutSpeaker: data?.aboutSpeaker,
// //   //       speakerSocialLink: data?.speakerSocial,
// //   //       speakerExperienceDetails: data?.speakerExperience,
// //   //       speakerName: data?.speakerName,
// //   //       youtubeLink: data?.youtubeLink,
// //   //       isActive: data?.isActive,
// //   //     });
// //   //   }
// //   // }, [selectedEvent]);

// //   const handleInputChange = (e: any) => {
// //     const { name, value } = e.target;
// //     setFormData((prevState) => ({
// //       ...prevState,
// //       [name]: value,
// //     }));
// //   };
// //   const formatDate = (date: any) => {
// //     const year = date.getFullYear();
// //     const month = String(date.getMonth() + 1).padStart(2, "0");
// //     const day = String(date.getDate()).padStart(2, "0");
// //     return `${year}-${month}-${day}`;
// //   };
// //   const handleRadioChange = (e: any) => {
// //     const isActive = e.target.value === "true";
// //     setFormData((prevState) => ({
// //       ...prevState,
// //       isActive,
// //     }));
// //   };

// //   const handleUploadClick = () => {
// //     setShowPopup(true);
// //   };

// //   const handleSaveClick = () => {
// //     EventsAPI.UpdateManageEvents(selectedEvent.id);
// //     setUpdateFormVisible(false);
// //   };

// //   const handleOptionClick = (option: any) => {
// //     setShowPopup(false);
// //     if (option === "yes") {
// //       console.log("Data updated:", formData);
// //     } else {
// //       console.log("Update cancelled");
// //     }
// //   };

// //   return (
// //     <div className="main">
// //       {/* Existing form fields */}
// //       <div className="inline-form">
// //         <label htmlFor="pcBanner">PC Banner Link:</label>
// //         <input
// //           type="text"
// //           id="pcBanner"
// //           name="pcBanner"
// //           placeholder="PC Banner Link"
// //           value={formData.pcBanner}
// //           onChange={handleInputChange}
// //         />
// //         <button onClick={handleUploadClick}>Upload</button>
// //       </div>
// //       <br></br>
// //       <div className="inline-form">
// //         <label htmlFor="mobileBanner">Mobile Banner Link:</label>
// //         <input
// //           type="text"
// //           id="mobileBanner"
// //           name="mobileBanner"
// //           placeholder="Mobile Banner Link"
// //           value={formData.mobileBanner}
// //           onChange={handleInputChange}
// //         />
// //         <button onClick={handleUploadClick}>Upload</button>
// //       </div>
// //       <br></br>
// //       <div className="inline-form">
// //         <label htmlFor="eventMode">Event Mode:</label>
// //         <input
// //           type="text"
// //           id="eventMode"
// //           name="eventMode"
// //           placeholder="Event Mode"
// //           value={formData.eventMode}
// //           onChange={handleInputChange}
// //         />
// //       </div>
// //       <br></br>
// //       <div className="inline-form">
// //         <label htmlFor="speakerImage">Speaker Image:</label>
// //         <input
// //           type="text"
// //           id="speakerImage"
// //           name="speakerImage"
// //           placeholder="Speaker Image"
// //           value={formData.speakerImage}
// //           onChange={handleInputChange}
// //         />
// //         <button onClick={handleUploadClick}>Upload</button>
// //       </div>
// //       <br></br>
// //       <div className="inline-form">
// //         <label htmlFor="heading">Heading:</label>
// //         <input
// //           type="text"
// //           id="heading"
// //           name="heading"
// //           placeholder="Heading"
// //           value={formData.heading}
// //           onChange={handleInputChange}
// //         />
// //       </div>
// //       <br></br>
// //       <div className="inline-form">
// //         <label htmlFor="subHeading">Sub-Heading:</label>
// //         <input
// //           type="text"
// //           id="subHeading"
// //           name="subHeading"
// //           placeholder="Sub-Heading"
// //           value={formData.subHeading}
// //           onChange={handleInputChange}
// //         />
// //       </div>
// //       <br></br>
// //       <div className="inline-form">
// //         <label htmlFor="date">Date:</label>
// //         <div className="date-input-container">
// //           <input
// //             type="date"
// //             id="date"
// //             name="date"
// //             placeholder="Date"
// //             value={formData.date}
// //             onChange={handleInputChange}
// //             className="date"
// //           />
// //           <span className="calendar-icon">
// //             <IoCalendarNumberSharp />
// //           </span>
// //         </div>
// //       </div>
// //       <br></br>
// //       <div className="inline-form">
// //         <label htmlFor="speakerName">Speaker Name:</label>
// //         <input
// //           type="text"
// //           id="speakerName"
// //           name="speakerName"
// //           placeholder="Speaker Name"
// //           value={formData.speakerName}
// //           onChange={handleInputChange}
// //         />
// //       </div>
// //       <br></br>
// //       <div className="inline-form">
// //         <label htmlFor="aboutSpeaker">About Speaker:</label>
// //         <input
// //           type="text"
// //           id="aboutSpeaker"
// //           name="aboutSpeaker"
// //           placeholder="About Speaker"
// //           value={formData.aboutSpeaker}
// //           onChange={handleInputChange}
// //         />
// //       </div>
// //       <br></br>
// //       <div className="inline-form">
// //         <label htmlFor="speakerSocialLink">Speaker Social Link:</label>
// //         <input
// //           type="text"
// //           id="speakerSocialLink"
// //           name="speakerSocialLink"
// //           placeholder="Speaker Social Link"
// //           value={formData.speakerSocialLink}
// //           onChange={handleInputChange}
// //         />
// //         {/* <button onClick={handleUploadClick}>Upload</button> */}
// //       </div>
// //       <br></br>
// //       <div className="inline-form">
// //         <label htmlFor="speakerExperienceDetails">
// //           Speaker Experience Details:
// //         </label>
// //         <input
// //           type="text"
// //           id="speakerExperienceDetails"
// //           name="speakerExperienceDetails"
// //           placeholder="Speaker Experience Details"
// //           value={formData.speakerExperienceDetails}
// //           onChange={handleInputChange}
// //         />
// //       </div>
// //       <br></br>
// //       <div className="inline-form">
// //         <label htmlFor="youtubeLink">YouTube Link:</label>
// //         <input
// //           type="text"
// //           id="youtubeLink"
// //           name="youtubeLink"
// //           placeholder="YouTube Link"
// //           value={formData.youtubeLink}
// //           onChange={handleInputChange}
// //         />
// //         {/* <button onClick={handleUploadClick}>Upload</button> */}
// //       </div>
// //       <br></br>

// //       {/* New radio buttons for isActive */}
// //       <div className="inline-form">
// //         <label>Is Active:</label>
// //         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
// //         <div>
// //           <label>
// //             <input
// //               type="radio"
// //               name="isActive"
// //               value="true"
// //               checked={formData.isActive === true}
// //               onChange={handleRadioChange}
// //             />
// //             &nbsp; Yes
// //           </label>
// //           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
// //           <label>
// //             <input
// //               type="radio"
// //               name="isActive"
// //               value="false"
// //               checked={formData.isActive === false}
// //               onChange={handleRadioChange}
// //             />
// //             &nbsp; No
// //           </label>
// //         </div>
// //       </div>
// //       <br></br>

// //       <button className="btn-save" onClick={handleSaveClick}>
// //         Save
// //       </button>
// //       {showPopup && (
// //         <div className="popup-container">
// //           <div className="popup">
// //             <h2>Are you sure you want to update:</h2>
// //             <button onClick={() => handleOptionClick("yes")}>Yes</button>
// //             <button onClick={() => handleOptionClick("no")}>No</button>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default UpdateForm;
