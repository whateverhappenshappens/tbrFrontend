import { api } from "./configs/axiosConfigs";
import toast from "react-hot-toast";

// function to refresh the access token
export const refreshAccessToken = async function refreshAccessToken() {
    // console.log("Inside refresh token function.");
    if (localStorage.getItem("access-token") !== null) {
  localStorage.removeItem("access-token");
}
    await api
        .post("/v1.5/auth/refresh-token")
        .then((res) => {
        localStorage.setItem("access-token", res.data.access_token);
        window.location.reload();
    })
        .catch((error) => {
            // toast.error("Session Expired , Login Again!")
        console.log(`An error occurred while fetching access token -> ${error.status}`);
    });
};
export const UserAPI = {
    create: async function (user) {
        try {
            const res = await api.post("/v1.5/auth/register", user);
            window.location.reload();
            toast.success("Account created Successfully");
            return res;
        }
        catch (error) {
            console.error("An error occurred:", error);
            return Promise.reject(error);
        }
    },

    login: async function (user, handle_login, setIsLoggedIn) {
        const formData = new URLSearchParams();
        const useremail = user.email;
        formData.append("username", user.email);
        formData.append("password", user.password);
        try {
            const res = await api.post("/login", formData, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            });

            toast.success("Login Successful");
            if (res.status === 201) {
                localStorage.setItem("access-token", res.data.access_token);
                if (typeof handle_login === "function")
                    handle_login();
                if (typeof setIsLoggedIn === "function")
                    setIsLoggedIn(true);
                // localStorage.setItem("user-email", useremail);
            }
            return res;
        }
        catch (error) {
            toast.error("Check your credentials and try again");
            if (typeof setIsLoggedIn === "function")
                setIsLoggedIn(false);
            return Promise.reject(error);
        }
    },
    logout: async function (setIsLoggedIn) {
        const access_token = localStorage.getItem("access-token");
        try {
            const res = await api.request({
                url: "/v1.5/auth/logout",
                method: "GET",
                headers: {
                    Authorization: "Bearer " + access_token,
                },
            });
            toast.success("Logout Successful");

            if(localStorage.getItem("isLoggedIn") !== null){
                localStorage.removeItem("isLoggedIn");
            }
            localStorage.removeItem("access-token");
            // localStorage.removeItem("user-email");
            if (typeof setIsLoggedIn === "function")
                setIsLoggedIn(false);
            window.location.href = "/";
            return;
        }
        catch (error) {
            refreshAccessToken();
            console.error("An error occurred:", error);
            toast.error("Invalid access token!");
            return error;
        }
    },
    check_access_token_validity: async function () {
        const access_token = localStorage.getItem("access-token");
        try {
            const res = await api.request({
                url: "/v1.5/requests/test/private/zoro",
                method: "GET",
                headers: {
                    Authorization: "Bearer " + access_token,
                },
            });
            return res;
        }
        catch (error) {
            refreshAccessToken();
            return error;
        }
    },
    private_test: async function () {
        const access_token = localStorage.getItem("access-token");
        try {
            const res = await api.request({
                url: "/v1.5/requests/test/private/zoro",
                method: "GET",
                headers: {
                    Authorization: "Bearer " + access_token,
                },
            });
            return res;
        }
        catch (error) {
            refreshAccessToken();
            console.error("An error occurred:", error);
            toast.error("Invalid access token!");
            return error;
        }
    },
    public_test: async function () {
        try {
            const res = await api.get("/v1.5/requests/test/public");
            return res;
        }
        catch (error) {
            console.error("An error occurred:", error);
            return Promise.reject(error);
        }
    },
    UserDetails: async function () {
        const access_token = localStorage.getItem("access-token");
        if (!access_token) {
            return false;
        }
        try {
            const res = await api.request({
                url: "/v1.5/requests/test/private/zoro",
                method: "GET",
                headers: {
                    Authorization: "Bearer " + access_token,
                },
            });
            return res;
        }
        catch (error) {
            console.error("An error occurred while checking login status:", error);
            return false;
        }
    },
    UpdateProfileDetail: async function (useremail) {
        const access_token = localStorage.getItem("access-token");
        try {
            const res = await api.request({
                url: `/v1.5/users/@${useremail}`,
                method: "GET",
                headers: {
                    Authorization: "Bearer " + access_token,
                },
            });
            return res;
        }
        catch (error) {
            refreshAccessToken();
            console.error("An error occurred:", error);
            toast.error("Invalid access token!");
            return error;
        }
    },
    userProfileDetail: async function () {
        if(localStorage.getItem("access-token") === null) {
            await refreshAccessToken();
        }
         const access_token = localStorage.getItem("access-token");
        
        try {
            const res = await api.request({
                url: `/v1.5/users/get-profile`,
                method: "GET",
                headers: {
                    Authorization: "Bearer " + access_token,
                },
            });
            return res;
        }
        catch (error) {
            refreshAccessToken();
            console.error("An error occurred:", error);
            toast.error("Invalid access token!");
            return error;
        }
    },
    UpdateUserProfile: async function (email, patchOps) {
        const access_token = localStorage.getItem("access-token");
        const url = `/v1.5/users/${email}`;
        try {
            const res = await api.patch(url, patchOps, {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                    "Content-Type": "application/json-patch+json",
                },
            });
            toast.success("Profile updated successfully!");
            return res.data; // Assuming you want to return the updated profile data
        }
        catch (error) {
            console.error("Failed to update profile:", error);
            toast.error("Failed to update profile.");
            return Promise.reject(error);
        }
    },
    isLoggedIn: async function () {
        const access_token = localStorage.getItem("access-token");
        if (!access_token) {
            return false;
        }
        try {
            const res = await api.request({
                url: "/v1.5/requests/test/private/zoro",
                method: "GET",
                headers: {
                    Authorization: "Bearer " + access_token,
                },
            });
            return res.status === 200;
        }
        catch (error) {
            console.error("An error occurred while checking login status:", error);
            return false;
        }
    },
};
