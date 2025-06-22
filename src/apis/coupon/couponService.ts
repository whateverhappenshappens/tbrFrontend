
// API request helper
import { api } from "../configs/axiosConfigs";
import { refreshAccessToken } from "../UserAPIs";
import { toast } from "react-hot-toast";
// Refresh token function (placeholder)


// Toast notification helper (placeholder)
// Removed local toast declaration to avoid conflict with imported toast

export const couponService = {
  // Add new coupon
  addCoupon: async function (couponData: { couponCode: string; percentage: number; type: string }) {
    const access_token = localStorage.getItem("access-token");
    try {
      const res = await api.request({
        url: `/v1.5/coupons`,
        method: "POST",
        headers: {
          Authorization: "Bearer " + access_token,
        },
        data: couponData
      });
      toast.success("Coupon added successfully!");
      return res;
    } catch (error: any) {
      if (error.status === 401) {
        refreshAccessToken();
      }
      console.error("An error occurred:", error);
      toast.error("Failed to add coupon!");
      return error;
    }
  },

  // Remove coupon
  removeCoupon: async function (id: string) {
    const access_token = localStorage.getItem("access-token");
    try {
      const res = await api.request({
        url: `/v1.5/coupons/${id}`,
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + access_token,
        },
      });
      toast.success("Coupon removed successfully!");
      return res;
    } catch (error: any) {
      if (error.status === 401) {
        refreshAccessToken();
      }
      console.error("An error occurred:", error);
      toast.error("Failed to remove coupon!");
      return error;
    }
  },
  validateCoupon: async function (couponCode: string) {
  try {
    const res = await api.request({
      url: `/v1.5/coupons/validate?couponCode=${encodeURIComponent(couponCode)}`,
      method: "GET",
    });

    if (res.data.validated) {
      toast.success("Coupon applied successfully!");
      return {
        success: true,
        discount: res.data.percentage,
        message: "Coupon applied successfully"
      };
    } else {
      toast.error("Invalid coupon code");
      return {
        success: false,
        message: "Invalid coupon code"
      };
    }
  } catch (error: any) {
    console.error("Coupon validation error:", error);
    
    let errorMessage = "Invalid or expired coupon!";
    if (error.response?.status === 403) {
      errorMessage = "Authentication failed";
    } else if (error.response?.data?.message) {
      errorMessage = error.response.data.message;
    }

    toast.error(errorMessage);
    return {
      success: false,
      message: errorMessage
    };
  }
}

,

  // Get all coupons (optional - for fetching from server)
  getCoupons: async function () {
    const access_token = localStorage.getItem("access-token");
    try {
      const res = await api.request({
        url: `/v1.5/coupons`,
        method: "GET",
        headers: {
          Authorization: "Bearer " + access_token,
        },
      });
      return res;
    } catch (error: any) {
      if (error.status === 401) {
        refreshAccessToken();
      }
      console.error("An error occurred:", error);
      toast.error("Failed to fetch coupons!");
      return error;
    }
  },
  bulkAddCoupon: async function (couponData: {
  coupons: { couponCode: string; percentage: number; type: string;courseId:string }[];
}) {
  const access_token = localStorage.getItem("access-token");
  try {
    const res = await api.request({
      url: `/v1.5/coupons/bulk`, // update if endpoint differs
      method: "POST",
      headers: {
        Authorization: "Bearer " + access_token,
        "Content-Type": "application/json",
      },
      data: couponData,
    });
    toast.success("Coupons added successfully!");
    return res;
  } catch (error: any) {
    if (error.response?.status === 401) {
      refreshAccessToken();
    }
    console.error("An error occurred:", error);
    toast.error("Failed to add coupons!");
    return error;
  }
}
,
};