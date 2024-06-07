"use client";
import { useEffect, useState } from "react";
import ChartLine from "@/components/atoms/charts";
import SidebarComponent from "@/components/organisms/sidebar";
import { fetchTotalUsers, fetchUserAccessedDoors, fetchTotalDoors, fetchNewUserToday } from "@/services/dashboardService";

type DashboardProps = {
    token?: string;
}

export default function DashboardTemplate({ token }: DashboardProps) {
    const [totalUsers, setTotalUsers] = useState(0);
    const [userAccessedDoors, setUserAccessedDoors] = useState(0);
    const [totalDoors, setTotalDoors] = useState(0);
    const [newUserToday, setNewUserToday] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const totalDoors = await fetchTotalDoors();
                setTotalDoors(totalDoors);

                const totalUsers = await fetchTotalUsers();
                setTotalUsers(totalUsers);

                const newUserToday = await fetchNewUserToday();
                setNewUserToday(newUserToday);

                const userAccessedDoors = await fetchUserAccessedDoors();
                setUserAccessedDoors(userAccessedDoors);

            } catch (error) {
                console.error("Error fetching dashboard data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="flex flex-row">
                <div className="h-screen sticky top-0">
                    <SidebarComponent activePage="dashboard" token={token} />
                </div>
                <div className="p-8 flex-1">
                    <div className="flex flex-col gap-8">
                        <h1 className="font-bold text-3xl my-4">Dashboard</h1>
                        <div className="grid grid-cols-4 gap-6">
                            <div className="flex flex-col gap-2 bg-white rounded-md p-6">
                                <div className="">User accessed doors</div>
                                <div className="font-extrabold text-2xl py-2">{userAccessedDoors}</div>
                                <div className="">Today</div>
                            </div>
                            <div className="flex flex-col gap-2 bg-white rounded-md p-6">
                                <div className="">Total users</div>
                                <div className="font-extrabold text-2xl py-2">{totalUsers}</div>
                                <div className="">Users</div>
                            </div>
                            <div className="flex flex-col gap-2 bg-white rounded-md p-6">
                                <div className="">Total doors</div>
                                <div className="font-extrabold text-2xl py-2">{totalDoors}</div>
                                <div className="">Doors</div>
                            </div>
                            <div className="flex flex-col gap-2 bg-white rounded-md p-6">
                                <div className="">New user</div>
                                <div className="font-extrabold text-2xl py-2">{newUserToday}</div>
                                <div className="">Today</div>
                            </div>
                        </div>
                        <div className="bg-white rounded-md h-[80vh]">
                            <div className="p-10">
                                {/* <ChartLine /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
