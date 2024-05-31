"use client";
import { fetchDoorById } from "@/services/doorService";
import DoorDetailTemplate from "../components/templates/DoorDetailTemplate";
import { useCallback, useEffect, useState } from "react";
import { fetchUsersByDoorId } from "@/services/userDoorService";

type Props = {
    doorId: any
}

const DoorDetailPage = ({ doorId }: Props) => {
    const [door, setDoor] = useState(null);
    const [userDoor, setUserDoor] = useState(null);

    const getDoorDetails = useCallback(async () => {
        try {
            const doorData = await fetchDoorById(doorId);
            setDoor(doorData);
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
        <DoorDetailTemplate door={door} refreshDoorDetails={getDoorDetails} userDoor={userDoor} />
    );
};

export default DoorDetailPage;