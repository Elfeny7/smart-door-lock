"use client";
import UsersTemplate from "@/components/templates/UsersTemplate";
import { fetchUsers } from "@/services/userService";
import { useCallback, useEffect, useState } from "react";

const UsersPage = () => {
    const [users, setUsers] = useState(null);

    const getUsers = useCallback(async () => {
        try {
            const usersData = await fetchUsers();
            setUsers(usersData);
        } catch (error) {
            console.error("Error fetching user details:", error);
        }
    }, []);
    
    useEffect(() => {
        getUsers();
    }, [getUsers]);

    return (
        <UsersTemplate users={users} refreshUsers={getUsers}/>
    );
}

export default UsersPage;