import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import "./Profile1.css";
import { UserAPI } from "../../apis/UserAPIs";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function Profile() {
    const [email, setEmail] = useState("");
    const [profile, setProfile] = useState({
        email: "",
        phoneNumber: "",
        collegeName: "",
        stream: "",
    });
    const [isValid, setIsValid] = useState(false);
    const [errors, setErrors] = useState({});
    const [editableField, setEditableField] = useState(null);
    const [isSaved, setIsSaved] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [selectedCourses, setSelectedCourses] = useState([
        { course: "Webmonk - A Complete Web Development Program", price: 1000 },
        { course: "Webmonk - A Complete Web Development Program", price: 2000 },
        { course: "Webmonk - A Complete Web Development Program", price: 1500 },
    ]);
    useEffect(() => {
        const profileEmail = localStorage.getItem("user-email");
        if (profileEmail) {
            setEmail(profileEmail);
        }
    }, []);
    useEffect(() => {
        const fetchProfileData = async () => {
            if (email) {
                try {
                    const res = await UserAPI.userProfileDetail(email);
                    setProfile({
                        fullname: res.data.fullname,
                        email: res.data.email,
                        phoneNumber: res.data.mobileNumber,
                        collegeName: res.data.collegeName,
                        stream: res.data.stream,
                    });
                }
                catch (error) {
                    console.error("An error occurred while fetching profile data:", error);
                }
            }
        };
        fetchProfileData();
    }, [email]);
    useEffect(() => {
        const savedProfile = JSON.parse(localStorage.getItem("profile"));
        if (savedProfile) {
            setProfile(savedProfile);
            validateProfile(savedProfile);
        }
    }, []);
    const validateProfile = (updatedProfile) => {
        const { fullname, email, phoneNumber, collegeName, stream } = updatedProfile;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[6-9]\d{9}$/;
        const newErrors = {};
        if (!email || !emailRegex.test(email))
            newErrors.email = "Invalid email address.";
        if (!phoneNumber || !phoneRegex.test(phoneNumber))
            newErrors.phoneNumber = "Invalid phone number.";
        if (!collegeName)
            newErrors.collegeName = "College name is required.";
        if (!stream)
            newErrors.stream = "Stream is required.";
        setErrors(newErrors);
        setIsValid(Object.keys(newErrors).length === 0);
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => {
            const updatedProfile = { ...prevProfile, [name]: value };
            validateProfile(updatedProfile);
            setIsSaved(false);
            return updatedProfile;
        });
    };
    const handleSave = () => {
        localStorage.setItem("profile", JSON.stringify(profile));
        setIsSaved(true);
        setShowModal(false);
        toast.success("Changes saved successfully!");
    };
    const handleCompletePayment = () => {
        if (!isSaved) {
            setShowModal(true);
        }
        else {
            toast.info("Proceeding with the payment process...");
            // Proceed with the payment process
        }
    };
    const toggleEdit = (field) => {
        setEditableField((prevField) => (prevField === field ? null : field));
    };
    const handleCourseSelect = (course, price) => {
        setSelectedCourses((prevCourses) => [
            ...prevCourses,
            { course, price },
        ]);
    };
    const totalAmount = selectedCourses.reduce((sum, item) => sum + item.price, 0);
    return (_jsxs("div", { className: "main_box21 mt-[10rem]", children: [_jsxs("div", { className: "flex-container", children: [_jsxs("div", { className: "column", children: [_jsx("label", { children: "Fullname" }), _jsxs("div", { className: "search-container", children: [_jsx("input", { type: "text", name: "fullname", placeholder: "John Doe", value: profile.fullname, onChange: handleChange, readOnly: editableField !== "fullname" }), _jsx("button", { type: "button", onClick: () => toggleEdit("fullname"), children: editableField === "fullname" ? "Save" : "Edit" })] }), _jsx("label", { children: "College Name" }), _jsx("div", { className: "search-container", children: _jsx("input", { type: "text", name: "collegeName", placeholder: "Enter college name", value: profile.collegeName, onChange: handleChange }) }), errors.collegeName && _jsx("p", { className: "error", children: errors.collegeName }), _jsx("label", { children: "Stream" }), _jsx("div", { className: "search-container", children: _jsx("input", { type: "text", name: "stream", placeholder: "Enter your Stream", value: profile.stream, onChange: handleChange }) }), errors.stream && _jsx("p", { className: "error", children: errors.stream }), _jsx("label", { children: "Email" }), _jsxs("div", { className: "search-container", children: [_jsx("input", { type: "text", name: "email", placeholder: "Johndoe@gmail.com", value: profile.email, onChange: handleChange, readOnly: editableField !== "email" }), _jsx("button", { type: "button", onClick: () => toggleEdit("email"), children: editableField === "email" ? "Save" : "Edit" })] }), errors.email && _jsx("p", { className: "error", children: errors.email }), _jsx("label", { children: "Phone Number" }), _jsx("div", { className: "search-container", children: _jsx("input", { type: "text", name: "phoneNumber", placeholder: "Enter phone number", value: profile.phoneNumber, onChange: handleChange }) }), errors.phoneNumber && _jsx("p", { className: "error", children: errors.phoneNumber }), _jsx("button", { className: "payment", disabled: !isValid, onClick: handleCompletePayment, children: "Complete Payment" })] }), _jsxs("div", { className: "summary-container", children: [_jsx("h3", { children: "Fill the information then proceed to pay" }), _jsx("h2", { children: "Summary" }), _jsxs("div", { className: "sum", children: [_jsx("p", { className: "items", children: "Items" }), _jsx("p", { className: "price", children: "Price" })] }), selectedCourses.map((course, index) => (_jsxs("div", { className: "course-summary", children: [_jsx("p", { className: "items", children: course.course }), _jsxs("p", { className: "price1", children: ["Rs ", course.price, "/-"] })] }, index))), _jsxs("div", { className: "total-summary", children: [_jsx("p", { className: "order", children: "Order total:" }), _jsxs("p", { className: "price1", children: ["Rs ", totalAmount, "/-"] })] })] })] }), showModal && (_jsx("div", { className: "modal", children: _jsxs("div", { className: "modal-content", children: [_jsx("h2", { children: "Unsaved Changes" }), _jsx("p", { children: "Please save your changes before completing the payment." }), _jsx("button", { className: "buttun4", onClick: handleSave, children: "Save Changes" }), _jsx("button", { className: "buttun4", onClick: () => setShowModal(false), children: "Cancel" })] }) })), _jsx(ToastContainer, {})] }));
}
export default Profile;
