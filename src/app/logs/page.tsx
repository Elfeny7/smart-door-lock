import SidebarComponent from "../components/sidebar";

export default function Logs() {
    return (
        <>
            <div className="flex flex-row">
                <div className="h-screen ">
                    <SidebarComponent activePage="logs" />
                </div>
                <div className="p-8">
                    <h1 className="font-bold text-3xl my-4">Log Activity</h1>
                </div>
            </div>
        </>
    )
}