import ButtonComponent from "@/app/components/button";
import DoorUserTableComponent from "@/app/components/door-user-table";
import DropdownComponent from "@/app/components/dropdown";

export default function DoorsDetail() {
    return (
        <>
            <div className="p-8">
                <div className="flex flex-row py-6 gap-8">
                    <ButtonComponent text="←" color="primary" link="../doors" size="back" />
                    <div className="font-bold text-3xl">Pintu Syurga</div>
                </div>
                <div className="flex flex-row gap-8">
                    <div className="flex-2 bg-white rounded-lg px-12 py-12 h-fit w-[25vw]">
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-col pb-4">
                                <h1 className="font-bold text-2xl">Door Details</h1>
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-lg font-bold">Id</h2>
                                <h2>121</h2>
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-lg font-bold">Name</h2>
                                <h2>Pintu Syurga</h2>
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-lg font-bold">Location</h2>
                                <h2>Floor 7</h2>
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-lg font-bold">Class Name</h2>
                                <h2>LPR 8</h2>
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-lg font-bold">Description</h2>
                                <h2>Heaven Floor, be afraid of god, do the right thing to do</h2>
                            </div>
                            <div className="mx-auto my-auto mt-8">
                                <ButtonComponent text="Edit Detail" color="primary" />
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 bg-white rounded-lg min-h-fit px-12 py-12 h-fit">
                        <div className="flex flex-col gap-6">
                            <h1 className="font-bold text-2xl">Users</h1>
                            <div className="flex flex-row gap-4">
                                <ButtonComponent text="New User" color="greenFill" />
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