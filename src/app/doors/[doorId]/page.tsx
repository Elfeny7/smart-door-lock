import ButtonComponent, { ButtonModalComponent } from "@/components/button";
import DoorUserTableComponent from "@/components/door-user-table";
import DropdownComponent from "@/components/dropdown";
import { fetchDoorById } from "@/services/doorService";
import { useSearchParams } from "next/navigation";

type Props = {
    params: {
        doorId: any
    }
}

export default async function DoorsDetail({params}:Props) {
    // const searchParams = useSearchParams();
    // var doorsId = searchParams.get('data')
    const door = await fetchDoorById(params.doorId);

    return (
        <>
            <div className="p-8">
                <div className="flex flex-row py-6 gap-8">
                    <ButtonComponent text="←" color="primary" link="../doors" size="back" />
                    <div className="font-bold text-3xl">{door.name}</div>
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
                                <h2>{door.id}</h2>
                            </div>
                            <hr />
                            <div className="flex flex-col">
                                <h2 className="text-lg font-bold">Name</h2>
                                <h2>{door.name}</h2>
                            </div>
                            <hr />
                            <div className="flex flex-col">
                                <h2 className="text-lg font-bold">Location</h2>
                                <h2>{door.location}</h2>
                            </div>
                            <hr />
                            <div className="flex flex-col">
                                <h2 className="text-lg font-bold">Class Name</h2>
                                <h2>{door.class_name}</h2>
                            </div>
                            <hr />
                            <div className="flex flex-col">
                                <h2 className="text-lg font-bold">Description</h2>
                                <h2>{door.description}</h2>
                            </div>
                            <hr />
                            <div className="flex flex-row my-auto gap-1 mx-auto mt-4">
                                <ButtonModalComponent text="Edit Detail" color="primary" whatFor="Edit Doors Detail" />
                                <ButtonModalComponent text="Delete Door" color="redFill" whatFor="Delete" />
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 bg-white rounded-lg min-h-fit px-12 py-12 h-fit">
                        <div className="flex flex-col gap-6">
                            <h1 className="font-bold text-2xl">Users</h1>
                            <div className="flex flex-row gap-1">
                                <ButtonModalComponent text="Add User" color="greenFill" whatFor="Add User Detail" />
                                <DropdownComponent title="Filter" items={["Only Mahasiswa", "Only Dosen"]} />
                            </div>
                            <DoorUserTableComponent />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}