"use client";
import { fetchDoorById } from "@/services/doorService";
import DoorDetailTemplate from "../components/templates/DoorDetailTemplate";
import { useCallback, useEffect, useState } from "react";

type Props = {
    doorId: any
}

const DoorDetailPage = ({ doorId }: Props) => {
    const [door, setDoor] =  useState(null);

    const getDoorDetails = useCallback(async () => {
        try {
            const doorData = await fetchDoorById(doorId);
            setDoor(doorData);
        } catch (error) {
            console.error("Error fetching door details:", error);
        }
    }, [doorId]);

    useEffect(() => {
        getDoorDetails();
    }, [getDoorDetails]);

    return (
        <DoorDetailTemplate door={door} refreshDoorDetails={getDoorDetails} />
    );
};

export default DoorDetailPage;