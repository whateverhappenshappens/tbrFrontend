import React, { useState, useEffect } from "react";
import "./styles.css";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { EventsAPI } from "../../apis/EventsAPI/EventsAPI";
import toast from "react-hot-toast";
import { api } from "../../apis/configs/axiosConfigs";
import * as jsonpatch from "fast-json-patch";
import { useNavigate } from "react-router-dom";
import { GeneratePresignedUrlforUpdate } from "../../apis/s3_api/S3";
import axios from "axios";

// Function to patch data
const patchData = async (url, patchOps, accessToken) => {
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

function UpdateForm({ selectedEvent, setUpdateFormVisible }) {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [data, setData] = useState(null);
  const [preSignedUrl, setPreSignedUrl] = useState("");
  const [accessToken, setAccessToken] = useState(localStorage.getItem("access-token"));
  const [formData, setFormData] = useState({
    bannerLinkPC: "",
    bannerLinkMobile: "",
    eventMode: "",
    speakerImageLink: "",
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
    description: "",
  });
  const [originalData, setOriginalData] = useState(null);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const res = await EventsAPI.EventById(selectedEvent.id);
        const eventData = res.data;
        setData(eventData);
        setOriginalData(eventData);

        // Convert the event date to ISO string with "Z" at the end
        const formattedDate = eventData.date ? new Date(eventData.date).toISOString() : "";

        setFormData({
          bannerLinkPC: eventData.bannerPCFileName || "",
          bannerLinkMobile: eventData.bannerMobileFileName || "",
          eventMode: eventData.mode || "",
          speakerImageLink: eventData.speakerImageLinkFileName || "",
          heading: eventData.heading || "",
          subHeading: eventData.subHeading || "",
          date: formattedDate,
          aboutSpeaker: eventData.aboutSpeaker || "",
          speakerSocialLink: eventData.speakerSocial || "",
          speakerExperienceDetails: eventData.speakerExperience || "",
          speakerName: eventData.speakerName || "",
          youtubeLink: eventData.youtubeLink || "",
          isActive: eventData.isActive || false,
          enrollLink: eventData.enrollLink || "",
          description: eventData.description || "",
        });
      } catch (e) {
        console.error(e);
      }
    };

    if (selectedEvent) {
      fetchEventData();
    }
  }, [selectedEvent]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRadioChange = (e) => {
    const isActive = e.target.value === "true"; // Convert to boolean
    setFormData((prevState) => ({
      ...prevState,
      isActive,
    }));
  };

  const handleFileChange = async (e, fieldName) => {
    setShowPopup(true);
    const file = e.target.files[0];
    if (!file) return;
    const fileType = file.type;
    const extension = `.${fileType.split("/").pop()}`;
    const sanitizedHeading = formData.heading.trim().replace(/\s+/g, "_").replace(/[^\w-]/g, "");
    const keyMapping = {
      bannerLinkPC: originalData?.bannerPCFileName,
      bannerLinkMobile: originalData?.bannerMobileFileName,
      speakerImageLink: originalData?.speakerImageLinkFileName,
    };
    const oldKey = keyMapping[fieldName];
    const urlUpdateData = {
      oldKey,
      formattedHeading: sanitizedHeading,
      formattedDate: formData.date,
      formattedType: fieldName,
      formattedExtension: extension,
    };

    try {
      const data = await GeneratePresignedUrlforUpdate(urlUpdateData);
      const preSignedUrlForUpdate = data.preSignedUrlForUpload;
      setSelectedFile(file);
      setPreSignedUrl(preSignedUrlForUpdate);
      setFormData((prevState) => ({
        ...prevState,
        [fieldName]: data.fileName,
      }));
    } catch (err) {
      console.error(err);
    }
  };

  const handleUploadClick = (fieldName) => {
    const fileInput = document.getElementById(`${fieldName}File`);
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

    const preprocessedFormData = {
      ...originalData,
      ...formData,
      date: formData.date ? new Date(formData.date).toISOString() : "", // Reformatting date before patching
    };

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

  const handleOptionClick = (option) => {
    setShowPopup(false);
    if (option === "yes") {
      handleSaveClick();
    } else {
      console.log("Update cancelled");
    }
  };

  const handleSelectForUploadClick = (fieldName) => {
    document.getElementById(fieldName).click();
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      toast.error("Please select a file first.");
      return;
    }

    if (!preSignedUrl) {
      console.error("Pre-signed URL is missing.");
      toast.error("Pre-signed URL is missing. Cannot upload file.");
      return;
    }

    try {
      await axios.put(preSignedUrl, selectedFile, {
        headers: {
          "Content-Type": selectedFile.type,
        },
      });
      toast.success("File uploaded successfully!");
    } catch (error) {
      console.error("Error uploading file:", error);
      toast.error("Failed to upload file.");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  return (
    <div className="main">
      {/* File upload inputs */}
      <div className="inline-form">
        <label htmlFor="bannerLinkPC">PC Banner Link:</label>
        <input
          type="file"
          id="bannerLinkPC"
          name="bannerLinkPC"
          onChange={(e) => handleFileChange(e, "bannerLinkPC")}
          style={{ display: "none" }}
        />
        <button onClick={() => handleSelectForUploadClick("bannerLinkPC")}>Select</button>
        <button onClick={handleUpload}>Upload</button>
      </div>
      <br />
      <div className="inline-form">
        <label htmlFor="bannerLinkMobile">Mobile Banner Link:</label>
        <input
          type="file"
          id="bannerLinkMobile"
          name="bannerLinkMobile"
          onChange={(e) => handleFileChange(e, "bannerLinkMobile")}
          style={{ display: "none" }}
        />
        <button onClick={() => handleSelectForUploadClick("bannerLinkMobile")}>Select</button>
        <button onClick={handleUpload}>Upload</button>
      </div>
      <br />
      <div className="inline-form">
        <label htmlFor="speakerImageLink">Speaker Image:</label>
        <input
          type="file"
          id="speakerImageLink"
          name="speakerImageLink"
          onChange={(e) => handleFileChange(e, "speakerImageLink")}
          style={{ display: "none" }}
        />
        <button onClick={() => handleSelectForUploadClick("speakerImageLink")}>Select</button>
        <button onClick={handleUpload}>Upload</button>
      </div>
      <br />
      <div className="inline-form">
        <label htmlFor="enrollLink">Enroll Link:</label>
        <input
          type="text"
          id="enrollLink"
          name="enrollLink"
          placeholder="Enroll Link"
          value={formData.enrollLink || ""}
          onChange={handleInputChange}
        />
        <input
          type="file"
          id="enrollLinkFile"
          style={{ display: "none" }}
          onChange={(e) => handleFileChange(e, "enrollLink")}
        />
      </div>
      <br />
      <div className="inline-form">
        <label htmlFor="heading">Heading:</label>
        <input
          type="text"
          id="heading"
          name="heading"
          placeholder="Heading"
          value={formData.heading || ""}
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
          value={formData.subHeading || ""}
          onChange={handleInputChange}
        />
      </div>
      <br />
      <div className="inline-form">
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Description"
          value={formData.description || ""}
          onChange={handleInputChange}
        />
      </div>
      <br />
      <div className="inline-form">
        <label htmlFor="date">Date:</label>
        <div className="date-input-container">
          <input
            type="datetime-local"
            id="date"
            name="date"
            placeholder="Date"
            value={formData.date || ""}
            onChange={handleInputChange}
            className="date"
          />
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
          value={formData.aboutSpeaker || ""}
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
          value={formData.speakerSocialLink || ""}
          onChange={handleInputChange}
        />
      </div>
      <br />
      <div className="inline-form">
        <label htmlFor="speakerExperienceDetails">Speaker Experience Details:</label>
        <input
          type="text"
          id="speakerExperienceDetails"
          name="speakerExperienceDetails"
          placeholder="Speaker Experience Details"
          value={formData.speakerExperienceDetails || ""}
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
          value={formData.speakerName || ""}
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
          value={formData.youtubeLink || ""}
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