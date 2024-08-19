import { api } from "../configs/axiosConfigs";
export const CartAPI = {
    addToCart: async function (courseId) {
        try {
            const res = await api.post("/cart/add", { courseId });
            return res;
        }
        catch (error) {
            console.error("An error occurred while adding to cart:", error);
            return Promise.reject(error);
        }
    },
};
