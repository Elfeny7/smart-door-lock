import SidebarComponent from "../components/sidebar";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-row">
        <div className="h-screen ">
          <SidebarComponent activePage="dashboard" />
        </div>
        <div className="p-8">
          <h1 className="font-bold text-3xl my-4">Dashboard</h1>
        </div>
      </div>
    </>
  );
}
