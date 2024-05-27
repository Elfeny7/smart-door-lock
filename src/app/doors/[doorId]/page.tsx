import DoorDetailPage from "@/pages/DoorDetailPage";

type Props = {
    params: {
        doorId: any
    },
}

export default function DoorDetail({ params }: Props) {
    return (
        <>
            <DoorDetailPage doorId={params.doorId} />
        </>
    );
}