import DropdownComponent from "@/components/dropdown";
import LogListComponent from "@/components/loglist";
import SearchComponent from "@/components/search";
import SidebarComponent from "@/components/sidebar";

export default function Logs() {
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
                        <LogListComponent />
                    </div>
                </div>
            </div>
        </>
    )
}