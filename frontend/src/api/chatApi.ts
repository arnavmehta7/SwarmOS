import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL + "/chat";

export const sendMessage = async (message: string) => {
  try {
    const response = await axios.post(API_URL, { message });
    return response.data.response;
  } catch (error) {
    console.error("Error:", error);
    return "Error processing request.";
  }
};