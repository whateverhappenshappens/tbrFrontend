import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { SalesAPIs } from "../../apis/SalesAPI/SalesAPIs";
import { saveAs } from "file-saver";
import Papa from "papaparse";
import { CartAPI } from "../../apis/CartAPI/CartAPIs";
const SalesOperations = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const [selectedSubOption, setSelectedSubOption] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [results, setResults] = useState([]); // State to store fetched data
    const handleMainChange = (event) => {
        setSelectedOption(event.target.value);
        setSelectedSubOption(""); // Reset sub-option when main option changes
        setEmail(""); // Reset email input
        setMobile(""); // Reset mobile input
        setResults([]); // Clear results
    };
    const handleSubChange = (event) => {
        setSelectedSubOption(event.target.value);
        setEmail(""); // Reset email input
        setMobile(""); // Reset mobile input
        setResults([]); // Clear results
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handleMobileChange = (event) => {
        setMobile(event.target.value);
    };
    const handleDisplay = async () => {
        if (selectedOption === "user" && selectedSubOption === "getAllUsers") {
            await fetchUsers();
        }
        else if (selectedOption === "cart" &&
            selectedSubOption === "getAllCarts") {
            await fetchCarts();
        }
        else if (selectedOption === "payment") {
            if (selectedSubOption === "getPaymentDetailsByEmail") {
                await fetchPaymentDetailsByEmail();
            }
            else if (selectedSubOption === "getPaymentDetailsByMobile") {
                await fetchPaymentDetailsByMobile();
            }
            else if (selectedSubOption === "getAllPaymentDetails") {
                await fetchAllPaymentDetails();
            }
        }
    };
    const handleDownload = async () => {
        await handleDisplay(); // Fetch data first
        const csv = Papa.unparse(results);
        const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
        saveAs(blob, `${selectedOption}_${selectedSubOption}.csv`);
    };
    const fetchUsers = async () => {
        try {
            const res = await SalesAPIs.getAllUserDetails();
            setResults(res.data);
        }
        catch (error) {
            console.error("An error occurred while fetching users:", error);
        }
    };
    const fetchCarts = async () => {
        try {
            const res = await CartAPI.getAllCartForDownload();
            console.log(res);
            setResults(res.data);
        }
        catch (error) {
            console.error("An error occurred while fetching carts:", error);
        }
    };
    const fetchPaymentDetailsByEmail = async () => {
        try {
            const res = await SalesAPIs.getPaymentDetailsByEmailDownload(email);
            setResults(res.data.paymentResponseTypeList);
        }
        catch (error) {
            console.error("An error occurred while fetching payment details by email:", error);
        }
    };
    const fetchPaymentDetailsByMobile = async () => {
        try {
            const res = await SalesAPIs.getPaymentDetailsByMobileNoDownload(mobile);
            setResults(res.data.paymentResponseTypeList);
        }
        catch (error) {
            console.error("An error occurred while fetching payment details by mobile:", error);
        }
    };
    const fetchAllPaymentDetails = async () => {
        try {
            const res = await SalesAPIs.getAllPaymentDetailsDownload();
            setResults(res.data.paymentResponseTypeList);
        }
        catch (error) {
            console.error("An error occurred while fetching all payment details:", error);
        }
    };
    return (_jsxs("div", { className: "w-4/5 mx-auto p-6 bg-white shadow-md rounded-lg mt-[20rem]", children: [_jsx("h1", { className: "text-2xl font-bold mb-4", children: "Sales Operations" }), _jsxs("div", { className: "mb-4", children: [_jsx("label", { htmlFor: "mainOption", className: "block text-gray-700 font-medium mb-2", children: "Select Option" }), _jsxs("select", { id: "mainOption", value: selectedOption, onChange: handleMainChange, className: "w-full border border-gray-300 rounded-md p-2", children: [_jsx("option", { value: "", children: "Select an option" }), _jsx("option", { value: "user", children: "User" }), _jsx("option", { value: "cart", children: "Cart" }), _jsx("option", { value: "payment", children: "Payment" })] })] }), selectedOption === "user" && (_jsxs("div", { className: "mb-4", children: [_jsx("label", { htmlFor: "subOption", className: "block text-gray-700 font-medium mb-2", children: "User Options" }), _jsxs("select", { id: "subOption", value: selectedSubOption, onChange: handleSubChange, className: "w-full border border-gray-300 rounded-md p-2", children: [_jsx("option", { value: "", children: "Select an option" }), _jsx("option", { value: "getAllUsers", children: "Get All Users" })] }), selectedSubOption && (_jsxs(_Fragment, { children: [_jsx("button", { onClick: handleDisplay, className: "mt-2 bg-blue-500 text-white py-2 px-4 mx-2 rounded-md", children: "Display" }), _jsx("button", { onClick: handleDownload, className: "mt-2 bg-blue-500 mx-2 text-white py-2 px-4 rounded-md", children: "Download Now" })] }))] })), selectedOption === "cart" && (_jsxs("div", { className: "mb-4", children: [_jsx("label", { htmlFor: "subOption", className: "block text-gray-700 font-medium mb-2", children: "Cart Options" }), _jsxs("select", { id: "subOption", value: selectedSubOption, onChange: handleSubChange, className: "w-full border border-gray-300 rounded-md p-2", children: [_jsx("option", { value: "", children: "Select an option" }), _jsx("option", { value: "getAllCarts", children: "Get All Carts" })] }), selectedSubOption && (_jsxs(_Fragment, { children: [_jsx("button", { onClick: handleDisplay, className: "mt-2 bg-blue-500 text-white py-2 px-4 mx-2 rounded-md", children: "Display" }), _jsx("button", { onClick: handleDownload, className: "mt-2 bg-blue-500 mx-2 text-white py-2 px-4 rounded-md", children: "Download Now" })] }))] })), selectedOption === "payment" && (_jsxs("div", { className: "mb-4", children: [_jsx("label", { htmlFor: "subOption", className: "block text-gray-700 font-medium mb-2", children: "Payment Options" }), _jsxs("select", { id: "subOption", value: selectedSubOption, onChange: handleSubChange, className: "w-full border border-gray-300 rounded-md p-2", children: [_jsx("option", { value: "", children: "Select an option" }), _jsx("option", { value: "getPaymentDetailsByEmail", children: "Get Payment Details by Email" }), _jsx("option", { value: "getPaymentDetailsByMobile", children: "Get Payment Details by Mobile" }), _jsx("option", { value: "getAllPaymentDetails", children: "Get All Payment Details" })] }), selectedSubOption === "getPaymentDetailsByEmail" && (_jsxs("div", { className: "mt-4", children: [_jsx("label", { htmlFor: "email", className: "block text-gray-700 font-medium mb-2", children: "Enter Email" }), _jsx("input", { id: "email", type: "email", value: email, onChange: handleEmailChange, className: "w-full border border-gray-300 rounded-md p-2" })] })), selectedSubOption === "getPaymentDetailsByMobile" && (_jsxs("div", { className: "mt-4", children: [_jsx("label", { htmlFor: "mobile", className: "block text-gray-700 font-medium mb-2", children: "Enter Mobile Number" }), _jsx("input", { id: "mobile", type: "tel", value: mobile, onChange: handleMobileChange, className: "w-full border border-gray-300 rounded-md p-2" })] })), selectedSubOption && (_jsxs(_Fragment, { children: [_jsx("button", { onClick: handleDisplay, className: "mt-2 bg-blue-500 text-white py-2 px-4 mx-2 rounded-md", children: "Display" }), _jsx("button", { onClick: handleDownload, className: "mt-2 bg-blue-500 mx-2 text-white py-2 px-4 rounded-md", children: "Download Now" })] }))] })), results.length > 0 && (_jsx("div", { className: "mt-6 overflow-x-auto", children: _jsxs("table", { className: "min-w-full bg-white border border-gray-300", children: [_jsx("thead", { children: _jsx("tr", { children: Object.keys(results[0]).map((key) => (_jsx("th", { className: "py-2 px-4 border-b border-gray-300 text-left", children: key }, key))) }) }), _jsx("tbody", { children: results.map((result, index) => (_jsx("tr", { children: Object.values(result).map((value, idx) => (_jsx("td", { className: "py-2 px-4 border-b border-gray-300", children: value }, idx))) }, index))) })] }) }))] }));
};
export default SalesOperations;
