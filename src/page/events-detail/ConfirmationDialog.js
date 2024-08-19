import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const ConfirmationDialog = ({ message, onConfirm, onCancel }) => {
    return (_jsx("div", { className: "fixed  inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50", children: _jsxs("div", { className: "bg-white p-[40px] rounded-lg shadow-lg text-center", children: [_jsx("div", { className: "mb-12 text-3xl", children: message }), _jsxs("div", { className: "flex justify-around", children: [_jsx("button", { className: "bg-red-500 hover:bg-red-700 text-white text-2xl font-bold py-4 px-12 rounded", onClick: onConfirm, children: "Yes" }), _jsx("button", { className: "bg-gray-500 hover:bg-gray-700 text-white font-bold py-4 px-12 rounded text-2xl", onClick: onCancel, children: "No" })] })] }) }));
};
export default ConfirmationDialog;
