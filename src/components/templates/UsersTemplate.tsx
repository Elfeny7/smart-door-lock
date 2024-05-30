"use client";
import { ButtonModalComponent } from "@/components/atoms/button";
import SearchComponent from "@/components/atoms/search";
import SidebarComponent from "@/components/organisms/sidebar";
import { useState } from "react";
import { AddUserModal } from "../molecules/modal";
import UserTable from "../organisms/UserTable";

type Props = {
    users: any;
    refreshUsers: () => void;
}

export default function UsersTemplate({ users, refreshUsers }: Props) {

    const [showModal, setShowModal] = useState(false);
    const openModal = () => { setShowModal(true); };
    const closeModal = () => {
        setShowModal(false);
        refreshUsers();
    }

    if (!users) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="flex flex-row">
                <div className="h-screen sticky top-0">
                    <SidebarComponent activePage="users" />
                </div>
                <div className="p-8">
                    <h1 className="font-bold text-3xl my-4">Doors Overview</h1>
                    <div className="w-[78vw] bg-white rounded-lg my-4 py-4">
                        <div className="flex flex-row pl-4 justify-between">
                            <SearchComponent />
                            <div className="mr-4">
                                <ButtonModalComponent onClick={openModal} text="+ Add New User" color="greenFill" />
                                <AddUserModal showModal={showModal} setShowModal={setShowModal} onClose={closeModal} />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        <UserTable users={users} refreshUsers={refreshUsers}/>
                    </div>
                </div>
            </div>
        </>
    );
}