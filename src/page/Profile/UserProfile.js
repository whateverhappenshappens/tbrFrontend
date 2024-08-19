import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./Profile.css";
import boyProfile from "../../assets/Boy photo.png";
import { UserAPI } from "../../apis/UserAPIs";
import toast from "react-hot-toast";
function UserProfile() {
    const [year, setYear] = useState(null);
    const [isSaved, setIsSaved] = useState(true);
    const [editableField, setEditableField] = useState(null);
    const [profile, setProfile] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        collegeName: "",
        stream: "",
    });
    const [errors, setErrors] = useState({});
    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const res = await UserAPI.userProfileDetail();
                console.log(res);
                setProfile({
                    fullname: res.data.name,
                    email: res.data.email,
                    phoneNumber: res.data.mobileNumber,
                    collegeName: res.data.collegeName,
                    stream: res.data.stream,
                });
            }
            catch (error) {
                console.error("An error occurred while fetching profile data:", error);
            }
        };
        fetchProfileData();
    }, []);
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const validatePhoneNumber = (phoneNumber) => {
        const phoneRegex = /^\d{10}$/; // Assuming a 10-digit phone number
        return phoneRegex.test(phoneNumber);
    };
    const validate = () => {
        let validationErrors = {};
        if (!profile.fullname)
            validationErrors.fullname = "Fullname is required";
        if (!validateEmail(profile.email))
            validationErrors.email = "Invalid email format";
        if (!validatePhoneNumber(profile.phoneNumber))
            validationErrors.phoneNumber = "Invalid phone number";
        if (!profile.collegeName)
            validationErrors.collegeName = "College Name is required";
        if (!profile.stream)
            validationErrors.stream = "Stream is required";
        return validationErrors;
    };
    const handleSave = async () => {
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            toast.error("Please fill out all required fields correctly");
            return;
        }
        const patchOps = [
            { op: "replace", path: "/name", value: profile.fullname },
            { op: "replace", path: "/collegeName", value: profile.collegeName },
            { op: "replace", path: "/stream", value: profile.stream },
            { op: "replace", path: "/mobileNumber", value: profile.phoneNumber },
        ];
        try {
            await UserAPI.UpdateUserProfile(profile.email, patchOps);
            setIsSaved(true);
            setEditableField(null);
            toast.success("Profile updated successfully");
        }
        catch (error) {
            console.error("An error occurred while updating the profile:", error);
            toast.error("Failed to update profile");
        }
    };
    const toggleEdit = (field) => {
        setEditableField((prevField) => (prevField === field ? null : field));
        setIsSaved(false);
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
        setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    };
    return (_jsx("div", { className: "Main mt-[10rem]", children: _jsxs("div", { className: "main_box22", children: [_jsxs("aside", { className: "left1", children: [_jsx("img", { src: boyProfile, alt: "" }), _jsxs("div", { className: "buttondabba1", children: [_jsx("button", { className: "buttun22 buttun1", children: "Change Picture" }), _jsx("button", { className: "apply_button", onClick: handleSave, children: "Apply Changes" })] })] }), _jsxs("div", { className: "right", children: [_jsx("label", { children: "Fullname" }), _jsx("br", {}), _jsx("br", {}), _jsxs("div", { className: "search-container", children: [_jsx("input", { type: "text", name: "fullname", value: profile.fullname, onChange: handleInputChange, disabled: editableField !== "fullname", placeholder: "John Doe" }), _jsx("div", { className: "edit", children: _jsx("button", { type: "button", onClick: () => toggleEdit("fullname"), children: editableField === "fullname" ? "Save" : "Edit" }) }), errors.fullname && _jsx("span", { className: "error", children: errors.fullname })] }), _jsx("br", {}), _jsx("label", { children: "Email" }), _jsx("br", {}), _jsx("br", {}), _jsxs("div", { className: "search-container", children: [_jsx("input", { type: "text", name: "email", value: profile.email, onChange: handleInputChange, disabled: true, placeholder: "Johndoe@gmail.com" }), errors.email && _jsx("span", { className: "error", children: errors.email })] }), _jsx("br", {}), _jsx("label", { children: "Phone Number" }), _jsx("br", {}), _jsx("br", {}), _jsxs("div", { className: "search-container", children: [_jsx("input", { type: "text", name: "phoneNumber", value: profile.phoneNumber, onChange: handleInputChange, disabled: editableField !== "phoneNumber", placeholder: "Enter phone number" }), _jsx("div", { className: "edit", children: _jsx("button", { type: "button", onClick: () => toggleEdit("phoneNumber"), children: editableField === "phoneNumber" ? "Save" : "Edit" }) })] }), errors.phoneNumber && _jsx("span", { className: "error", children: errors.phoneNumber }), _jsx("br", {}), _jsx("label", { children: "College Name" }), _jsx("br", {}), _jsx("br", {}), _jsxs("div", { className: "search-container", children: [_jsx("input", { type: "text", name: "collegeName", value: profile.collegeName, onChange: handleInputChange, disabled: editableField !== "collegeName", placeholder: "Enter college name" }), _jsx("div", { className: "edit", children: _jsx("button", { type: "button", onClick: () => toggleEdit("collegeName"), children: editableField === "collegeName" ? "Save" : "Edit" }) }), errors.collegeName && _jsx("span", { className: "error", children: errors.collegeName })] }), _jsx("br", {}), _jsx("label", { children: "Stream" }), _jsx("br", {}), _jsx("br", {}), _jsxs("div", { className: "search-container", children: [_jsx("input", { type: "text", name: "stream", value: profile.stream, onChange: handleInputChange, disabled: editableField !== "stream", placeholder: "Enter stream like CSE, IT..." }), _jsx("div", { className: "edit", children: _jsx("button", { type: "button", onClick: () => toggleEdit("stream"), children: editableField === "stream" ? "Save" : "Edit" }) }), errors.stream && _jsx("span", { className: "error", children: errors.stream })] }), _jsx("br", {})] })] }) }));
}
export default UserProfile;
