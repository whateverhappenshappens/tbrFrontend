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
      // Add isActive: true to each event
      res.data = res.data.map((event: any) => ({ ...event, isActive: true }));
      return res;
    } catch (e) {
      console.error("An error occurred:", e);
      toast.error("Invalid access token!");
      return e;
    }
  },

  allEventsBasicDetail: async function () {
    try {
      const res = await api.get("v1.5/events");
      console.log(res.data);

      return res;
    } catch (error) {
      console.error("An error occurred:", error);
      return Promise.reject(error);
    }
  },

  pastEvents: async function () {
    try {
      const res = await api.get("/v1.5/events?active=false");
      // Add isActive: false to each event (since they are past events)
      res.data = res.data.map((event: any) => ({ ...event, isActive: true }));
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
      } else {
        // Add isActive: true to the event
        res.data = { ...res.data, isActive: true };
      }
      return res;
    } catch (error) {
      console.error("An error occurred:", error);
      return Promise.reject(error);
    }
  },

  UpdateManageEvents: async function (url: string) {
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
    } catch (error) {
      console.error("An error occurred:", error);
      toast.error("Invalid access token!");
      return error;
    }
  },
  uploadS3Image: async function(url: string){
    try {
      const res = await api.get("/v1.5/events?active=true");
      // Add isActive: true to each event
      res.data = res.data.map((event: any) => ({ ...event, isActive: true }));
      return res;
    } catch (error) {
      console.error("An error occurred:", error);
      return Promise.reject(error);
    }
  },
  activeEvents: async function () {
    try {
      const res = await api.get("/v1.5/events?active=true");
      // Add isActive: true to each event
      res.data = res.data.map((event: any) => ({ ...event, isActive: true }));
      return res;
    } catch (error) {
      console.error("An error occurred:", error);
      return Promise.reject(error);
    }
  },
  DeleteEventById: async function (url: string) {
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
    } catch (error) {
      console.error("An error occurred:", error);
      toast.error("Invalid access token!");
      return error;
    }
  },

  UndoDeleteEventById: async function (url: string) {
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
    } catch (error) {
      console.error("An error occurred:", error);
      toast.error("Invalid access token!");
      return error;
    }
  },
};
