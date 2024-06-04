import axios from "axios";

export const fetchLogs = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/logs`);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching log:', error);
    }
  };