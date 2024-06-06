'use client';
import axios from 'axios';
import { Sidebar } from 'flowbite-react';
import Cookies from 'js-cookie';
import { useRouter } from "next/navigation";

interface SidebarProps {
    activePage?: string;
    token?: string;
}

export default function SidebarComponent({ activePage, token }: SidebarProps) {
    const router = useRouter();

    const active: string = "hover:bg-blue-500 bg-blue-500 text-white font-bold";
    const nonActive: string = "hover:bg-blue-300 font-bold";
    const logout: string = "hover:bg-red-700 bg-red-600 text-white font-bold";
    var dashboardStyle: string = nonActive;
    var usersStyle: string = nonActive;
    var doorsStyle: string = nonActive;
    var logsStyle: string = nonActive;

    if (activePage == "dashboard") {
        dashboardStyle = active;
    } else if (activePage == "users") {
        usersStyle = active;
    } else if (activePage == "doors") {
        doorsStyle = active;
    } else if (activePage == "logs") {
        logsStyle = active;
    }

    const logoutHanlder = async () => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        await axios.post(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/logout`)
            .then(() => {
                Cookies.remove("token");
                router.push('/login');
            });
    };

    return (
        <Sidebar aria-label="Sidebar with logo branding example" className='shadow-lg'>
            <h1 className='text-2xl font-bold mx-4'>HELLODOOR</h1>
            <hr className='my-4' />
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <div className='flex flex-col gap-96'>
                        <div>
                            <Sidebar.Item className={dashboardStyle} href="dashboard" >
                                Dashboard
                            </Sidebar.Item>
                            <Sidebar.Item className={usersStyle} href="users" >
                                User
                            </Sidebar.Item>
                            <Sidebar.Item className={doorsStyle} href="doors">
                                Pintu
                            </Sidebar.Item>
                            <Sidebar.Item className={logsStyle} href="logs">
                                Log
                            </Sidebar.Item>
                        </div>
                        <div>
                            <Sidebar.Item className={logout} onClick={logoutHanlder}>
                                Log Out
                            </Sidebar.Item>
                        </div>
                    </div>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
}
