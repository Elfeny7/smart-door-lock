import ButtonComponent from "@/app/components/button";

export default function DoorsDetail() {
    return (
        <>
            <div className="p-8">
                <div className="flex flex-row py-6 gap-8">
                    <div className="bg-blue-500 w-10 h-10"></div>
                    <div className="font-bold text-3xl">Pintu Syurga</div>
                </div>
                <div className="flex flex-row gap-8">
                    <div className="flex-1 bg-white rounded-lg min-h-fit px-12 py-12 h-[50vh]">
                        <h1 className="font-bold text-2xl">Door Details</h1>
                    </div>
                    <div className="flex-1 bg-white rounded-lg min-h-fit px-12 py-12 h-fit">
                        <div className="flex flex-col gap-6">
                            <h1 className="font-bold text-2xl">Users</h1>
                            <div className="flex flex-row gap-10">
                                <ButtonComponent text="New User" color="greenFill" />
                                <h1>dropdown 1</h1>
                                <h1>dropdown 2</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}