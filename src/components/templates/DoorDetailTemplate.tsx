"use client";
import ButtonComponent, { ButtonModalComponent } from "@/components/atoms/button";
import DropdownComponent from "@/components/molecules/dropdown";
import EditDetailDoorModal, { AddUserDoorModal, DeleteDoorModal, DeleteUserDoorModal } from "@/components/molecules/modal";
import { useState } from "react";
import UserDoorTableComponent from "../organisms/UserDoorTable";


type Door = {
    id: number;
    name: string;
    location: string;
    class_name: string;
    description: string;
};

type Props = {
    door: Door | null;
    userDoor: any;
    users: any;
    refreshDoorDetails: () => void;
    refreshUserDoor: () => void;
};

export default function DoorDetailTemplate({ door, users, userDoor, refreshDoorDetails, refreshUserDoor }: Props) {

    const [showModal, setShowModal] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [showModalAdd, setShowModalAdd] = useState(false);
    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
        refreshDoorDetails();
    };

    const openModalDelete = () => {
        setShowModalDelete(true);
    };
    const closeModalDelete = () => {
        setShowModalDelete(false);
    };

    const openModalAdd = () => {
        setShowModalAdd(true);
    };
    const closeModalAdd = () => {
        setShowModalAdd(false);
        refreshUserDoor();
    };
    
    const openModalDeleteUser = () => {
        setShowModalDeleteUser(true);
    };
    const closeModalDeleteUser = () => {
        setShowModalDeleteUser(false);
        refreshUserDoor();
    };

    if (!door || !userDoor) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="p-8">
                <div className="flex flex-row py-6 gap-8">
                    <ButtonComponent text="←" color="primary" link="../doors" size="back" />
                    <div className="font-bold text-3xl">{door!.name}</div>
                </div>
                <div className="flex flex-row gap-8">
                    <div className="flex-2 bg-white rounded-lg px-12 py-12 h-fit w-[25vw] sticky top-8">
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col pb-4">
                                <h1 className="font-bold text-2xl">Door Details</h1>
                            </div>
                            <hr />
                            <div className="flex flex-col">
                                <h2 className="text-lg font-bold">Id</h2>
                                <h2>{door!.id}</h2>
                            </div>
                            <hr />
                            <div className="flex flex-col">
                                <h2 className="text-lg font-bold">Name</h2>
                                <h2>{door!.name}</h2>
                            </div>
                            <hr />
                            <div className="flex flex-col">
                                <h2 className="text-lg font-bold">Location</h2>
                                <h2>{door!.location}</h2>
                            </div>
                            <hr />
                            <div className="flex flex-col">
                                <h2 className="text-lg font-bold">Class Name</h2>
                                <h2>{door!.class_name}</h2>
                            </div>
                            <hr />
                            <div className="flex flex-col">
                                <h2 className="text-lg font-bold">Description</h2>
                                <h2>{door!.description}</h2>
                            </div>
                            <hr />
                            <div className="flex flex-row my-auto gap-1 mx-auto mt-4">
                                <ButtonModalComponent onClick={openModal} text="Edit Door" color="primary" door={door!} />
                                <ButtonModalComponent onClick={openModalDelete} text="Delete Door" color="redFill" door={door!} />
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 bg-white rounded-lg min-h-fit px-12 py-12 h-fit">
                        <div className="flex flex-col gap-6">
                            <h1 className="font-bold text-2xl">Users</h1>
                            <div className="flex flex-row gap-2">
                                <ButtonModalComponent onClick={openModalAdd} text="Add User to Door" color="greenFill" />
                                <ButtonModalComponent onClick={openModalDeleteUser} text="Delete User from Door" color="redFill" />
                                <DropdownComponent title="Filter" items={["Only Mahasiswa", "Only Dosen"]} />
                            </div>
                            <UserDoorTableComponent userDoor={userDoor} />
                        </div>
                    </div>
                </div>
            </div>
            <EditDetailDoorModal showModal={showModal} setShowModal={setShowModal} door={door!} onClose={closeModal} />
            <DeleteDoorModal showModalDelete={showModalDelete} setShowModalDelete={setShowModalDelete} door={door!} onClose={closeModalDelete} />
            <AddUserDoorModal showModalAdd={showModalAdd} setShowModalAdd={setShowModalAdd} users={users!} door={door!} userDoor={userDoor} onClose={closeModalAdd} />
            <DeleteUserDoorModal showModalDeleteUser={showModalDeleteUser} setShowModalDeleteUser={setShowModalDeleteUser} users={users!} door={door!} userDoor={userDoor} onClose={closeModalDeleteUser} />
        </>
    );
}