"use client";
import ChartLine from "@/components/atoms/charts";
import SidebarComponent from "@/components/organisms/sidebar";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-row">
        <div className="h-screen sticky top-0">
          <SidebarComponent activePage="dashboard"/>
        </div>
        <div className="p-8 flex-1">
          <div className="flex flex-col gap-8">
            <h1 className="font-bold text-3xl my-4">Dashboard</h1>
            <div className="grid grid-cols-4 gap-6">
              <div className="flex flex-col gap-2 bg-white rounded-md p-6">
                <div className="">User accessed doors</div>
                <div className="font-extrabold text-2xl py-2">20</div>
                <div className="">Today</div>
              </div>
              <div className="flex flex-col gap-2 bg-white rounded-md p-6">
                <div className="">Total users</div>
                <div className="font-extrabold text-2xl py-2">5</div>
                <div className="">Users</div>
              </div>
              <div className="flex flex-col gap-2 bg-white rounded-md p-6">
                <div className="">Total doors</div>
                <div className="font-extrabold text-2xl py-2">2</div>
                <div className="">Doors</div>
              </div>
              <div className="flex flex-col gap-2 bg-white rounded-md p-6">
                <div className="">New user</div>
                <div className="font-extrabold text-2xl py-2">0</div>
                <div className="">Today</div>
              </div>
            </div>
            <div className="bg-white rounded-md h-[80vh]">
              <div className="p-10">
                <ChartLine />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
