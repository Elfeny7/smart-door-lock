"use client";
import { Button, Label, Modal, Select, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow, TextInput, Textarea } from "flowbite-react";
import { useEffect, useState } from "react";
import { ButtonFormComponent } from "../atoms/button";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import axios from "axios";
import { deleteDoor } from "@/services/doorService";
import { useRouter } from 'next/navigation'

type DoorModalProps = {
    door?: Door;
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

type UserModalProps = {
    user?: User;
    showModal?: any;
    setShowModal?: any;
    showEditModal?: any;
    setShowEditModal?: any;
    showDeleteModal?: any;
    setShowDeleteModal?: any;
    refreshUsers?: () => void;
    onClose: () => void;
}

type User = {
    id: number;
    name: string;
    role: string;
    pin: string;
    phone: string;
    email: string;
};

type UserDoorModalProps = {
    users?: any;
    door?: any;
    userDoor?: any;
    showModalAdd?: any;
    setShowModalAdd?: any;
    refreshUsers?: () => void;
    onClose: () => void;
}

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
                setName('');
                setLocation('');
                setClassName('');
                setDescription('');
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

export function DeleteDoorModal(props: DoorModalProps) {
    const { door, showModalDelete, setShowModalDelete, onClose } = props;
    const router = useRouter();

    const handleDeleteAndClose = () => {
        deleteDoor(door!.id);
        onClose();
        router.push('/doors');
    };

    return (
        <>
            <Modal show={showModalDelete} size="md" onClose={() => setShowModalDelete(false)} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Are you sure you want to delete?
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Button color="failure" onClick={handleDeleteAndClose}>
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

export function AddUserModal(props: UserModalProps) {
    const { showModal, setShowModal, onClose } = props;

    const [name, setName] = useState('');
    const [role, setRole] = useState('Mahasiswa');
    const [pin, setPin] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const [validation, setValidation] = useState({});

    const storeUser = async (e: any) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('name', name);
        formData.append('role', role);
        formData.append('pin', pin);
        formData.append('phone', phone);
        formData.append('email', email);

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/users`, formData);

            if (response.status === 200 || response.status === 201) {
                setName('');
                setRole('Mahasiswa');
                setPin('');
                setPhone('');
                setEmail('');
            } else {
                setValidation({ message: "Failed to store the user data" });
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
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Add New User</h3>
                    <form onSubmit={storeUser}>
                        <div>
                            <div className="mb-2 block">
                                <Label value="Name" />
                            </div>
                            <TextInput value={name} onChange={(e) => setName(e.target.value)} placeholder="Input name" />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label value="Role" />
                                <Select value={role} onChange={(e) => setRole(e.target.value)} required>
                                    <option value="Mahasiswa">Mahasiswa</option>
                                    <option value="Dosen">Dosen</option>
                                </Select>
                            </div>
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label value="Pin" />
                            </div>
                            <TextInput maxLength={6} type="password" inputMode="numeric" pattern="[0-9]*" value={pin} onChange={(e) => setPin(e.target.value)} placeholder="Input Pin" />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label value="Phone" />
                            </div>
                            <TextInput value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Input Phone" />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label value="Email" />
                            </div>
                            <TextInput value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Input Email" />
                        </div>
                        <div className="w-full">
                            <div className="mt-6">
                                <ButtonFormComponent text="Create User" color="greenFill" />
                            </div>
                        </div>
                    </form>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export function EditUserModal(props: UserModalProps) {
    const { user, showEditModal, setShowEditModal, onClose } = props;

    const [name, setName] = useState(user!.name);
    const [role, setRole] = useState(user!.role);
    const [pin, setPin] = useState(user!.pin);
    const [phone, setPhone] = useState(user!.phone);
    const [email, setEmail] = useState(user!.email);

    const [validation, setValidation] = useState({});

    const storeUser = async (e: any) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('name', name);
        formData.append('role', role);
        formData.append('pin', pin);
        formData.append('phone', phone);
        formData.append('email', email);
        formData.append('_method', 'PUT');

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/users/${user!.id}`, formData);

            if (response.status === 200 || response.status === 201) {

            } else {
                setValidation({ message: "Failed to store the user data" });
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
        <Modal show={showEditModal} size="md" onClose={() => setShowEditModal(false)} popup>
            <Modal.Header />
            <Modal.Body>
                <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Edit User</h3>
                    <form onSubmit={storeUser}>
                        <div>
                            <div className="mb-2 block">
                                <Label value="Name" />
                            </div>
                            <TextInput value={name} onChange={(e) => setName(e.target.value)} placeholder="Input name" />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label value="Role" />
                                <Select value={role} onChange={(e) => setRole(e.target.value)} required>
                                    <option value="Mahasiswa">Mahasiswa</option>
                                    <option value="Dosen">Dosen</option>
                                </Select>
                            </div>
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label value="Pin" />
                            </div>
                            <TextInput maxLength={6} type="password" inputMode="numeric" pattern="[0-9]*" value={pin} onChange={(e) => setPin(e.target.value)} placeholder="Input Pin" />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label value="Phone" />
                            </div>
                            <TextInput value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Input Phone" />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label value="Email" />
                            </div>
                            <TextInput value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Input Email" />
                        </div>
                        <div className="w-full">
                            <div className="mt-6">
                                <ButtonFormComponent text="Update User" color="greenFill" />
                            </div>
                        </div>
                    </form>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export function DeleteUserModal(props: UserModalProps) {
    const { user, showDeleteModal, setShowDeleteModal, onClose } = props;

    const handleDeleteAndClose = async (e: any) => {
        e.preventDefault();
        try {
            const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/users/${user!.id}`);

            if (response.status === 200 || response.status === 201) {

            } else {
            }

        } catch (error: any) {
            if (error.response && error.response.data) {

            } else {

            }
        }
        onClose();
    };

    return (
        <>
            <Modal show={showDeleteModal} size="md" onClose={() => setShowDeleteModal(false)} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Are you sure you want to delete?
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Button color="failure" onClick={handleDeleteAndClose}>
                                {"Yes, I'm sure"}
                            </Button>
                            <Button color="gray" onClick={() => setShowDeleteModal(false)}>
                                No, cancel
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export function AddUserDoorModal(props: UserDoorModalProps) {
    const { users, door, userDoor, showModalAdd, setShowModalAdd, onClose } = props;

    const [validation, setValidation] = useState({});

    const attachUserToDoor = async (e: any) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('user_id', '64');
        formData.append('door_id', door!.id);

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/user-door`, formData);

            if (response.status === 200 || response.status === 201) {

            } else {
                setValidation({ message: "Failed to attach the user data to door" });
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

    const detachUserFromDoor = async (e: any) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('user_id', '45');
        formData.append('door_id', door!.id);

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/user-door/detach`, formData);

            if (response.status === 200 || response.status === 201) {

            } else {
                setValidation({ message: "Failed to attach the user data to door" });
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

    const availableUsers = users.filter((user: any) => !userDoor.some((userDoorItem: any) => userDoorItem.id === user.id));

    return (
        <Modal show={showModalAdd} size="3xl" onClose={() => setShowModalAdd(false)} popup>
            <Modal.Header />
            <Modal.Body>
                <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Add User to This Door</h3>
                    <form onSubmit={attachUserToDoor}>
                        <div className="overflow-x-auto">
                            <Table hoverable>
                                <TableHead>
                                    <TableHeadCell>Id</TableHeadCell>
                                    <TableHeadCell>User Name</TableHeadCell>
                                    <TableHeadCell>Role</TableHeadCell>
                                    <TableHeadCell>Email</TableHeadCell>
                                    <TableHeadCell>Phone</TableHeadCell>
                                </TableHead>
                                <TableBody className="divide-y">
                                    {availableUsers.map((user: any) => (
                                        <TableRow key={user.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                {user.id}
                                            </TableCell>
                                            <TableCell>{user.name}</TableCell>
                                            <TableCell>{user.role}</TableCell>
                                            <TableCell>{user.email}</TableCell>
                                            <TableCell>{user.phone}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                        <div className="mt-2">
                            <ButtonFormComponent color="greenFill" text="Add User" />
                        </div>
                    </form>
                </div>
            </Modal.Body>
        </Modal>
    );
}