import SidebarComponent from "@/components/sidebar";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-row">
        <div className="h-screen ">
          <SidebarComponent activePage="dashboard" />
        </div>
        <div className="p-8">
          <div className="flex flex-col">
            <h1 className="font-bold text-3xl my-4">Dashboard</h1>
            <div className="flex flex-row gap-8">
              <div className="flex-1 bg-white">
                1
              </div>
              <div className="flex-1 bg-blue-500">
                2
              </div>
              <div className="flex-1 bg-red-500">
                3
              </div>
              <div className="flex-1 bg-green-500">
                4
              </div>
            </div>
            <div className="flex flex-row gap-8">
              <div className="flex-1 bg-amber-500">
                1
              </div>
              <div className="flex-2 bg-purple-400">
                2
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
