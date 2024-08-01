import React from 'react'
import { api } from "../configs/axiosConfigs";

   export const GeneratePresignedUrlforUpload  =  async function generatePresignedUrlforUpload(key:string) {
      console.log("generate the pre-sign URL for upload");
      
      await api
        .post("/v1.5/s3/get-presigned-url-for-upload",null,{params:{objectKey:key}})
        .then((res) => {
          console.log(res);
          
        })
        .catch((error: any) => {
          console.log(
            `An error occurred while fetching signedurl -> ${error.status}`
          );
        });
    }
  


