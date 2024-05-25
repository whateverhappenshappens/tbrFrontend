import { useState } from "react";
import { SalesAPIs } from "../../apis/SalesAPI/SalesAPIs";
import { saveAs } from "file-saver";
import Papa from "papaparse";

const SalesOperations: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [selectedSubOption, setSelectedSubOption] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");
  const [results, setResults] = useState<any[]>([]); // State to store fetched data

  const handleMainChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
    setSelectedSubOption(""); // Reset sub-option when main option changes
    setEmail(""); // Reset email input
    setMobile(""); // Reset mobile input
    setResults([]); // Clear results
  };

  const handleSubChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSubOption(event.target.value);
    setEmail(""); // Reset email input
    setMobile(""); // Reset mobile input
    setResults([]); // Clear results
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleMobileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMobile(event.target.value);
  };

  const handleDisplay = async () => {
    if (selectedOption === "user" && selectedSubOption === "getAllUsers") {
      await fetchUsers();
    } else if (
      selectedOption === "cart" &&
      selectedSubOption === "getAllCarts"
    ) {
      await fetchCarts();
    } else if (selectedOption === "payment") {
      if (selectedSubOption === "getPaymentDetailsByEmail") {
        await fetchPaymentDetailsByEmail();
      } else if (selectedSubOption === "getUserDetailsByEmail") {
        await fetchUserDetailsByEmail();
      } else if (selectedSubOption === "getPaymentDetailsByMobile") {
        await fetchPaymentDetailsByMobile();
      } else if (selectedSubOption === "getAllPaymentDetails") {
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
    } catch (error) {
      console.error("An error occurred while fetching users:", error);
    }
  };

  const fetchCarts = async () => {
    try {
      const res = await SalesAPIs.getAllCarts();
      setResults(res.data);
    } catch (error) {
      console.error("An error occurred while fetching carts:", error);
    }
  };

  const fetchPaymentDetailsByEmail = async () => {
    try {
      const res = await SalesAPIs.getPaymentDetailsByEmail(email);
      setResults(res.data);
    } catch (error) {
      console.error(
        "An error occurred while fetching payment details by email:",
        error
      );
    }
  };

  const fetchUserDetailsByEmail = async () => {
    try {
      const res = await SalesAPIs.getUserDetailsByEmail(email);
      setResults(res.data);
    } catch (error) {
      console.error(
        "An error occurred while fetching user details by email:",
        error
      );
    }
  };

  const fetchPaymentDetailsByMobile = async () => {
    try {
      const res = await SalesAPIs.getPaymentDetailsByMobile(mobile);
      setResults(res.data);
    } catch (error) {
      console.error(
        "An error occurred while fetching payment details by mobile:",
        error
      );
    }
  };

  const fetchAllPaymentDetails = async () => {
    try {
      const res = await SalesAPIs.getAllPaymentDetails();
      setResults(res.data);
    } catch (error) {
      console.error(
        "An error occurred while fetching all payment details:",
        error
      );
    }
  };

  return (
    <div className="w-4/5 mx-auto p-6 bg-white shadow-md rounded-lg mt-[20rem]">
      <h1 className="text-2xl font-bold mb-4">Sales Operations</h1>

      <div className="mb-4">
        <label
          htmlFor="mainOption"
          className="block text-gray-700 font-medium mb-2"
        >
          Select Option
        </label>
        <select
          id="mainOption"
          value={selectedOption}
          onChange={handleMainChange}
          className="w-full border border-gray-300 rounded-md p-2"
        >
          <option value="">Select an option</option>
          <option value="user">User</option>
          <option value="cart">Cart</option>
          <option value="payment">Payment</option>
        </select>
      </div>

      {selectedOption === "user" && (
        <div className="mb-4">
          <label
            htmlFor="subOption"
            className="block text-gray-700 font-medium mb-2"
          >
            User Options
          </label>
          <select
            id="subOption"
            value={selectedSubOption}
            onChange={handleSubChange}
            className="w-full border border-gray-300 rounded-md p-2"
          >
            <option value="">Select an option</option>
            <option value="getAllUsers">Get All Users</option>
          </select>
          {selectedSubOption && (
            <>
              <button
                onClick={handleDisplay}
                className="mt-2 bg-blue-500 text-white py-2 px-4 mx-2 rounded-md"
              >
                Display
              </button>
              <button
                onClick={handleDownload}
                className="mt-2 bg-blue-500 mx-2 text-white py-2 px-4 rounded-md"
              >
                Download Now
              </button>
            </>
          )}
        </div>
      )}

      {selectedOption === "cart" && (
        <div className="mb-4">
          <label
            htmlFor="subOption"
            className="block text-gray-700 font-medium mb-2"
          >
            Cart Options
          </label>
          <select
            id="subOption"
            value={selectedSubOption}
            onChange={handleSubChange}
            className="w-full border border-gray-300 rounded-md p-2"
          >
            <option value="">Select an option</option>
            <option value="getAllCarts">Get All Carts</option>
          </select>
          {selectedSubOption && (
            <>
              <button
                onClick={handleDisplay}
                className="mt-2 bg-blue-500 text-white py-2 px-4 mx-2 rounded-md"
              >
                Display
              </button>
              <button
                onClick={handleDownload}
                className="mt-2 bg-blue-500 mx-2 text-white py-2 px-4 rounded-md"
              >
                Download Now
              </button>
            </>
          )}
        </div>
      )}

      {selectedOption === "payment" && (
        <div className="mb-4">
          <label
            htmlFor="subOption"
            className="block text-gray-700 font-medium mb-2"
          >
            Payment Options
          </label>
          <select
            id="subOption"
            value={selectedSubOption}
            onChange={handleSubChange}
            className="w-full border border-gray-300 rounded-md p-2"
          >
            <option value="">Select an option</option>
            <option value="getPaymentDetailsByEmail">
              Get Payment Details by Email
            </option>
            <option value="getUserDetailsByEmail">
              Get User Details by Email
            </option>
            <option value="getPaymentDetailsByMobile">
              Get Payment Details by Mobile
            </option>
            <option value="getAllPaymentDetails">
              Get All Payment Details
            </option>
          </select>
          {selectedSubOption === "getPaymentDetailsByEmail" && (
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Enter Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          )}
          {selectedSubOption === "getUserDetailsByEmail" && (
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Enter Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          )}
          {selectedSubOption === "getPaymentDetailsByMobile" && (
            <div className="mt-4">
              <label
                htmlFor="mobile"
                className="block text-gray-700 font-medium mb-2"
              >
                Enter Mobile Number
              </label>
              <input
                id="mobile"
                type="tel"
                value={mobile}
                onChange={handleMobileChange}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          )}
          {selectedSubOption && (
            <>
              <button
                onClick={handleDisplay}
                className="mt-2 bg-blue-500 text-white py-2 px-4 mx-2 rounded-md"
              >
                Display
              </button>
              <button
                onClick={handleDownload}
                className="mt-2 bg-blue-500 mx-2 text-white py-2 px-4 rounded-md"
              >
                Download Now
              </button>
            </>
          )}
        </div>
      )}

      {results.length > 0 && (
        <div className="mt-6">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  No.
                </th>
                <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Email
                </th>
                <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Name
                </th>
                <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Stream{" "}
                </th>
              </tr>
            </thead>
            <tbody>
              {results.map((result, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {index + 1}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {result.email}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {result.name}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {result.stream}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SalesOperations;
