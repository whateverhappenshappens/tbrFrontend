import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import "./Profile1.css";
import { UserAPI } from "../../apis/UserAPIs";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { api } from "../../apis/configs/axiosConfigs";
function UpdateUserDetails(cartDetailsData, cartValue) {
    console.log("UpdateData:", cartDetailsData);
    console.log("DiscountPrice: ", cartDetailsData.cartValue);
    const [email, setEmail] = useState("");
    const [profile, setProfile] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        collegeName: "",
        stream: "",
    });
    const [isValid, setIsValid] = useState(false);
    const [errors, setErrors] = useState({});
    const [editableField, setEditableField] = useState(null);
    const [isSaved, setIsSaved] = useState(true); // Track if the profile is saved
    const [showModal, setShowModal] = useState(false); // State for controlling the modal
    const navigate = useNavigate();
    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const res = await UserAPI.private_test();
                console.log(res);
                setProfile({
                    fullName: res.data.name,
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
    // Validate input fields
    const validateProfile = (updatedProfile) => {
        const { email, phoneNumber, collegeName, stream } = updatedProfile;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d{10}$/;
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
    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => {
            const updatedProfile = { ...prevProfile, [name]: value };
            validateProfile(updatedProfile);
            setIsSaved(false); // Mark profile as not saved when changes are made
            return updatedProfile;
        });
    };
    // Save data to localStorage
    const handleSave = async () => {
        const patchOps = [
            { op: "replace", path: "/name", value: profile.fullName },
            { op: "replace", path: "/collegeName", value: profile.collegeName },
            { op: "replace", path: "/stream", value: profile.stream },
            { op: "replace", path: "/mobileNumber", value: profile.phoneNumber },
        ];
        try {
            const res = await UserAPI.UpdateUserProfile(profile.email, patchOps);
            console.log(res.data);
            // toast.success("Profile updated successfully!");
            setIsSaved(true); // Mark profile as saved
        }
        catch (error) {
            console.error("Failed to update profile:", error);
            toast.error("Failed to update profile!");
        }
    };
    async function handlePayment() {
        const requestData = {
            utr: "utr-number",
            mobileNumber: profile.phoneNumber,
            userId: profile.email,
            paymentId: "payment-id",
            modeOfPayment: "razorpay",
            selectedCourses: cartDetailsData.cartDetailsData.map(({ description, ...rest }) => rest),
        };
        console.log("Request data: ", requestData);
        console.log(cartDetailsData.cartValue * 100);
        const access_token = localStorage.getItem("access-token");
        try {
            const response = await api.post(`/v1.5/payment/${cartDetailsData.cartValue * 100}`, requestData, {
                headers: {
                    Authorization: "Bearer " + access_token,
                },
            });
            console.log("order created!", response, cartDetailsData.cartValue * 100);
            const data = response.data;
            const options = {
                key: "rzp_test_LFEMJf6qnRSih6",
                amount: data.amount,
                currency: "INR",
                name: "Techbairn",
                description: "Test Transaction",
                order_id: data.orderId,
                callback_url: "google.com",
                show_coupons: true,
                handler: async function (response) {
                    console.log("success -->", response);
                    try {
                        const paymentSuccessResponse = await api.post("/v1.5/payment/success", {
                            orderId: response.razorpay_order_id,
                            paymentId: response.razorpay_payment_id,
                            mobileNumber: profile.phoneNumber,
                        }, {
                            headers: {
                                Authorization: "Bearer " + access_token,
                            },
                        });
                        navigate("/payment-success");
                        console.log("payment success!", paymentSuccessResponse);
                    }
                    catch (error) {
                        navigate("/unsuccess");
                        console.error("There was a problem with the payment success operation:", error);
                        navigate("/login");
                    }
                },
                prefill: {
                    name: profile.fullName,
                    email: profile.email,
                    contact: profile.phoneNumber,
                },
                notes: {
                    address: "Razorpay Corporate Office",
                },
                theme: {
                    color: "#3399cc",
                },
            };
            const paymentWindow = new window.Razorpay(options);
            paymentWindow.on("payment.failed", async function (response) {
                console.log("failure --->", response);
                try {
                    await api.post("/v1.5/payment/fail", {
                        orderId: response.error.metadata.order_id,
                        paymentId: response.error.metadata.payment_id,
                        description: response.error.description,
                        reason: response.error.reason,
                        source: response.error.source,
                        step: response.error.step,
                    }, {
                        headers: {
                            Authorization: "Bearer " + access_token,
                        },
                    });
                }
                catch (error) {
                    console.error("There was a problem with the payment failure operation:", error);
                }
            });
            paymentWindow.open();
        }
        catch (error) {
            console.error("There was a problem with the payment operation:", error);
        }
    }
    // function handlePayment() {
    //   const requestData = {
    //     utr: "utr-number",
    //     mobileNumber: profile.phoneNumber,
    //     userId: profile.email,
    //     paymentId: "payment-id",
    //     modeOfPayment: "razorpay",
    //     selectedCourses: cartDetailsData.cartDetailsData.map(
    //       ({ description, ...rest }) => rest
    //     ),
    //   };
    //   console.log("Request data: ", requestData);
    //   console.log(cartDetailsData.cartValue * 100);
    //   const access_token = localStorage.getItem("access-token");
    //   try {
    //     const res = await a.request({
    //       url: "/v1.5/requests/test/private/zoro",
    //       method: "GET",
    //       headers: {
    //         Authorization: "Bearer " + access_token,
    //       },
    //     });
    //   axios
    //     .post(
    //       `http://localhost:8080/v1.5/payment/${cartDetailsData.cartValue * 100}`,
    //       requestData
    //     )
    //     .then((response) => {
    //       console.log(
    //         "order created!",
    //         response,
    //         cartDetailsData.cartValue * 100
    //       );
    //       const data = response.data;
    //       const options = {
    //         key: "rzp_test_LFEMJf6qnRSih6",
    //         amount: data.amount,
    //         currency: "INR",
    //         name: "Techbairn",
    //         description: "Test Transaction",
    //         order_id: data.orderId,
    //         callback_url: "google.com",
    //         show_coupons: true,
    //         handler: function (response: any) {
    //           console.log("success -->", response);
    //           axios
    //             .post("http://localhost:8080/payment/success", {
    //               orderId: response.razorpay_order_id,
    //               paymentId: response.razorpay_payment_id,
    //               mobileNumber: profile.phoneNumber,
    //             })
    //             .then((response) => {
    //               console.log("payment success!", response);
    //             });
    //         },
    //         prefill: {
    //           name: profile.fullName,
    //           email: profile.email,
    //           contact: profile.phoneNumber,
    //         },
    //         notes: {
    //           address: "Razorpay Corporate Office",
    //         },
    //         theme: {
    //           color: "#3399cc",
    //         },
    //       };
    //       const paymentWindow = new (window as any).Razorpay(options);
    //       paymentWindow.on("payment.failed", function (response: any) {
    //         console.log("failure --->", response);
    //         axios.post("http://localhost:8080/payment/fail", {
    //           orderId: response.error.metadata.order_id,
    //           paymentId: response.error.metadata.payment_id,
    //           description: response.error.description,
    //           reason: response.error.reason,
    //           source: response.error.source,
    //           step: response.error.step,
    //         });
    //       });
    //       paymentWindow.open();
    //     })
    //     .catch((error) => {
    //       console.error("There was a problem with the payment operation:", error);
    //     });
    // }
    const toggleEdit = (field) => {
        setEditableField((prevField) => (prevField === field ? null : field));
    };
    return (_jsxs("div", { className: "main_box21 mt-[10rem]", children: [_jsxs("div", { className: "righty", children: [_jsx("label", { children: "Fullname" }), _jsx("br", {}), _jsx("br", {}), _jsxs("div", { className: "search-container", children: [_jsx("input", { type: "text", name: "fullName", placeholder: "John Doe", value: profile.fullName, onChange: handleChange, readOnly: editableField !== "fullName" }), _jsx("div", { className: "edit", children: _jsx("button", { type: "button", onClick: () => toggleEdit("fullName"), children: editableField === "fullName" ? "Save" : "Edit" }) })] }), _jsx("br", {}), _jsx("label", { children: "Email" }), _jsx("br", {}), _jsx("br", {}), _jsx("div", { className: "search-container", children: _jsx("input", { type: "text", name: "email", placeholder: "Johndoe@gmail.com", value: profile.email, onChange: handleChange, readOnly: editableField !== "email" }) }), errors.email && _jsx("p", { className: "error", children: errors.email }), _jsx("br", {}), _jsx("label", { children: "Phone Number" }), _jsx("br", {}), _jsx("br", {}), _jsxs("div", { className: "search-container", children: [_jsx("input", { type: "text", name: "phoneNumber", placeholder: "Enter phone number", value: profile.phoneNumber, onChange: handleChange }), _jsx("div", { className: "edit", children: _jsx("button", { type: "button", onClick: () => toggleEdit("phoneNumber"), children: editableField === "fullName" ? "Save" : "Edit" }) })] }), errors.phoneNumber && _jsx("p", { className: "error", children: errors.phoneNumber }), _jsx("br", {}), _jsx("label", { children: "College Name" }), _jsx("br", {}), _jsx("br", {}), _jsx("div", { className: "search-container", children: _jsx("input", { type: "text", name: "collegeName", placeholder: "Enter college name", value: profile.collegeName, onChange: handleChange }) }), errors.collegeName && _jsx("p", { className: "error", children: errors.collegeName }), _jsx("br", {}), _jsx("label", { children: "Stream" }), _jsx("br", {}), _jsx("br", {}), _jsx("div", { className: "search-container", children: _jsx("input", { type: "text", name: "stream", placeholder: "Enter your Stream", value: profile.stream, onChange: handleChange }) }), _jsx("br", {}), _jsx("button", { className: "apply_button", onClick: handleSave, disabled: !isValid, children: "Apply Changes" }), errors.stream && _jsx("p", { className: "error", children: errors.stream }), _jsx("br", {})] }), showModal && (_jsx("div", { className: "modal", children: _jsxs("div", { className: "modal-content", children: [_jsx("h2", { children: "Unsaved Changes" }), _jsx("p", { children: "Please save your changes before completing the payment." }), _jsx("button", { className: "buttun4", onClick: handleSave, children: "Save Changes" }), "\u00A0\u00A0\u00A0\u00A0", _jsx("button", { className: "buttun4", onClick: () => setShowModal(false), children: "Cancel" })] }) })), _jsxs("div", { className: "summary-container", children: [_jsx("h3", { children: "Fill the information before proceed to pay" }), _jsx("h2", { children: "Summary" }), _jsxs("div", { className: "sum", children: [_jsx("p", { className: "items", children: "Items" }), _jsx("p", { className: "price", children: "Price" })] }), cartDetailsData.cartDetailsData.map((course, index) => (_jsxs("div", { className: "course-summary", children: [_jsx("p", { className: "items", children: course.name }), _jsxs("p", { className: "price1", children: ["Rs ", course.discountedPrice, "/-"] })] }, index))), _jsxs("div", { className: "total-summary", children: [_jsx("p", { className: "order", children: "Order total:" }), _jsxs("p", { className: "price1", children: ["Rs ", cartDetailsData.cartValue, "/-"] })] }), _jsx("div", { className: "w-[100%]  mt-[4rem]", children: _jsx("button", { className: "buttun3", disabled: !isValid, onClick: handlePayment, children: "Complete Payment" }) })] })] }));
}
export default UpdateUserDetails;
