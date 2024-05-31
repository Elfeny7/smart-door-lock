import axios from "axios";

export const fetchDoors = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/doors`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching door:', error);
  }
};

export const fetchDoorById = async (id: any) => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/doors/${id}`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching doors:', error);
  }

};

export const deleteDoor = async (id: number) => {
  try {
    await axios.delete(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/doors/${id}`);
  } catch (error) {
    console.error('Error deleting door:', error);
  }
}