import { Card, CustomFlowbiteTheme, Flowbite } from "flowbite-react";
import ButtonComponent, { ButtonCardComponent } from "./button";
import { Door } from "../dummy/model/door";

interface CardProps {
    doorsId: number;
    name: string;
    location: string;
    class_name: string;
    description: string;
}

const customTheme: CustomFlowbiteTheme = {
    card: {
        root: {
            base: "flex rounded-lg border border-gray-200 bg-white"
        }
    }
    
};

export default function CardComponent(props: CardProps) {
    const { doorsId, name, location, class_name, description } = props;
    var linked = "doors/" + doorsId || "error";

    return (
        <Flowbite theme={{ theme: customTheme }}>
            <Card>
                <div className="flex flex-col space-y-3">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {name}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400 text-xl">{location} - {class_name}</p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">{description}</p>
                </div>
                <div className="mt-auto mx-auto">
                    <ButtonCardComponent text="Detail" size="door" color="primary" link={linked} doorsId={doorsId}/>
                </div>
            </Card>
        </Flowbite>

    );
}
