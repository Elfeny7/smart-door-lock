"use client";
import { User, Door } from "@/interfaces/Types";
import { fetchDoorById } from "@/services/doorService";
import DoorDetailTemplate from "../components/templates/DoorDetailTemplate";
import { useCallback, useEffect, useState } from "react";
import { fetchUsersByDoorId } from "@/services/userDoorService";
import { fetchUsers } from "@/services/userService";

type Props = {
    doorId: any
}

const DoorDetailPage = ({ doorId }: Props) => {
    const [door, setDoor] = useState<Door | null>(null);
    const [users, setUsers] = useState<User[]>([]);
    const [userDoor, setUserDoor] = useState<User[]>([]);

    const getDoorDetails = useCallback(async () => {
        try {
            const doorData = await fetchDoorById(doorId);
            const usersData = await fetchUsers();
            setDoor(doorData);
            setUsers(usersData);
        } catch (error) {
            console.error("Error fetching door details:", error);
        }
    }, [doorId]);

    const getUserByDoor = useCallback(async () => {
        try {
            const userByDoorData = await fetchUsersByDoorId(doorId);
            setUserDoor(userByDoorData);
        } catch (error) {
            console.error("Error fetching door details:", error);
        }
    }, [doorId]);

    useEffect(() => {
        getDoorDetails();
        getUserByDoor();
    }, [getDoorDetails, getUserByDoor]);

    return (
        <DoorDetailTemplate door={door} users={users} refreshDoorDetails={getDoorDetails} refreshUserDoor={getUserByDoor} userDoor={userDoor} />
    );
};

export default DoorDetailPage;