import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import "./styles.css";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { EventsAPI } from "../../apis/EventsAPI/EventsAPI";
import toast from "react-hot-toast";
import { api } from "../../apis/configs/axiosConfigs";
import * as jsonpatch from "fast-json-patch";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// S3 Configuration
import { GeneratePresignedUrlforUpdate } from "../../apis/s3_api/S3";
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
    }
    catch (error) {
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
              bannerLinkPC: eventData.bannerPCFileName,
              bannerLinkMobile: eventData.bannerMobileFileName,
              eventMode: eventData.mode,
              speakerImageLink: eventData.speakerImageFileName,
              heading: eventData.heading,
              subHeading: eventData.subHeading,
              date: formattedDate,  // Use the formatted date here
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
      
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const handleRadioChange = (e) => {
        const isActive = e.target.value === "true";
        setFormData((prevState) => ({
            ...prevState,
            isActive,
        }));
    };
    const handleFileChange = async (e, fieldName) => {
        setShowPopup(true);
        const file = e.target.files[0];
    if (!file) return;
        if (file) {
            const file = e.target.files?.[0];
            const fileType = file.type;
            const extension = `.${fileType.split("/").pop()}`;
            const sanitizedHeading = formData.heading
      .trim()
      .replace(/\s+/g, "_")
      .replace(/[^\w-]/g, "");
      const keyMapping = {
        bannerLinkPC: originalData?.bannerPCFileName,
        bannerLinkMobile: originalData?.bannerMobileFileName,
        speakerImageLink: originalData?.speakerImageFileName,
    
    };
    const oldKey = keyMapping[fieldName];
        const urlUpdateData = {
            oldKey:oldKey,
            formattedHeading: sanitizedHeading,
            formattedDate: formData.date,
            formattedType: fieldName,
            formattedExtension: extension,
          };
            try {
                const data = await GeneratePresignedUrlforUpdate(urlUpdateData);
                const preSignedUrlForUpdate=data.preSignedUrlForUpload;
                setSelectedFile(file);
                console.log(preSignedUrlForUpdate);
                setPreSignedUrl(preSignedUrlForUpdate);
                setFormData((prevState) => ({
                    ...prevState,
                    [fieldName]: data.fileName,
                }));
            }
            catch (err) {
                console.error(err);
            }
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
      
        // Ensure the date is formatted correctly before comparing and patching
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
        }
        else {
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
    


    return (
        _jsxs("div", {
          className: "main",
          children: [
            _jsxs("div", {
              className: "inline-form",
              children: [
                _jsx("label", { htmlFor: "bannerLinkPC", children: "PC Banner Link:" }),
                _jsx("input", {
                  type: "file",
                  id: "bannerLinkPC",
                  name: "bannerLinkPC",
                  onChange: (e) => handleFileChange(e, "bannerLinkPC"),
                  style: { display: "none" },
                }),
                _jsx("button", {
                  onClick: () => handleSelectForUploadClick("bannerLinkPC"),
                  children: "Select",
                }),
                _jsx("button", {
                    onClick: handleUpload,
                    children: "Upload"
                }),
              ],
            }),
            _jsx("br", {}),
            _jsxs("div", {
              className: "inline-form",
              children: [
                _jsx("label", { htmlFor: "bannerLinkMobile", children: "Mobile Banner Link:" }),
                _jsx("input", {
                  type: "file",
                  id: "bannerLinkMobile",
                  name: "bannerLinkMobile",
                  onChange: (e) => handleFileChange(e, "bannerLinkMobile"),
                  style: { display: "none" },
                }),
                _jsx("button", {
                  onClick: () => handleSelectForUploadClick("bannerLinkMobile"),
                  children: "Select",
                }),
                _jsx("button", {
                    onClick: handleUpload,
                    children: "Upload"
                }),
              ],
            }),
            _jsx("br", {}),
            _jsxs("div", {
              className: "inline-form",
              children: [
                _jsx("label", { htmlFor: "speakerImageLink", children: "Speaker Image:" }),
                _jsx("input", {
                  type: "file",
                  id: "speakerImageLink",
                  name: "speakerImageLink",
                  onChange: (e) => handleFileChange(e, "speakerImageLink"),
                  style: { display: "none" },
                }),
                _jsx("button", {
                  onClick: () => handleSelectForUploadClick("speakerImageLink"),
                  children: "Select",
                }),
                _jsx("button", {
                    onClick: handleUpload,
                    children: "Upload"
                }),
              ],
            }),
            _jsx("br", {}),
            // ... (rest of your code for other fields)
            _jsxs("div", { className: "inline-form", children: [_jsx("label", { htmlFor: "enrollLink", children: "Enroll Link:" }), _jsx("input", { type: "text", id: "enrollLink", name: "enrollLink", placeholder: "Enroll Link", value: formData.enrollLink, onChange: handleInputChange }), _jsx("input", { type: "file", id: "enrollLinkFile", style: { display: "none" }, onChange: (e) => handleFileChange(e, "enrollLink") }), _jsx("button", { onClick: () => handleUploadClick("enrollLink"), className: "upload-btn", children: "Upload" })] }), _jsx("br", {}), _jsxs("div", { className: "inline-form", children: [_jsx("label", { htmlFor: "heading", children: "Heading:" }), _jsx("input", { type: "text", id: "heading", name: "heading", placeholder: "Heading", value: formData.heading, onChange: handleInputChange })] }), _jsx("br", {}), _jsxs("div", { className: "inline-form", children: [_jsx("label", { htmlFor: "subHeading", children: "Sub-Heading:" }), _jsx("input", { type: "text", id: "subHeading", name: "subHeading", placeholder: "Sub-Heading", value: formData.subHeading, onChange: handleInputChange })] }),_jsxs("div", {
                className: "inline-form",
                children: [
                  _jsx("label", {
                    htmlFor: "date",
                    children: "Date:"
                  }),
                  _jsxs("div", {
                    className: "date-input-container",
                    children: [
                      _jsx("input", {
                        type: "datetime-local",
                        id: "date",
                        name: "date",
                        placeholder: "Date and time",
                        value: formData.date,
                        onChange: handleInputChange,
                        className: "date"
                      }),
                      
                    ]
                  })
                ]
              }), _jsx("br", {}), _jsxs("div", { className: "inline-form", children: [_jsx("label", { htmlFor: "aboutSpeaker", children: "About Speaker:" }), _jsx("input", { type: "text", id: "aboutSpeaker", name: "aboutSpeaker", placeholder: "About Speaker", value: formData.aboutSpeaker, onChange: handleInputChange })] }), _jsx("br", {}), _jsxs("div", { className: "inline-form", children: [_jsx("label", { htmlFor: "speakerSocialLink", children: "Speaker Social Link:" }), _jsx("input", { type: "text", id: "speakerSocialLink", name: "speakerSocialLink", placeholder: "Speaker Social Link", value: formData.speakerSocialLink, onChange: handleInputChange })] }), _jsx("br", {}), _jsxs("div", { className: "inline-form", children: [_jsx("label", { htmlFor: "speakerExperienceDetails", children: "Speaker Experience Details:" }), _jsx("input", { type: "text", id: "speakerExperienceDetails", name: "speakerExperienceDetails", placeholder: "Speaker Experience Details", value: formData.speakerExperienceDetails, onChange: handleInputChange })] }), _jsx("br", {}), _jsxs("div", { className: "inline-form", children: [_jsx("label", { htmlFor: "speakerName", children: "Speaker Name:" }), _jsx("input", { type: "text", id: "speakerName", name: "speakerName", placeholder: "Speaker Name", value: formData.speakerName, onChange: handleInputChange })] }), _jsx("br", {}), _jsxs("div", { className: "inline-form", children: [_jsx("label", { htmlFor: "youtubeLink", children: "YouTube Link:" }), _jsx("input", { type: "text", id: "youtubeLink", name: "youtubeLink", placeholder: "YouTube Link", value: formData.youtubeLink, onChange: handleInputChange })] }), _jsx("br", {}), _jsxs("div", { className: "inline-form", children: [_jsx("label", { htmlFor: "isActive", children: "Is Active:" }), _jsxs("label", { children: [_jsx("input", { type: "radio", name: "isActive", value: "true", checked: formData.isActive === true, onChange: handleRadioChange }), "Active"] }), _jsxs("label", { children: [_jsx("input", { type: "radio", name: "isActive", value: "false", checked: formData.isActive === false, onChange: handleRadioChange }), "Inactive"] })] }), _jsx("br", {}),
            _jsx("button", {
              className: "btn-save bg-blue-400 border-none",
              onClick: handleSaveClick,
              children: "Save",
            }),
            _jsx("button", {
              className: "btn-save bg-red-400 mt-4 border-none",
              onClick: () => setUpdateFormVisible(false),
              children: "Cancel",
            }),
          ],
        })
      );
      
}
export default UpdateForm;
