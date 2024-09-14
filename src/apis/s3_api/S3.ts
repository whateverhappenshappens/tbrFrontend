import { api } from "../configs/axiosConfigs";
export const GeneratePresignedUrlforUpload = async function generatePresignedUrlforUpload(urlData) {
  console.log("Generating the pre-signed URL for upload");
  try {
    const res = await api.post("/v1.5/s3/get-presigned-url-for-upload", urlData);
    console.log("S3 response:", res.data);
    return res.data; // Return the pre-signed URL directly
  } catch (error) {
    console.error(`An error occurred while fetching signed URL -> ${error.status}`);
    throw error; // Re-throw the error if needed
  }
};

export const GeneratePresignedUrlforUpdate = async function generatePresignedUrlforUpdate(urlUpdateData) {
    console.log("Generating the pre-signed URL for upload");
    try {
      const res = await api.post("/v1.5/s3/get-presigned-url-for-update", urlUpdateData);
      console.log("S3 response:", res.data);
      return res.data; // Return the pre-signed URL directly
    } catch (error) {
      console.error(`An error occurred while fetching signed URL -> ${error.status}`);
      throw error; // Re-throw the error if needed
    }
  };