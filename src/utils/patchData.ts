import axios from "axios";

type JsonPatchOp = {
  op: "add" | "remove" | "replace" | "move" | "copy" | "test";
  path: string;
  value?: any;
};

const patchData = async (
  url: string,
  patchOps: JsonPatchOp[],
  accessToken: string
) => {
  try {
    const response = await axios.patch(url, patchOps, {
      headers: {
        "Content-Type": "application/json-patch+json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("An error occurred while patching data:", error);
    throw error;
  }
};

export default patchData;
