import SidebarComponent from "../components/sidebar";
import CardComponent, { DashboardPage } from "../components/card";

export default function Dashboard() {
  return (
    <div className="flex flex-row">
      <div className="h-screen "> {/* Menentukan lebar SidebarComponent */}
        <SidebarComponent activePage="dashboard"/>
      </div>
      <div className="w-full p-2"> {/* Menentukan lebar dan memberikan padding pada DashboardPage */}
        <DashboardPage/> 
      </div>
    </div>
  );
}
