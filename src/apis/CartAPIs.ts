import { api } from "./configs/axiosConfigs";
// import { Cart } from "../types/Cart";
// import { OrderRequestData } from "../types/OrderRequestData";
import axios from "axios";

export const CartAPI = {
  addToCart: async function (courseId: string) {
    try {
      // Implement the logic to add the specified course to the user's cart
      const res = await api.post("/cart/add", { courseId });
      return res;
    } catch (error) {
      console.error("An error occurred while adding to cart:", error);
      return Promise.reject(error);
    }
  },

  removeFromCart: async function (courseId: string) {
    try {
      // Implement the logic to remove the specified course from the user's cart
      const res = await api.post("/cart/remove", { courseId });
      return res;
    } catch (error) {
      console.error("An error occurred while removing from cart:", error);
      return Promise.reject(error);
    }
  },

  checkout: async function (requestData: any) {
    try {
      // Implement the logic to make the payment using the provided order request data
      const res = await axios.post(
        `http://localhost:8080/payment/${requestData.totalAmount * 100}`,
        requestData
      );
      return res;
    } catch (error) {
      console.error("An error occurred while making the payment:", error);
      return Promise.reject(error);
    }
  },
};
