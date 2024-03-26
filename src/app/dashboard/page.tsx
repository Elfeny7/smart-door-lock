import SidebarComponent from "../components/sidebar";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-row">
        <div className="h-screen">
          <SidebarComponent activePage="dashboard"/>
        </div>
      </div>
    </>
  );
}