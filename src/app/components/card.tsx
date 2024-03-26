
import { Button, Card } from "flowbite-react";
import ButtonComponent from "./button";

export default function CardComponent() {
    return (
        <Card className="w-80">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Door 1
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                Floor 7 - LPR 8
            </p>
            <Button className="bg-blue-500 text-white font-bold">
                Edit
            </Button>
        </Card>
    );
}
