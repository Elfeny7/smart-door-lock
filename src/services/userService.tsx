import axios from "axios";

export const fetchUsers = async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/users`);
        return response.data.data.data;
    } catch (error) {
        console.error('Error fetching user:', error);
    }
};

export const fetchUserById = async (id: any) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/users/${id}`);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching users:', error);
    }

};

export const deleteUser = async (id: number) => {
    try {
        await axios.delete(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/users/${id}`);
    } catch (error) {
        console.error('Error deleting post:', error);
    }
}