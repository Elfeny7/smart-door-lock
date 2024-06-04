"use client";
import { useCallback, useEffect, useState } from "react";
import { fetchLogs } from "@/services/logService";
import LogsTemplate from "@/components/templates/LogsTemplate";


export const LogsPage = () => {
    const [logs, setLogs] = useState(null);

    const getLogs = useCallback(async () => {
        try {
            const logsData = await fetchLogs();
            setLogs(logsData);
        } catch (error) {
            console.error("Error fetching logs details:", error);
        }
    }, []);
    useEffect(() => {
        getLogs();
    }, [getLogs]);

    return (
        <LogsTemplate logs={logs} refreshLogs={getLogs} />
    );
}