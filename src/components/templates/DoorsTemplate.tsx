"use client";
import { ButtonModalComponent } from "@/components/atoms/button";
import CardComponent from "@/components/molecules/card";
import SidebarComponent from "@/components/organisms/sidebar";
import { useState } from "react";
import { AddDoorModal } from "../molecules/modal";
import { Door } from "@/interfaces/Types";

type Props = {
  doors: Door[];
  refreshDoors: () => void;
}

export default function DoorsTemplate({ doors, refreshDoors }: Props) {

  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
    refreshDoors();
  }
  if (!doors) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex flex-row">
        <div className="h-screen sticky top-0">
          <SidebarComponent activePage="doors" />
        </div>
        <div className="p-8 max-w-full">
          <div className="w-[78vw] rounded-lg my-4 py-4">
            <div className="flex flex-row justify-between items-center pl-2">
              <h1 className="font-bold text-3xl">Doors Overview</h1>
              <ButtonModalComponent onClick={openModal} text="+ Add New Door" color="greenFill" />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {doors.map((door: any) => (
              <CardComponent key={door.id} doorsId={door.id} name={door.name} location={door.location} class_name={door.class_name}
                description={door.description} />
            ))}
          </div>
        </div>
      </div>
      <AddDoorModal showModal={showModal} setShowModal={setShowModal} onClose={closeModal} />
    </>
  );
}