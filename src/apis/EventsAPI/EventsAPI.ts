import { api } from "../configs/axiosConfigs";
import toast from "react-hot-toast";
import { refreshAccessToken } from "../UserAPIs";
// async function newAccessToken() {
//   console.log("inside refresh token function.");
//   localStorage.removeItem("access-token");
//   await api
//     .post("/v1.5/auth/refresh-token")
//     .then((res) => {
//       console.log(res);
//       localStorage.setItem("access-token", res.data.access_token);
//     })
//     .catch((error: any) => {
//       console.log(
//         `An error occurred while fetching access token -> ${error.status}`
//       );
//     });
// }
export const EventsAPI = {
    allEventsDetailsForDownload: async function () {
        const access_token = localStorage.getItem("access-token");
        try {
            const res = await api.request({
                url: `/v1.5/events/all`,
                method: "GET",
                headers: {
                    Authorization: "Bearer " + access_token,
                },
            });
            // Add isActive: true to each event
            res.data = res.data.map((event) => ({ ...event, isActive: true }));
            console.log(res.data);
            return res;
        }
        catch (error) {
            if (error.status === 401) {
                refreshAccessToken();
            }
            console.error("An error occurred:", error);
            toast.error("Invalid access token!");
            return error;
        }
    },
    allEventsBasicDetail: async function () {
        try {
            const res = await api.get("v1.5/events");
            console.log(res.data);
            return res;
        }
        catch (error) {
            console.error("An error occurred:", error);
            return Promise.reject(error);
        }
    },
    pastEvents: async function () {
        try {
            const res = await api.get("/v1.5/events?active=false");
            res.data = res.data.map((event) => ({ ...event, isActive: true }));
            return res;
        }
        catch (error) {
            console.error("An error occurred:", error);
            return Promise.reject(error);
        }
    },
    EventById: async function (url) {
        try {
            const res = await api.get(`/v1.5/events/${url}`);
            if (res.status == 404) {
                toast.error("Event Not found");
            }
            else {
                // Add isActive: true to the event
                res.data = { ...res.data, isActive: false };//issue is here 
            }
            return res;
        }
        catch (error) {
            console.error("An error occurred:", error);
            return Promise.reject(error);
        }
    },
    UpdateManageEvents: async function (url) {
        const access_token = localStorage.getItem("access-token");
        try {
            const res = await api.request({
                url: `/v1.5/events/${url}`,
                method: "PATCH",
                headers: {
                    Authorization: "Bearer " + access_token,
                },
            });
            console.log(res.data);
            return res;
        }
        catch (error) {
            if (error.status === 401) {
                refreshAccessToken();
            }
            console.error("An error occurred:", error);
            toast.error("Invalid access token!");
            return error;
        }
    },
    uploadS3Image: async function (url) {
        try {
            const res = await api.get("/v1.5/events?active=true");
            // Add isActive: true to each event
            res.data = res.data.map((event) => ({ ...event, isActive: true }));
            return res;
        }
        catch (error) {
            console.error("An error occurred:", error);
            return Promise.reject(error);
        }
    },
    activeEvents: async function () {
        try {
            const res = await api.get("/v1.5/events?active=true");
            // Add isActive: true to each event
            res.data = res.data.map((event) => ({ ...event, isActive: true }));
            return res;
        }
        catch (error) {
            console.error("An error occurred:", error);
            return Promise.reject(error);
        }
    },
    DeleteEventById: async function (url) {
        console.log("Reached DeleteByEvent");
        const access_token = localStorage.getItem("access-token");
        try {
            const res = await api.request({
                url: `v1.5/events/delete/${url}?isDeleted=true`,
                method: "PUT",
                headers: {
                    Authorization: "Bearer " + access_token,
                },
            });
            console.log("Reached DeleteByEvent");
            return res;
        }
        catch (error) {
            if (error.status === 401) {
                refreshAccessToken();
            }
            console.error("An error occurred:", error);
            toast.error("Invalid access token!");
            return error;
        }
    },
    UndoDeleteEventById: async function (url) {
        console.log("Reached UndoDeleteByEvent");
        const access_token = localStorage.getItem("access-token");
        try {
            const res = await api.request({
                url: `v1.5/events/delete/${url}?isDeleted=false`,
                method: "PUT",
                headers: {
                    Authorization: "Bearer " + access_token,
                },
            });
            return res;
        }
        catch (error) {
            if (error.status === 401) {
                refreshAccessToken();
            }
            console.error("An error occurred:", error);
            toast.error("Invalid access token!");
            return error;
        }
    },
    addEvent: async function (eventData) {
        const access_token = localStorage.getItem("access-token");
        try {
          const res = await api.request({
            url: `/v1.5/events`,
            method: "POST",
            headers: {
              Authorization: "Bearer " + access_token,
              "Content-Type": "application/json",
            },
            data: eventData, // Send eventData as the request body
          });
          console.log("Event added:", res.data);
          return res;
        } catch (error) {
          // Check if error.response exists before accessing its properties
          if (error.response) {
            if (error.response.status === 401) {
              refreshAccessToken();
            }
            console.error("An error occurred:", error.response.data);
            toast.error("An error occurred: " + (error.response.data.message || "Unknown error"));
          } else {
            // Handle cases where error.response is undefined
            console.error("An unexpected error occurred:", error);
            toast.error("An unexpected error occurred. Please try again.");
          }
          return error;
        }
      }
      
};