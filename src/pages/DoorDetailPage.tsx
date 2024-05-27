import { fetchDoorById } from "@/services/doorService";
import DoorDetailTemplate from "../components/templates/DoorDetailTemplate";

type Props = {
    doorId: any
}

const DoorDetailPage = async ({ doorId }: Props) => {
    const door = await fetchDoorById(doorId);
    return (
        <DoorDetailTemplate door={door} />
    );
};

export default DoorDetailPage;