import { Card } from "flowbite-react";
import ButtonComponent from "./button";
import { HiOutlineArrowCircleRight } from "react-icons/hi";

interface CardProps {
    doorsId?: string;
    title: string;
    floor: string;
    name: string;
    desc: string;
}

export default function CardComponent(props: CardProps) {
    const { title, floor, name, desc, doorsId } = props;
    var linked = "doors/" + doorsId || "error";

    return (
        <Card>
            <div className="flex flex-col space-y-3">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 text-xl">{floor} - {name}</p>
                <p className="font-normal text-gray-700 dark:text-gray-400">{desc}</p>
            </div>
            <div className="mt-auto mx-auto">
                <ButtonComponent text="Detail" size="door" color="primary" link={linked} />
            </div>
        </Card>
    );
}

export function DashboardPage() {
    return (
         <div className="container mx-auto mt-4">
            <div className="grid grid-cols-1 md:grid-cols-10 gap-4">
                {/* Kartu pertama */}
                <div className="md:col-span-4">
                    <Card>
                        <div className="card-header">
                            <h2 className="text-lg font-bold">Jumlah User</h2>
                        </div>
                        <div className="card-body flex justify-between items-center">
                            <div>
                                <p className="text-gray-700">1000</p>
                            </div>
                            <div>
                                <button className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300" >
                                    <HiOutlineArrowCircleRight className="h-8 w-8" />
                                </button>
                            </div>
                        </div>
                    </Card>
                </div>
                {/* Kartu kedua */}
                <div className="md:col-span-6">
                    <Card>
                        <div className="card-header">
                            <h2 className="text-lg font-semibold">Total Pintu</h2>
                        </div>
                        <div className="card-body flex justify-between items-center">
                            <div><p className="text-gray-700">500</p></div>
                            <div>
                                <button className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300" >
                                    <HiOutlineArrowCircleRight className="h-8 w-8" />
                                </button>
                            </div>
                        </div>
                        
                    </Card>
                </div>
                <div className="md:col-span-10">
    <Card className="h-full">
        <div className="card-header">
            <h2 className="text-lg font-semibold">Logs</h2>
        </div>
        <div className="card-body flex justify-between items-center">
            <div><p className="text-gray-700">Daftar orang yang masuk</p></div>
            <div>
                <button className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300" >
                    <HiOutlineArrowCircleRight className="h-8 w-8" />
                </button>
            </div>
        </div>
    </Card>
</div>


            </div>
        </div>
    );
}
