import { api } from "../configs/axiosConfigs";
import toast from "react-hot-toast";
async function newAccessToken() {
    console.log("inside refresh token function.");
    localStorage.removeItem("access-token");
    await api
        .post("/v1.5/auth/refresh-token")
        .then((res) => {
        console.log(res);
        localStorage.setItem("access-token", res.data.access_token);
    })
        .catch((error) => {
        console.log(`An error occurred while fetching access token -> ${error.status}`);
    });
}
export const SalesAPIs = {
    getAllUserDetails: async function () {
        const access_token = localStorage.getItem("access-token");
        // if token is not available in the
        try {
            const res = await api.request({
                url: "/v1.5/users/getAllUserDetails",
                method: "GET",
                headers: {
                    Authorization: "Bearer " + access_token,
                },
            });
            //   console.log("hello");
            //   console.log(res);
            //   toast.success("Valid access token!");
            return res;
        }
        catch (error) {
            newAccessToken();
            console.error("An error occurred:", error);
            toast.error("Invalid access token!");
            return error;
        }
    },
    getPaymentDetailsByMobileNoDownload: async function (mobileNumber) {
        const access_token = localStorage.getItem("access-token");
        // if token is not available in the
        try {
            const res = await api.request({
                url: `v1.5/payment/user/orders-by-number/${mobileNumber}`,
                method: "GET",
                headers: {
                    Authorization: "Bearer " + access_token,
                },
            });
            //   console.log("hello");
            console.log(res.data);
            //   toast.success("Valid access token!");
            return res;
        }
        catch (error) {
            newAccessToken();
            console.error("An error occurred:", error);
            toast.error("Invalid access token!");
            return error;
        }
    },
    getPaymentDetailsByEmailDownload: async function (userId) {
        const access_token = localStorage.getItem("access-token");
        // if token is not available in the
        try {
            const res = await api.request({
                url: `v1.5/payment/user/orders-by-id/${userId}`,
                method: "GET",
                headers: {
                    Authorization: "Bearer " + access_token,
                },
            });
            //   console.log("hello");
            //   console.log(res);
            //   toast.success("Valid access token!");
            return res;
        }
        catch (error) {
            newAccessToken();
            console.error("An error occurred:", error);
            toast.error("Invalid access token!");
            return error;
        }
    },
    getAllPaymentDetailsDownload: async function () {
        const access_token = localStorage.getItem("access-token");
        // if token is not available in the
        try {
            const res = await api.request({
                url: `v1.5/payment/get-all-payment`,
                method: "GET",
                headers: {
                    Authorization: "Bearer " + access_token,
                },
            });
            //   console.log("hello");
            //   console.log(res);
            //   toast.success("Valid access token!");
            return res;
        }
        catch (error) {
            newAccessToken();
            console.error("An error occurred:", error);
            toast.error("Invalid access token!");
            return error;
        }
    },
};
