import { api } from "../configs/axiosConfigs";
// import { Cart } from "../types/Cart";
// import { OrderRequestData } from "../types/OrderRequestData";
// import axios from "axios";
import { refreshAccessToken } from "../UserAPIs";
export const CartAPI = {
    generateOrder: async function (amount, requestData, handle_login) {
        const access_token = localStorage.getItem("access-token");
        if (!access_token) {
            handle_login();
        }
        try {
            console.log("hello");
            const response = await api.request({
                url: `/v1.5/payment/${amount * 100}`,
                method: "POST",
                data: requestData,
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            });
            return response;
        }
        catch (error) {
            if (error.status === 401) {
                refreshAccessToken();
            }
            return error;
        }
    },
    addToCart: async function (userId, courseId) {
        const access_token = localStorage.getItem("access-token");
        try {
            const response = await api.request({
                url: `/v1.5/cart/add`,
                method: "POST",
                data: { userId, courseId },
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            });
            return response;
        }
        catch (error) {
            if (error.status === 401) {
                refreshAccessToken();
            }
            return error;
        }
    },
    removeFromCart: async function (userId, courseId) {
        const access_token = localStorage.getItem("access-token");
        try {
            const response = await api.request({
                url: `/v1.5/cart/delete`,
                method: "POST",
                data: { userId, courseId },
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            });
            return response;
        }
        catch (error) {
            if (error.status === 401) {
                refreshAccessToken();
            }
            return error;
        }
    },
    paymentSuccess: async function (requestData) {
        const access_token = localStorage.getItem("access-token");
        try {
            const response = await api.request({
                url: `/v1.5/payment/success`,
                method: "POST",
                data: requestData,
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            });
            return response;
        }
        catch (error) {
            if (error.status === 401) {
                refreshAccessToken();
            }
            return error;
        }
    },
    paymentFailed: async function (requestData) {
        const access_token = localStorage.getItem("access-token");
        try {
            const response = await api.request({
                url: `/v1.5/payment/fail`,
                method: "POST",
                data: requestData,
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            });
            return response;
        }
        catch (error) {
            if (error.status === 401) {
                refreshAccessToken();
            }
            return error;
        }
    },
    addToCart: async function (userId, courses) {
        const access_token = localStorage.getItem("access-token");
        try {
            const response = await api.request({
                url: `/v1.5/cart/add`,
                method: "POST",
                data: { userId, courses },
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            });
            return response;
        }
        catch (error) {
            if (error.status === 401) {
                refreshAccessToken();
            }
            return error;
        }
    },
    getAllCartForDownload: async function () {
        const access_token = localStorage.getItem("access-token");
        try {
            const response = await api.request({
                url: `/v1.5/cart/get-all`,
                method: "GET",
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            });
            return response;
        }
        catch (error) {
            if (error.status === 401) {
                refreshAccessToken();
            }
            return error;
        }
    },
    removeFromCart: async function (userId, courseId) {
        const access_token = localStorage.getItem("access-token");
        try {
            const response = await api.request({
                url: `/v1.5/cart/delete`,
                method: "POST",
                data: { userId, courseId },
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            });
            return response;
        }
        catch (error) {
            if (error.status === 401) {
                refreshAccessToken();
            }
            return error;
        }
    },
};
