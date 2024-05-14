import { api } from "../configs/axiosConfigs";

export const EventsAPI = {
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
    EventById: async function (url:string) {
      try {
        const res = await api.get(`/v1.5/events/${url}`);
        return res;
      } catch (error) {
        console.error("An error occurred:", error);
        return Promise.reject(error);
      }
    },
}

