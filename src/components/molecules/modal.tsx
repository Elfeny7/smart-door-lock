"use client";
import { Button, Label, Modal, TextInput, Textarea } from "flowbite-react";
import { useState } from "react";
import { ButtonFormComponent } from "../atoms/button";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import axios from "axios";
import { deleteDoor } from "@/services/doorService";

type DoorModalProps = {
    door: Door;
    showModal?: any;
    setShowModal?: any;
    showModalDelete?: any;
    setShowModalDelete?: any;
    onClose: () => void;
}

type Door = {
    id: number;
    name: string;
    location: string;
    class_name: string;
    description: string;
};

export function AddDoorModal(props: DoorModalProps) {
    const { showModal, setShowModal, onClose } = props;

    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [class_name, setClassName] = useState('');
    const [description, setDescription] = useState('');

    const [validation, setValidation] = useState({});

    const storeDoor = async (e: any) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('name', name);
        formData.append('location', location);
        formData.append('class_name', class_name);
        formData.append('description', description);

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/doors`, formData);

            if (response.status === 200 || response.status === 201) {

            } else {
                setValidation({ message: "Failed to store the door data" });
            }

        } catch (error: any) {
            if (error.response && error.response.data) {
                setValidation(error.response.data);
            } else {
                setValidation({ message: "An unexpected error occurred" });
            }
        }
        onClose();
    };

    return (
        <Modal show={showModal} size="md" onClose={() => setShowModal(false)} popup>
            <Modal.Header />
            <Modal.Body>
                <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Add New Door</h3>
                    <form onSubmit={storeDoor}>
                        <div>
                            <div className="mb-2 block">
                                <Label value="Door Name" />
                            </div>
                            <TextInput value={name} onChange={(e) => setName(e.target.value)} placeholder="Input door name" />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label value="Location" />
                            </div>
                            <TextInput value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Input door location" />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label value="Class Name" />
                            </div>
                            <TextInput value={class_name} onChange={(e) => setClassName(e.target.value)} placeholder="Input class name" />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label value="Description" />
                            </div>
                            <Textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Input door description" />
                        </div>
                        <div className="w-full">
                            <div className="mt-6">
                                <ButtonFormComponent text="Create Door" color="greenFill" />
                            </div>
                        </div>
                    </form>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default function EditDetailDoorModal(props: DoorModalProps) {
    const { door, showModal, setShowModal, onClose } = props;

    const [name, setName] = useState(door!.name);
    const [location, setLocation] = useState(door!.location);
    const [class_name, setClassName] = useState(door!.class_name);
    const [description, setDescription] = useState(door!.description);

    const [validation, setValidation] = useState({});

    const updateDoor = async (e: any) => {

        e.preventDefault();

        const formData = new FormData();

        formData.append('name', name);
        formData.append('location', location);
        formData.append('class_name', class_name);
        formData.append('description', description);
        formData.append('_method', 'PUT');

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/doors/${door!.id}`, formData);

            if (response.status === 200 || response.status === 201) {
            } else {
                setValidation({ message: "Failed to store the door data" });
            }

        } catch (error: any) {
            if (error.response && error.response.data) {
                setValidation(error.response.data);
            } else {
                setValidation({ message: "An unexpected error occurred" });
            }
        }
        onClose();
    };

    return (
        <Modal show={showModal} size="md" onClose={() => setShowModal(false)} popup>
            <Modal.Header />
            <Modal.Body>
                <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Edit Detail</h3>
                    <form onSubmit={updateDoor}>
                        <div>
                            <div className="mb-2 block">
                                <Label value="Name" />
                            </div>
                            <TextInput
                                value={name} onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label value="Location" />
                            </div>
                            <TextInput
                                value={location} onChange={(e) => setLocation(e.target.value)}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label value="Class Name" />
                            </div>
                            <TextInput
                                value={class_name} onChange={(e) => setClassName(e.target.value)}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label value="Description" />
                            </div>
                            <Textarea
                                value={description} onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div className="w-full">
                            <div className="mt-6">
                                <ButtonFormComponent text="Save Changes" color="greenFill" />
                            </div>
                        </div>
                    </form>
                </div>
            </Modal.Body>
        </Modal>
    );
}

// export function AddUserDoorModal(props: DoorModalProps) {
//     const { showModal, setShowModal } = props;

//     return (
//         <Modal show={openModal} size="md" onClose={onCloseModal} popup>
//             <Modal.Header />
//             <Modal.Body>
//                 <div className="space-y-3">
//                     <h3 className="text-xl font-bold text-gray-900 dark:text-white">Add User to This Door</h3>
//                     <div>
//                         <div className="mb-2 block">
//                             <Label value="Door" />
//                         </div>
//                         <TextInput id="iduser" />
//                     </div>
//                     <div>
//                         <div className="mb-2 block">
//                             <Label value="Name" />
//                         </div>
//                         <TextInput id="name" />
//                     </div>
//                     <div>
//                         <div className="mb-2 block">
//                             <Label value="Status" />
//                         </div>
//                         <TextInput id="status" />
//                     </div>
//                     <div>
//                         <div className="mb-2 block">
//                             <Label value="Email" />
//                         </div>
//                         <TextInput id="email" />
//                     </div>
//                     <div className="w-full">
//                         <div className="mt-6">
//                             <ButtonComponent text="Add User" color="greenFill" />
//                         </div>
//                     </div>
//                 </div>
//             </Modal.Body>
//         </Modal>
//     );
// }

export function DeleteModal(props: DoorModalProps) {
    const { door, showModalDelete, setShowModalDelete, onClose } = props;
    const handleDeleteAndClose = () => {
        deleteDoor(door!.id);
        onClose();
    };

    return (
        <>
            <Modal show={showModalDelete} size="md" onClose={() => setShowModalDelete(false) } popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Are you sure you want to delete?
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Button color="failure" onClick={handleDeleteAndClose} href="../doors">
                                {"Yes, I'm sure"}
                            </Button>
                            <Button color="gray" onClick={() => setShowModalDelete(false)}>
                                No, cancel
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}