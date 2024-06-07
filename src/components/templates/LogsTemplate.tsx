"use client";

import { Log } from "@/interfaces/Types";
import SidebarComponent from "../organisms/sidebar";
import { LogTable } from "../organisms/Table";
import { ButtonModalComponent } from "../atoms/button";
import { useState } from "react";
import { SearchLogModal } from "../molecules/modal";

type Props = {
    logs: Log[];
    filteredLogs: Log[];
    onSearch: (term: string) => void;
    token?: string;
}

function LogsTemplate({ logs, filteredLogs, onSearch, token }: Props) {
    const [showModal, setShowModal] = useState(false);
    const openModal = () => { setShowModal(true); };
    const closeModal = () => { setShowModal(false); };

    if (!logs) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="flex flex-row">
                <div className="h-screen sticky top-0">
                    <SidebarComponent activePage="logs" token={token} />
                </div>
                <div className="p-8 max-w-full">
                    <div className="w-full-auto rounded-lg my-4 py-4">
                        <div className="flex flex-row justify-between items-center pl-4">
                            <h1 className="font-bold text-3xl">Active Log</h1>
                            <ButtonModalComponent onClick={openModal} text="Search Log" color="primary" />
                        </div>
                    </div>
                    <div className="w-full">
                        <LogTable logs={logs} />
                    </div>
                </div>
            </div>
            <SearchLogModal filteredLogs={filteredLogs} showSearchLogModal={showModal} setShowSearchLogModal={closeModal} onSearch={onSearch} />
        </>
    );
}

export default LogsTemplate;