import SidebarComponent from "../components/sidebar";

export default function Logs() {
    return (
        <>
            <div className="flex flex-row">
                <div className="h-screen">
                    <SidebarComponent activePage="logs" />
                </div>
            </div>
        </>
    )
}