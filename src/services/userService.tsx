import { User } from "@/interfaces/Types";
import axios from "axios";

export const fetchUsers = async (): Promise<User[]> => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/users`);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching user:', error);
        return [];
    }
};

export const fetchUserById = async (id: any): Promise<User | null> => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/users/${id}`);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        return null;
    }

};

export const deleteUser = async (id: number): Promise<void> => {
    try {
        await axios.delete(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/users/${id}`);
    } catch (error) {
        console.error('Error deleting post:', error);
    }
}