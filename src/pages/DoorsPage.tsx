"use client";
import DoorsTemplate from "@/components/templates/DoorsTemplate";
import { fetchDoors } from "@/services/doorService";
import { useCallback, useEffect, useState } from "react";

const DoorsPage = () => {
    const [doors, setDoors] = useState(null);

    const getDoors = useCallback(async () => {
        try {
            const doorsData = await fetchDoors();
            setDoors(doorsData);
        } catch (error) {
            console.error("Error fetching door details:", error);
        }
    }, []);
    useEffect(() => {
        getDoors();
    }, [getDoors]);

    return (
        <DoorsTemplate doors={doors} refreshDoors={getDoors}/>
    );
}

export default DoorsPage;