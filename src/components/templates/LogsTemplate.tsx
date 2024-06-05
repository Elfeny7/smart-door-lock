"use client";

import { Log } from "@/interfaces/Types";
import SearchComponent from "../atoms/search";
import DropdownComponent from "../molecules/dropdown";
import SidebarComponent from "../organisms/sidebar";
import { LogTable } from "../organisms/Table";

type Props = {
    logs: Log[];
}

function LogsTemplate({ logs }: Props) {
    if (!logs) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="flex flex-row">
                <div className="h-screen sticky top-0">
                    <SidebarComponent activePage="logs" />
                </div>
                <div className="p-8 max-w-full">
                    <div className="w-full-auto rounded-lg my-4 py-4">
                        <div className="flex flex-row justify-between items-center pl-4">
                            <h1 className="font-bold text-3xl">Active Log</h1>
                            <div className="flex items-center gap-3">
                                <SearchComponent />
                                <DropdownComponent title="Filter" items={["Berdasarkan hari", "Berdasarkan bulan"]} />
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <LogTable logs={logs} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default LogsTemplate;