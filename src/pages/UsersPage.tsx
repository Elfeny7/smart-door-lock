"use client";
import UsersTemplate from "@/components/templates/UsersTemplate";
import { User } from "@/interfaces/Types";
import { fetchUsers } from "@/services/userService";
import { useCallback, useEffect, useState } from "react";
import getTokenService from "@/services/authService";
import { useRouter } from "next/navigation";

const UsersPage = () => {
    const token = getTokenService();
    const router = useRouter();
    const [users, setUsers] = useState<User[]>([]);
    const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
    const [searchTerm, setSearchTerm] = useState("");

    const getUsers = useCallback(async () => {
        try {
            const usersData = await fetchUsers();
            setUsers(usersData);
            setFilteredUsers(usersData);
        } catch (error) {
            console.error("Error fetching user details:", error);
        }
    }, []);

    useEffect(() => {
        if (!token) {
            router.push('/login');
        }
        getUsers();
    }, [getUsers]);

    useEffect(() => {
        if (searchTerm === "") {
            setFilteredUsers(users);
        } else {
            const filtered = users!.filter(user =>
                user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.phone.includes(searchTerm)
            );
            setFilteredUsers(filtered);
        }
    }, [searchTerm, users]);

    return (
        <UsersTemplate users={filteredUsers} refreshUsers={getUsers} onSearch={setSearchTerm} token={token} />
    );
}

export default UsersPage;