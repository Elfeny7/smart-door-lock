"use client";
import { useCallback, useEffect, useState } from "react";
import { fetchLogs } from "@/services/logService";
import LogsTemplate from "@/components/templates/LogsTemplate";
import { Log } from "@/interfaces/Types";


export const LogsPage = () => {
    const [logs, setLogs] = useState<Log[]>([]);
    const [filteredLogs, setFilteredLogs] = useState<Log[]>([]);
    const [searchTerm, setSearchTerm] = useState("");

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

    useEffect(() => {
        if (searchTerm === "") {
            setFilteredLogs([]);
        } else {
            const filtered = logs!.filter(log =>
                log.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                log.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                log.class_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                log.date_time.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredLogs(filtered);
        }
    }, [searchTerm, logs]);

    return (
        <LogsTemplate logs={logs} filteredLogs={filteredLogs} onSearch={setSearchTerm} />
    );
}