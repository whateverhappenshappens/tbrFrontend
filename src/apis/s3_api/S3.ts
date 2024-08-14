import React from 'react'
import { api } from "../configs/axiosConfigs";

   export const GeneratePresignedUrlforUpload  =  async function generatePresignedUrlforUpload(key:string) {
      console.log("generate the pre-sign URL for upload");
      try {
        console.log("Generating the pre-sign URL for upload");
    
        const res = await api.post("/v1.5/s3/get-presigned-url-for-upload", null, { params: { objectKey: key } });
        
        console.log("S3 response:", res.data);
        return res.data; // Return the pre-signed URL directly
    
      } catch (error) {
        console.error(`An error occurred while fetching signed URL -> ${error.status}`);
        throw error; // Re-throw the error if needed
      }
    }
  


