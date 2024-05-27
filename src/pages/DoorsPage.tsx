import DoorsTemplate from "@/components/templates/DoorsTemplate";
import { fetchDoors } from "@/services/doorService";

const DoorsPage = async () => {
    const doors = await fetchDoors();
    return (
        <>
            <DoorsTemplate doors={doors}/>
        </>
    );
}

export default DoorsPage;