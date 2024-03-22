
'use client';

import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';

export default function SidebarComponent() {
    return (
        <Component />
    );
}

function Component() {
    return (
        <Sidebar aria-label="Sidebar with logo branding example">
            <h1 className='text-2xl font-bold'>HELLODOOR</h1>
            <hr className='my-4' />
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="#" icon={HiChartPie}>
                        Dashboard
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiUser}>
                        User
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiInbox}>
                        Pintu
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiViewBoards}>
                        Log
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
}
