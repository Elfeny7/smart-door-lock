import { Card, CustomFlowbiteTheme, Flowbite } from "flowbite-react";
import ButtonComponent, { ButtonLinkComponent } from "./button";
import { Door } from "./model/door";

interface CardProps {
    doorsId: number;
    title: string;
    floor: string;
    name: string;
    desc: string;
    data?: any;
}

const customTheme: CustomFlowbiteTheme = {
    card: {
        root: {
            base: "flex rounded-lg border border-gray-200 bg-white"
        }
    }
    
};

export default function CardComponent(props: CardProps) {
    const { title, floor, name, desc, doorsId, data } = props;
    var linked = "doors/" + doorsId || "error";

    return (
        <Flowbite theme={{ theme: customTheme }}>
            <Card>
                <div className="flex flex-col space-y-3">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {title}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400 text-xl">{floor} - {name}</p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">{desc}</p>
                </div>
                <div className="mt-auto mx-auto">
                    <ButtonLinkComponent text="Detail" size="door" color="primary" link={linked} data={data}/>
                </div>
            </Card>
        </Flowbite>

    );
}
