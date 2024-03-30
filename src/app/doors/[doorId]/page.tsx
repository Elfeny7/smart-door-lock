import ButtonComponent from "@/app/components/button";
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
                    <div className="flex-2 bg-white rounded-lg min-h-fit px-12 py-12 h-[50vh] w-fit">
                        <h1 className="font-bold text-2xl">Door Details</h1>
                    </div>
                    <div className="flex-1 bg-white rounded-lg min-h-fit px-12 py-12 h-fit">
                        <div className="flex flex-col gap-6">
                            <h1 className="font-bold text-2xl">Users</h1>
                            <div className="flex flex-row gap-4">
                                <ButtonComponent text="New User" color="greenFill" />
                                <DropdownComponent />
                                <DropdownComponent />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}