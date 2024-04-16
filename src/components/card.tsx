import { Card } from "flowbite-react";
import ButtonComponent from "./button";
import { HiOutlineArrowCircleRight } from "react-icons/hi";

interface CardProps {
    doorsId: number;
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
