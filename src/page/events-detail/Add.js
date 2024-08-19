import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
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
    const [preSignedUrl, setPreSignedUrl] = useState(''); // Store the pre-signed URL
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
    const generateUuid = () => {
        //same uuid for complete event
    };
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
            }
            catch (error) {
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
            console.log("the url is", preSignedUrl);
            console.log("Selected file type:", selectedFile.type);
            const res = await axios.put(preSignedUrl, selectedFile);
            setUploadStatus("File uploaded successfully!");
            console.log("File uploaded successfully!");
        }
        catch (error) {
            console.error("Error uploading file:", error);
            setUploadStatus("Failed");
        }
    };
    const handleSaveClick = () => {
        console.log("Data updated:", formData);
        setUpdateFormVisible(false);
    };
    return (_jsxs("div", { className: "main", children: [_jsxs("div", { className: "inline-form", children: [_jsx("label", { htmlFor: "eventMode", children: "Event Mode:" }), _jsx("input", { type: "text", id: "eventMode", name: "eventMode", placeholder: "Event Mode", value: formData.eventMode, onChange: handleInputChange })] }), _jsx("br", {}), _jsxs("div", { className: "inline-form", children: [_jsx("label", { htmlFor: "heading", children: "Heading:" }), _jsx("input", { type: "text", id: "heading", name: "heading", placeholder: "Heading", value: formData.heading, onChange: handleInputChange })] }), _jsx("br", {}), _jsxs("div", { className: "inline-form", children: [_jsx("label", { htmlFor: "subHeading", children: "Sub Heading:" }), _jsx("input", { type: "text", id: "subHeading", name: "subHeading", placeholder: "Sub Heading", value: formData.subHeading, onChange: handleInputChange })] }), _jsx("br", {}), _jsxs("div", { className: "inline-form", children: [_jsx("label", { htmlFor: "date", children: "Date:" }), _jsxs("div", { className: "date-input-container", children: [_jsx("input", { type: "date", id: "date", name: "date", placeholder: "Date", value: formData.date, onChange: handleInputChange, className: "date" }), _jsx("span", { className: "calendar-icon", children: _jsx(IoCalendarNumberSharp, {}) })] })] }), _jsx("br", {}), _jsxs("div", { className: "inline-form", children: [_jsx("label", { htmlFor: "speakerName", children: "Speaker's Name:" }), _jsx("input", { type: "text", id: "speakerName", name: "speakerName", placeholder: "Speaker's Name", value: formData.speakerName, onChange: handleInputChange })] }), _jsx("br", {}), _jsxs("div", { className: "inline-form", children: [_jsx("label", { htmlFor: "aboutSpeaker", children: "About Speaker:" }), _jsx("input", { type: "text", id: "aboutSpeaker", name: "aboutSpeaker", placeholder: "About Speaker", value: formData.aboutSpeaker, onChange: handleInputChange })] }), _jsx("br", {}), _jsxs("div", { className: "inline-form", children: [_jsx("label", { htmlFor: "speakerSocialLink", children: "Speaker's Social Link:" }), _jsx("input", { type: "text", id: "speakerSocialLink", name: "speakerSocialLink", placeholder: "Speaker's Social Link", value: formData.speakerSocialLink, onChange: handleInputChange })] }), _jsx("br", {}), _jsxs("div", { className: "inline-form", children: [_jsx("label", { htmlFor: "speakerExperienceDetails", children: "Speaker's Experience Details:" }), _jsx("input", { type: "text", id: "speakerExperienceDetails", name: "speakerExperienceDetails", placeholder: "Speaker's Experience Details", value: formData.speakerExperienceDetails, onChange: handleInputChange })] }), _jsx("br", {}), _jsxs("div", { className: "inline-form", children: [_jsx("label", { htmlFor: "youtubeLink", children: "YouTube Link:" }), _jsx("input", { type: "text", id: "youtubeLink", name: "youtubeLink", placeholder: "YouTube Link", value: formData.youtubeLink, onChange: handleInputChange })] }), _jsx("br", {}), _jsxs("div", { className: "inline-form", children: [_jsx("label", { children: "Is Active:" }), _jsxs("div", { children: [_jsxs("label", { children: [_jsx("input", { type: "radio", name: "isActive", value: "true", checked: formData.isActive === true, onChange: handleRadioChange }), "\u00A0 Yes"] }), "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0", _jsxs("label", { children: [_jsx("input", { type: "radio", name: "isActive", value: "false", checked: formData.isActive === false, onChange: handleRadioChange }), "\u00A0 No"] })] })] }), _jsx("br", {}), _jsxs("div", { className: "inline-form", children: [_jsx("label", { htmlFor: "pcBanner", children: "PC Banner Link:" }), _jsx("input", { type: "file", id: "pcBanner", name: "pcBanner", onChange: (e) => handleFileChange(e, "pcBanner", ""), style: { display: "none" } }), _jsx("button", { onClick: () => handleSelectForUploadClick("pcBanner"), children: "Select" }), _jsx("button", { onClick: handleUpload, children: "Upload" }), _jsx("p", { children: uploadStatus })] }), _jsx("br", {}), _jsxs("div", { className: "inline-form", children: [_jsx("label", { htmlFor: "mobileBanner", children: "Mobile Banner Link:" }), _jsx("input", { type: "file", id: "mobileBanner", name: "mobileBanner", onChange: (e) => handleFileChange(e, "mobileBanner"), style: { display: "none" } }), _jsx("button", { onClick: () => handleSelectForUploadClick("mobileBanner"), children: "Select" }), _jsx("button", { onClick: handleUpload, children: "Upload" }), _jsx("p", { children: uploadStatus })] }), _jsx("br", {}), _jsxs("div", { className: "inline-form", children: [_jsx("label", { htmlFor: "speakerImage", children: "Speaker Image:" }), _jsx("input", { type: "file", id: "speakerImage", name: "speakerImage", onChange: (e) => handleFileChange(e, "speakerImage"), style: { display: "none" } }), _jsx("button", { onClick: () => handleSelectForUploadClick("speakerImage"), children: "Select" }), _jsx("button", { onClick: handleUpload, children: "Upload" }), _jsx("p", { children: uploadStatus })] }), _jsx("br", {}), _jsxs("div", { className: "update-form-btn-container", children: [_jsx("button", { className: "update-form-cancel-btn", onClick: () => setUpdateFormVisible(false), children: "Cancel" }), _jsx("button", { className: "apply_button", onClick: handleSaveClick, children: "Save" })] })] }));
}
export default App;
