"use client";
import { ButtonModalComponent } from "@/components/atoms/button";
import CardComponent from "@/components/molecules/card";
import SearchComponent from "@/components/atoms/search";
import SidebarComponent from "@/components/organisms/sidebar"; import Link from "next/link";
import { useState } from "react";
import { AddDoorModal } from "../molecules/modal";

type Props = {
  doors: any;
}

export default function DoorsTemplate({ doors }: Props) {

  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className="flex flex-row">
        <div className="h-screen sticky top-0">
          <SidebarComponent activePage="doors" />
        </div>
        <div className="p-8">
          <h1 className="font-bold text-3xl my-4">Doors Overview</h1>
          <div className="w-[78vw] bg-white rounded-lg my-4 py-4">
            <div className="flex flex-row pl-4 justify-between">
              <SearchComponent />
              <div className="mr-4">
                <ButtonModalComponent onClick={openModal} text="+ Add New Door" color="greenFill" />
                <AddDoorModal showModal={showModal} setShowModal={setShowModal} />
              </div>
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
    </>
  );
}