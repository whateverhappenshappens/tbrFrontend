import React, { useState, useEffect } from "react";
import "./Profile1.css";
import { UserAPI } from "../../apis/UserAPIs";
import toast from "react-hot-toast";
import * as jsonpatch from "fast-json-patch";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateUserDetails(cartDetailsData: any, cartValue: any) {
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
      } catch (error) {
        console.error("An error occurred while fetching profile data:", error);
      }
    };
    fetchProfileData();
  }, []);

  // Validate input fields
  const validateProfile = (updatedProfile) => {
    const { fullname, email, phoneNumber, collegeName, stream } =
      updatedProfile;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    const newErrors = {};

    if (!fullname) newErrors.fullName = "Fullname is required.";
    if (!email || !emailRegex.test(email))
      newErrors.email = "Invalid email address.";
    if (!phoneNumber || !phoneRegex.test(phoneNumber))
      newErrors.phoneNumber = "Invalid phone number.";
    if (!collegeName) newErrors.collegeName = "College name is required.";
    if (!stream) newErrors.stream = "Stream is required.";

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
    } catch (error) {
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
      selectedCourses: cartDetailsData.cartDetailsData.map(
        ({ description, ...rest }) => rest
      ),
    };

    console.log("Request data: ", requestData);
    console.log(cartDetailsData.cartValue * 100);

    const access_token = localStorage.getItem("access-token");

    try {
      const response = await axios.post(
        `http://localhost:8080/v1.5/payment/${cartDetailsData.cartValue * 100}`,
        requestData,
        {
          headers: {
            Authorization: "Bearer " + access_token,
          },
        }
      );

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
        handler: async function (response: any) {
          console.log("success -->", response);
          try {
            const paymentSuccessResponse = await axios.post(
              "http://localhost:8080/v1.5/payment/success",
              {
                orderId: response.razorpay_order_id,
                paymentId: response.razorpay_payment_id,
                mobileNumber: profile.phoneNumber,
              },
              {
                headers: {
                  Authorization: "Bearer " + access_token,
                },
              }
            );
            console.log("payment success!", paymentSuccessResponse);
          } catch (error) {
            console.error(
              "There was a problem with the payment success operation:",
              error
            );
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

      const paymentWindow = new (window as any).Razorpay(options);
      paymentWindow.on("payment.failed", async function (response: any) {
        console.log("failure --->", response);
        try {
          await axios.post(
            "http://localhost:8080/v1.5/payment/fail",
            {
              orderId: response.error.metadata.order_id,
              paymentId: response.error.metadata.payment_id,
              description: response.error.description,
              reason: response.error.reason,
              source: response.error.source,
              step: response.error.step,
            },
            {
              headers: {
                Authorization: "Bearer " + access_token,
              },
            }
          );
        } catch (error) {
          console.error(
            "There was a problem with the payment failure operation:",
            error
          );
        }
      });

      paymentWindow.open();
    } catch (error) {
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

  return (
    <div className="main_box21 mt-[7rem]">
      {/* <aside className="lefty">
        <div className="buttondabba">
          <button
            className="buttun buttun2"
            onClick={handleSave}
            disabled={!isValid}
          >
            Apply Changes
          </button>
        </div>
      </aside> */}
      <div className="righty">
        <label>Fullname</label>
        <br />
        <br />
        <div className="search-container">
          <input
            type="text"
            name="fullName"
            placeholder="John Doe"
            value={profile.fullName}
            onChange={handleChange}
            readOnly={editableField !== "fullName"}
          />
          <div className="edit">
            <button type="button" onClick={() => toggleEdit("fullName")}>
              {editableField === "fullName" ? "Save" : "Edit"}
            </button>
          </div>
        </div>
        {errors.fullName && <p className="error">{errors.fullName}</p>}
        <br />

        <label>Email</label>
        <br />
        <br />
        <div className="search-container">
          <input
            type="text"
            name="email"
            placeholder="Johndoe@gmail.com"
            value={profile.email}
            onChange={handleChange}
            readOnly={editableField !== "email"}
          />
        </div>
        {errors.email && <p className="error">{errors.email}</p>}
        <br />

        <label>Phone Number</label>
        <br />
        <br />
        <div className="search-container">
          <input
            type="text"
            name="phoneNumber"
            placeholder="Enter phone number"
            value={profile.phoneNumber}
            onChange={handleChange}
          />
          <div className="edit">
            <button type="button" onClick={() => toggleEdit("phoneNumber")}>
              {editableField === "fullName" ? "Save" : "Edit"}
            </button>
          </div>
        </div>
        {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
        <br />

        <label>College Name</label>
        <br />
        <br />
        <div className="search-container">
          <input
            type="text"
            name="collegeName"
            placeholder="Enter college name"
            value={profile.collegeName}
            onChange={handleChange}
          />
        </div>
        {errors.collegeName && <p className="error">{errors.collegeName}</p>}
        <br />

        <label>Stream</label>
        <br />
        <br />
        <div className="search-container">
          <input
            type="text"
            name="stream"
            placeholder="Enter your Stream"
            value={profile.stream}
            onChange={handleChange}
          />
        </div>
        <br />
        <button
          className="buttun buttun2"
          onClick={handleSave}
          disabled={!isValid}
        >
          Apply Changes
        </button>
        {errors.stream && <p className="error">{errors.stream}</p>}
        <br />
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Unsaved Changes</h2>
            <p>Please save your changes before completing the payment.</p>
            <button className="buttun4" onClick={handleSave}>
              Save Changes
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button className="buttun4" onClick={() => setShowModal(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
      <div className="summary-container">
        <h2>Summary</h2>
        <div className="sum">
          <p className="items">Items</p>
          <p className="price">Price</p>
        </div>
        {cartDetailsData.cartDetailsData.map((course: any, index: any) => (
          <div className="course-summary" key={index}>
            <p className="items">{course.name}</p>
            <p className="price1">Rs {course.discountedPrice}/-</p>
          </div>
        ))}
        <div className="total-summary">
          <p className="order">Order total:</p>
          <p className="price1">Rs {cartDetailsData.cartValue}/-</p>
        </div>
        <div className="w-[100%] px-[15rem] mt-[4rem]">
          <button className="buttun3 " onClick={handlePayment}>
            Complete Payment
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdateUserDetails;
