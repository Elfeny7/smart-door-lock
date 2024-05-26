import axios from "axios";

export const fetchDoors = async () => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/doors`);
  return response.data.data.data;
};

export const fetchDoorById = async (id:any) => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/doors/${id}`);
  return response.data.data;
};