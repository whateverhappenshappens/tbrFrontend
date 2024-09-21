import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";
import { v4 as uuidv4 } from "uuid";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { GeneratePresignedUrlforUpload } from "../../apis/s3_api/S3";
import axios from "axios"; // Import axios for the upload
import toast from "react-hot-toast";
import { EventsAPI } from "../../apis/EventsAPI/EventsAPI";
interface AddEventFormProps {
  selectedEvent: any; // Replace `any` with the actual type if known
  setUpdateFormVisible: (visible: boolean) => void;
  setAddFormVisible: (visible: boolean) => void;  // Include this prop
}
const App: React.FC<AddEventFormProps> = ({
  selectedEvent,
  setUpdateFormVisible,
  setAddFormVisible,
}) => {
  const [formData, setFormData] = useState({
    bannerLinkPC: "",
    bannerLinkMobile: "",
    eventMode: "",
    speakerImageLink: "",
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
  const [selectedFile, setSelectedFile] = useState(null);
  const [preSignedUrl, setPreSignedUrl] = useState("");
  const [uploadStatus, setUploadStatus] = useState("");
  const [uploadType, setUploadType] = useState("");

  useEffect(() => {
    if (selectedEvent) {
      setFormData({
        bannerLinkPC: selectedEvent.bannerLinkPC || "",
        bannerLinkMobile: selectedEvent.bannerLinkMobile || "",
        eventMode: selectedEvent.mode || "",
        speakerImageLink: selectedEvent.speakerImg || "",
        heading: selectedEvent.heading || "",
        subHeading: selectedEvent.subHeading || "",
        date: new Date(selectedEvent.date) || new Date(),
        aboutSpeaker: selectedEvent.aboutSpeaker || "",
        speakerSocialLink: selectedEvent.speakerSocial || "",
        speakerExperienceDetails: selectedEvent.speakerExperience || "",
        speakerName: selectedEvent.speakerName || "",
        youtubeLink: selectedEvent.youtubeLink || "",
        isActive: selectedEvent.isActive || false,
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

  const handleDateChange = (e) => {
    const date = e.target.value;
    setFormData((prevState) => ({
      ...prevState,
      date: date ? new Date(date) : new Date(),
    }));
  };

  const handleRadioChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      isActive: e.target.value === "true",
    }));
  };

  const handleFileChange = async (e, type) => {
    if (!formData.heading.trim()) {
      toast.error("Please provide a heading before uploading.");
      return;
    }

    const file = e.target.files[0];
    if (!file) return;

    const fileType = file.type;
    const extension = `.${fileType.split("/").pop()}`;
    const sanitizedHeading = formData.heading
      .trim()
      .replace(/\s+/g, "_")
      .replace(/[^\w-]/g, "");

    const urlData = {
      formattedHeading: sanitizedHeading,
      formattedDate: formData.date,
      formattedType: type,
      formattedExtension: extension,
    };

    try {
      const response = await GeneratePresignedUrlforUpload(urlData);
      const preSignedUrlForUpload=response.preSignedUrlForUpload;
      console.log(urlData);
      
      const fileNameForUpload = response.fileName;
      setSelectedFile(file);
      setPreSignedUrl(preSignedUrlForUpload);
      setUploadType(type);
      const fileName = fileNameForUpload;
      setFormData((prevState) => ({
        ...prevState,
        [type]:  fileName,
      }));

      console.log(`Pre-signed URL generated: ${fileName}`);
    } catch (error) {
      console.error("Error generating pre-signed URL:", error);
      toast.error("Error generating pre-signed URL.");
    }
  };

  const handleSelectForUploadClick = (type) => {
    document.getElementById(type).click();
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      toast.error("Please select a file first.");
      return;
    }

    try {
      await axios.put(preSignedUrl, selectedFile);
      setUploadStatus("File uploaded successfully!");
      toast.success("File uploaded successfully!");
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploadStatus("Failed to upload file.");
      toast.error("Failed to upload file.");
    }
  };

  const handleSaveClick = async () => {
    const formattedData = {
      ...formData,
      date: formData.date ? new Date(formData.date).toISOString() : "",
    };

    try {
      const response = await EventsAPI.addEvent(formattedData);
      if (response.status === 200) {
        toast.success("Event added successfully!");
        setUpdateFormVisible(false);
      } else {
        toast.error("Failed to add event.");
      }
    } catch (error) {
      console.error("Error adding event:", error);
      toast.error("An error occurred while adding the event.");
    }
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
  type="datetime-local"
  id="date"
  name="date"
  placeholder="Date"
  value={typeof formData.date === 'string' ? formData.date : formData.date?.toISOString().slice(0, 16)}
  onChange={handleInputChange}
  className="date"
/>

          
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
        <label htmlFor="bannerLinkPC">PC Banner Link:</label>
        <input
          type="file"
          id="bannerLinkPC"
          name="bannerLinkPC"
          onChange={(e) => handleFileChange(e, "bannerLinkPC")}
          style={{ display: "none" }}
        />
        <button onClick={() => handleSelectForUploadClick("bannerLinkPC")}>
          Select
        </button>
        <button onClick={handleUpload}>Upload</button>
        <p>{uploadStatus}</p>
      </div>
      <br></br>
      <div className="inline-form">
        <label htmlFor="bannerLinkMobile">Mobile Banner Link:</label>
        <input
          type="file"
          id="bannerLinkMobile"
          name="bannerLinkMobile"
          onChange={(e) => handleFileChange(e, "bannerLinkMobile")}
          style={{ display: "none" }}
        />
        <button onClick={() => handleSelectForUploadClick("bannerLinkMobile")}>
          Select
        </button>
        <button onClick={handleUpload}>Upload</button>
        <p>{uploadStatus}</p>
      </div>
      <br></br>
      <div className="inline-form">
        <label htmlFor="speakerImageLink">Speaker Image:</label>
        <input
          type="file"
          id="speakerImageLink"
          name="speakerImageLink"
          onChange={(e) => handleFileChange(e, "speakerImageLink")}
          style={{ display: "none" }}
        />
        <button onClick={() => handleSelectForUploadClick("speakerImageLink")}>
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
