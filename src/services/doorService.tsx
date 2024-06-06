import { Door } from "@/interfaces/Types";
import axios from "axios";

export const fetchDoors = async (): Promise<Door[]> => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/doors`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching door:', error);
    return [];
  }
};

export const fetchDoorById = async (id: any): Promise<Door | null> => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/doors/${id}`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching doors:', error);
    return null;
  }

};

export const deleteDoor = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/doors/${id}`);
  } catch (error) {
    console.error('Error deleting door:', error);
  }
}