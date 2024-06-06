import { User } from "@/interfaces/Types";
import axios from "axios";

export const fetchUsersByDoorId = async (doorId: any): Promise<User[]> => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/user-door/${doorId}/users`);
        return response.data;
    } catch (error) {
        console.error('Error fetching users by door ID:', error);
        throw error;
    }
};