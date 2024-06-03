import { api } from "../configs/axiosConfigs";
import toast from "react-hot-toast";

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
      return res;
    } catch (e) {
      // newAccessToken();
      console.error("An error occurred:", e);
      toast.error("Invalid access token!");
      return e;
    }
  },

  allEventsBasicDetail: async function () {
    try {
      const res = await api.get("v1.5/events");
      return res;
    } catch (error) {
      console.error("An error occurred:", error);
      return Promise.reject(error);
    }
  },
  activeEvents: async function () {
    try {
      const res = await api.get("/v1.5/events?active=true");
      return res;
    } catch (error) {
      console.error("An error occurred:", error);
      return Promise.reject(error);
    }
  },
  pastEvents: async function () {
    try {
      const res = await api.get("/v1.5/events?active=false");
      return res;
    } catch (error) {
      console.error("An error occurred:", error);
      return Promise.reject(error);
    }
  },
  EventById: async function (url: string) {
    try {
      const res = await api.get(`/v1.5/events/${url}`);
      if (res.status == 404) {
        toast.error("Event Not found");
      }
      return res;
    } catch (error) {
      console.error("An error occurred:", error);
      return Promise.reject(error);
    }
  },
  UpdateManageEvents: async function (url: string) {
    const access_token = localStorage.getItem("access-token");
    // if token is not available in the
    try {
      const res = await api.request({
        url: `/v1.5/events/${url}`,
        method: "PATCH",
        headers: {
          Authorization: "Bearer " + access_token,
        },
      });
      //   console.log("hello");
      //   console.log(res);
      //   toast.success("Valid access token!");
      console.log(res.data);
      return res;
    } catch (error) {
      // newAccessToken();
      console.error("An error occurred:", error);
      toast.error("Invalid access token!");
      return error;
    }
  },
  DeleteEventById: async function (url: string) {
    const access_token = localStorage.getItem("access-token");
    // if token is not available in the
    try {
      const res = await api.request({
        url: `/v1.5/events/delete/${url}`,
        method: "PUT",
        headers: {
          Authorization: "Bearer " + access_token,
        },
      });
      //   console.log("hello");
      //   console.log(res);
      //   toast.success("Valid access token!");
      console.log(res.data);
      return res;
    } catch (error) {
      // newAccessToken();
      console.error("An error occurred:", error);
      toast.error("Invalid access token!");
      return error;
    }
  },
};
