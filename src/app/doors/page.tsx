import { ButtonModalComponent } from "@/components/button";
import CardComponent from "@/components/card";
import { DoorListArray } from "@/dummy/data/doors";
import SearchComponent from "@/components/search";
import SidebarComponent from "@/components/sidebar"; import Link from "next/link";
import axios from "axios";
import { fetchDoors } from "@/services/doorService";

export default async function Doors() {
  const doors = await fetchDoors();

  return (
    <>
      <div className="flex flex-row">
        <div className="h-screen sticky top-0">
          <SidebarComponent activePage="doors" />
        </div>
        <div className="p-8">
          <h1 className="font-bold text-3xl my-4">Doors Overview</h1>
          <div className="w-full bg-white rounded-lg my-4 py-4">
            <div className="flex flex-row pl-4 justify-between">
              <SearchComponent />
              <div className="mr-4">
                <ButtonModalComponent text="+ Add New Door" color="greenFill" whatFor="Add Door" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {doors.map((door:any) => (
              <CardComponent key={door.id} doorsId={door.id} name={door.name} location={door.location} class_name={door.class_name}
                description={door.description}/>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}