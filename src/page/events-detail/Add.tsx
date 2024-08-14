import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";
import { v4 as uuidv4 } from "uuid";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { GeneratePresignedUrlforUpload } from "../../apis/s3_api/S3";
import axios from "axios"; // Import axios for the upload

function App({ selectedEvent, setUpdateFormVisible }) {
  const [formData, setFormData] = useState({
    pcBanner: "",
    mobileBanner: "",
    eventMode: "",
    speakerImage: "",
    heading: "",
    subHeading: "",
    date: new Date(),
    aboutSpeaker: "",
    speakerSocialLink: "",
    speakerExperienceDetails: "",
    speakerName: "",
    youtubeLink: "",
    isActive: false,
  });
  const [uuid, setUuid] = useState(uuidv4());
  const [selectedFile, setSelectedFile] = useState(null); // For file selection
  const [preSignedUrl, setPreSignedUrl] =  useState(''); // Store the pre-signed URL
  const [uploadStatus, setUploadStatus] = useState(""); // Track upload status
  const [uploadType, setUploadType] = useState(""); // Track the type of upload

  useEffect(() => {
    if (selectedEvent) {
      setFormData({
        pcBanner: selectedEvent.bannerLinkPC,
        mobileBanner: selectedEvent.bannerLinkMobile,
        eventMode: selectedEvent.mode,
        speakerImage: selectedEvent.speakerImg,
        heading: selectedEvent.heading,
        subHeading: selectedEvent.subHeading,
        date: new Date(selectedEvent.date),
        aboutSpeaker: selectedEvent.aboutSpeaker,
        speakerSocialLink: selectedEvent.speakerSocial,
        speakerExperienceDetails: selectedEvent.speakerExperience,
        speakerName: selectedEvent.speakerName,
        youtubeLink: selectedEvent.youtubeLink,
        isActive: selectedEvent.isActive,
      });
      setUuid(selectedEvent.uuid || uuidv4());
    }
  }, [selectedEvent]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prevState) => ({
      ...prevState,
      date,
    }));
  };
