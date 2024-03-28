import Link from "next/link";
import ButtonComponent from "../components/button";
import CardComponent from "../components/card";
import SearchComponent from "../components/search";
import SidebarComponent from "../components/sidebar";

export default function Doors() {
  return (
    <>
      <div className="flex flex-row">
        <div className="h-screen">
          <SidebarComponent activePage="doors" />
        </div>
        <div className="p-8">
          <h1 className="font-bold text-3xl my-4">Doors Overview</h1>
          <div className="w-full bg-white rounded-lg my-4 py-4">
            <div className="flex flex-row pl-4 justify-between">
              <SearchComponent />
              <div className="mr-4">
                <ButtonComponent text="+ Add New Door" color="greenFill" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <CardComponent title="Pintu Neraka" floor="Floor 8" name="LPR 8" doorsId="111"
              desc="Floor that directly send you to the hellasdsadsadasd asdasdsad" />
            <CardComponent title="Pintu Surga" floor="Floor 9" name="LPR 7" doorsId="121"
              desc="Heaven Floor, be afraid of god, do the right thing to doa asdasd asdsadsadsad" />
            <CardComponent title="Pintu Surga" floor="Floor 9" name="LPR 7" doorsId="131"
              desc="Heaven Floor, be afraid of god, do the right thing to do" />
            <CardComponent title="Pintu Surga" floor="Floor 9" name="LPR 7"
              desc="Heaven Floor, be afraid of god, do the right thing to do" />
          </div>
        </div>
      </div>
    </>
  );
}