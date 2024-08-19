import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { UserAPI } from "../../apis/UserAPIs";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const OperationSignIn = ({ handle_login, setIsLoggedIn }) => {
    const navigate = useNavigate();
    const [value, setValue] = useState();
    const [color, setColor] = useState(false);
    const [data, setData] = useState({
        email: "",
        password: "",
    });
    const handleEmailChange = (e) => {
        setData({ ...data, email: e.target.value });
    };
    const handlePasswordChange = (e) => {
        setData({ ...data, password: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const handlelogin = async () => {
        const response = await UserAPI.login(data, handle_login, setIsLoggedIn);
        if (response.status === 201) {
            if (value === "sale") {
                toast.success("Login Successful");
                navigate("/operations/sales");
            }
            else {
                toast.success("Login Successful");
                navigate("/operations/manage-events");
            }
        }
    };
    const handleRoleSale = () => {
        setValue("sale");
        setColor(!color);
    };
    const handleRoleOperation = () => {
        setValue("operation");
        setColor(!color);
    };
    return (_jsx("section", { className: "bg-gray-50 dark:bg-gray-900", children: _jsx("div", { className: "flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0", children: _jsx("div", { className: "w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700", children: _jsxs("div", { className: "p-6 space-y-4 md:space-y-6 sm:p-8", children: [_jsx("h4", { children: "Select Type Of Operation" }), _jsxs("div", { className: "flex justify-evenly", children: [_jsx("button", { className: color
                                        ? "bg-blue-500 h-10 px-5 rounded text-white"
                                        : "bg-white h-10 px-5 rounded", onClick: handleRoleSale, children: "Sales" }), _jsx("button", { className: color
                                        ? "bg-white px-2 rounded"
                                        : "bg-blue-500 px-2 rounded text-white", onClick: handleRoleOperation, children: "Event & Blog" })] }), _jsx("h1", { className: "text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white", children: "Sign in to your account" }), _jsxs("form", { className: "space-y-4 md:space-y-6", onSubmit: handleSubmit, children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "email", className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white", children: "Your email" }), _jsx("input", { type: "email", name: "email", id: "email", value: data.email, onChange: handleEmailChange, className: "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", placeholder: "name@company.com", required: true })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "password", className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white", children: "Password" }), _jsx("input", { type: "password", name: "password", id: "password", value: data.password, onChange: handlePasswordChange, placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", className: "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", required: true })] }), _jsx("button", { type: "submit", onClick: handlelogin, className: "w-full text-white bg-blue-500 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800", children: "Sign in" })] })] }) }) }) }));
};
export default OperationSignIn;
