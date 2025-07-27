import { api } from "../configs/axiosConfigs";
import { refreshAccessToken } from "../UserAPIs";
import { toast } from "react-hot-toast";
export interface UpdateCourseRequest {
  name: string;
  description: string;
  category: string;
  duration: string;
  price: number;
  imageUrl: string;
  badgeText: string;
  rating: number;
  ratingCount: number;
  instructorName: string;
  instructorDesignation: string;
  instructorDescription: string;
  instructorImageUrl: string;
  instructorLinkedin: string;
  startDate: string;
  endDate: string;
}

export interface CourseResponse {
  id: string;
  name: string;
  description: string;
  category: string;
  duration: string;
  price: number;
  imageUrl: string;
  badgeText: string;
  rating: number;
  ratingCount: number;
  instructorName: string;
  instructorDesignation: string;
  instructorDescription: string;
  instructorImageUrl: string;
  instructorLinkedin: string;
  startDate: string;
  endDate: string;
}

export const courseService = {
  // Get all courses
  getAllCourses: async function () {
    const access_token = localStorage.getItem("access-token");
    try {
      const res = await api.request({
        url: `/v1.5/courses`,
        method: "GET",
        headers: {
          Authorization: "Bearer " + access_token,
        },
      });
      return res.data;
    } catch (error: any) {
      if (error.response?.status === 401) {
        refreshAccessToken();
      }
      console.error("Error fetching all courses:", error);
      toast.error("Failed to fetch courses!");
      return null;
    }
  },

  // Get course by ID
  getCourseById: async function (courseId: string) {
    const access_token = localStorage.getItem("access-token");
    try {
      const res = await api.request({
        url: `/v1.5/courses/${courseId}`,
        method: "GET",
        headers: {
          Authorization: "Bearer " + access_token,
        },
      });
      return res.data;
    } catch (error: any) {
      if (error.response?.status === 401) {
        refreshAccessToken();
      }
      console.error("Error fetching course by ID:", error);
      toast.error("Failed to fetch course details!");
      return null;
    }
  },

  // Update course by ID
  updateCourse: async function (courseId: string, courseData: UpdateCourseRequest) {
    const access_token = localStorage.getItem("access-token");
    try {
      const res = await api.request({
        url: `/v1.5/courses/${courseId}`,
        method: "PUT",
        headers: {
          Authorization: "Bearer " + access_token,
          "Content-Type": "application/json",
        },
        data: courseData,
      });

      toast.success("Course updated successfully!");
      return res.data;
    } catch (error: any) {
      if (error.response?.status === 401) {
        refreshAccessToken();
      }
      console.error("Error updating course:", error);
      toast.error("Failed to update course!");
      return null;
    }
  },

  // Update only course name
  updateCourseName: async function (courseId: string, name: string) {
    try {
      const existingCourse = await this.getCourseById(courseId);
      if (!existingCourse) {
        toast.error("Course not found!");
        return null;
      }

      const updatedCourse: UpdateCourseRequest = {
        ...existingCourse,
        name,
      };

      return await this.updateCourse(courseId, updatedCourse);
    } catch (error: any) {
      console.error("Error updating course name:", error);
      toast.error("Failed to update course name!");
      return null;
    }
  }
};
