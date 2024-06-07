import axios from "axios";

export const fetchTotalUsers = async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/total-users`);
        return response.data.totalUsers;
    } catch (error) {
        console.error("Error fetching total users:", error);
        throw error;
    }
};

export const fetchUserAccessedDoors = async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/user-accessed-doors`);
        return response.data.userAccessedDoors;
    } catch (error) {
        console.error("Error fetching user accessed doors:", error);
        throw error;
    }
};

export const fetchTotalDoors = async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/total-doors`);
        return response.data.totalDoors;
    } catch (error) {
        console.error("Error fetching total doors:", error);
        throw error;
    }
};

export const fetchNewUserToday = async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/new-users-today`);
        return response.data.newUserToday;
    } catch (error) {
        console.error("Error fetching new users today:", error);
        throw error;
    }
};