const generateUuid = () =>{
  //same uuid for complete event
}
  const handleRadioChange = (e) => {
    const isActive = e.target.value === "true";
    setFormData((prevState) => ({
      ...prevState,
      isActive,
    }));
  };

  const handleFileChange = async (e, type) => {
    const file = e.target.files[0];
    if (file) {
      try {
        // Replace spaces with underscores and remove special characters in the heading
        const sanitizedHeading = formData.heading.trim().replace(/\s+/g, "_").replace(/[^\w-]/g, "");
  
        const formattedFileName = `${uuid}_${type}_${sanitizedHeading}_${file.name}`;
  
        // Generate a pre-signed URL for the file upload
        const presignedUrlUpload = await GeneratePresignedUrlforUpload(formattedFileName);
        console.log("the url is", presignedUrlUpload);
        setSelectedFile(file); // Store the selected file
        setPreSignedUrl(presignedUrlUpload); // Store the pre-signed URL
        setUploadType(type); // Store the type of upload
  
        // Update the formData with the URL of the uploaded file (optional)
        const fileUrl = presignedUrlUpload;
        console.log("setPresingedurl", fileUrl);
        setFormData((prevState) => ({
          ...prevState,
          [type]: fileUrl,
        }));
  
        console.log(`Pre-signed URL generated: ${fileUrl}`);
      } catch (error) {
        console.error("Error generating pre-signed URL:", error);
      }
    }
  };
  

  const handleSelectForUploadClick = (type) => {
    document.getElementById(type).click();
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file first.");
      return;
    }

    try {
      console.log("Uploading:", uploadType); // Log the type of banner being uploaded

      // Upload the file to the pre-signed URL
      console.log("the url is",preSignedUrl);
      console.log("Selected file type:",selectedFile.type);
      const res = await axios.put(preSignedUrl,selectedFile);
      setUploadStatus("File uploaded successfully!");
      console.log("File uploaded successfully!");
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploadStatus("Failed");
      
    }
  };

  const handleSaveClick = () => {
    console.log("Data updated:", formData);
    setUpdateFormVisible(false);
  };

  return (
    <div className="main">
      {/* Other input fields */}

      <div className="inline-form">
        <label htmlFor="eventMode">Event Mode:</label>
        <input
          type="text"
          id="eventMode"
          name="eventMode"
          placeholder="Event Mode"
          value={formData.eventMode}
          onChange={handleInputChange}
        />
      </div>
      <br></br>
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
      <br></br>
      <div className="inline-form">
        <label htmlFor="subHeading">Sub Heading:</label>
        <input
          type="text"
          id="subHeading"
          name="subHeading"
          placeholder="Sub Heading"
          value={formData.subHeading}
          onChange={handleInputChange}
        />
      </div>
      <br></br>
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
      <br></br>
      <div className="inline-form">
        <label htmlFor="speakerName">Speaker's Name:</label>
        <input
          type="text"
          id="speakerName"
          name="speakerName"
          placeholder="Speaker's Name"
          value={formData.speakerName}
          onChange={handleInputChange}
        />
      </div>
      <br></br>
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
      <br></br>
      <div className="inline-form">
        <label htmlFor="speakerSocialLink">Speaker's Social Link:</label>
        <input
          type="text"
          id="speakerSocialLink"
          name="speakerSocialLink"
          placeholder="Speaker's Social Link"
          value={formData.speakerSocialLink}
          onChange={handleInputChange}
        />
      </div>
      <br></br>
      <div className="inline-form">
        <label htmlFor="speakerExperienceDetails">
          Speaker's Experience Details:
        </label>
        <input
          type="text"
          id="speakerExperienceDetails"
          name="speakerExperienceDetails"
          placeholder="Speaker's Experience Details"
          value={formData.speakerExperienceDetails}
          onChange={handleInputChange}
        />
      </div>
      <br></br>
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
      <br></br>
      <div className="inline-form">
        <label>Is Active:</label>
        <div>
          <label>
            <input
              type="radio"
              name="isActive"
              value="true"
              checked={formData.isActive === true}
              onChange={handleRadioChange}
            />
            &nbsp; Yes
          </label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <label>
            <input
              type="radio"
              name="isActive"
              value="false"
              checked={formData.isActive === false}
              onChange={handleRadioChange}
            />
            &nbsp; No
          </label>
        </div>
      </div>
      <br></br>
      <div className="inline-form">
        <label htmlFor="pcBanner">PC Banner Link:</label>
        <input
          type="file"
          id="pcBanner"
          name="pcBanner"
          onChange={(e) => handleFileChange(e, "pcBanner","")}
          style={{ display: "none" }}
        />
        <button onClick={() => handleSelectForUploadClick("pcBanner")}>
          Select
        </button>
        <button onClick={handleUpload}>Upload</button>
        <p>{uploadStatus}</p>
      </div>
      <br></br>
      <div className="inline-form">
        <label htmlFor="mobileBanner">Mobile Banner Link:</label>
        <input
          type="file"
          id="mobileBanner"
          name="mobileBanner"
          onChange={(e) => handleFileChange(e, "mobileBanner")}
          style={{ display: "none" }}
        />
        <button onClick={() => handleSelectForUploadClick("mobileBanner")}>
          Select
        </button>
        <button onClick={handleUpload}>Upload</button>
        <p>{uploadStatus}</p>
      </div>
      <br></br>
      <div className="inline-form">
        <label htmlFor="speakerImage">Speaker Image:</label>
        <input
          type="file"
          id="speakerImage"
          name="speakerImage"
          onChange={(e) => handleFileChange(e, "speakerImage")}
          style={{ display: "none" }}
        />
        <button onClick={() => handleSelectForUploadClick("speakerImage")}>
          Select
        </button>
        <button onClick={handleUpload}>Upload</button>
        <p>{uploadStatus}</p>
      </div>
      <br></br>
      <div className="update-form-btn-container">
        <button
          className="update-form-cancel-btn"
          onClick={() => setUpdateFormVisible(false)}
        >
          Cancel
        </button>
        <button className="apply_button" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
}

export default App;
