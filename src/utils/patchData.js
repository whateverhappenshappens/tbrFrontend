import axios from "axios";
const patchData = async (url, patchOps, accessToken) => {
    try {
        const response = await axios.patch(url, patchOps, {
            headers: {
                "Content-Type": "application/json-patch+json",
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data;
    }
    catch (error) {
        console.error("An error occurred while patching data:", error);
        throw error;
    }
};
export default patchData;
