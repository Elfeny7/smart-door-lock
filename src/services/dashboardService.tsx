import axios from "axios";

const BASE_URL = 'http://localhost:8000/api'; 

export const fetchTotalUsers = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/total-users`);
        return response.data.totalUsers;
    } catch (error) {
        console.error("Error fetching total users:", error);
        throw error;
    }
};

export const fetchUserAccessedDoors = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/user-accessed-doors`);
        return response.data.userAccessedDoors;
    } catch (error) {
        console.error("Error fetching user accessed doors:", error);
        throw error;
    }
};

export const fetchTotalDoors = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/total-doors`);
        return response.data.totalDoors;
    } catch (error) {
        console.error("Error fetching total doors:", error);
        throw error;
    }
};

export const fetchNewUserToday = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/new-users-today`);
        return response.data.newUserToday;
    } catch (error) {
        console.error("Error fetching new users today:", error);
        throw error;
    }
};
