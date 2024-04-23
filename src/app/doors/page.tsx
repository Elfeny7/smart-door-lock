import { ButtonModalComponent } from "@/components/button";
import CardComponent from "@/components/card";
import { DoorListArray } from "@/components/data/doors";
import SearchComponent from "@/components/search";
import SidebarComponent from "@/components/sidebar";
import Link from "next/link";


export default function Doors() {
  const doorList = new DoorListArray();

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
            {doorList.doorArray.map((door, index) => (
              <CardComponent key={door.id} title={door.doorName} floor={door.floor} name={door.name} doorsId={door.id}
                desc={door.desc} data={index}/>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}