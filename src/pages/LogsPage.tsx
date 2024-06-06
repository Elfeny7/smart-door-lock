"use client";
import { useCallback, useEffect, useState } from "react";
import { fetchLogs } from "@/services/logService";
import LogsTemplate from "@/components/templates/LogsTemplate";
import { Log } from "@/interfaces/Types";


export const LogsPage = () => {
    const [logs, setLogs] = useState<Log[]>([]);

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
        const interval = setInterval(() => {
            getLogs();
        }, 10000);

        return () => clearInterval(interval);
    }, [getLogs]);

    return (
        <LogsTemplate logs={logs} />
    );
}