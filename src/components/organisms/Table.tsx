"use client";

import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { Pagination } from "flowbite-react";
import { useState } from "react";
import { ButtonModalComponent } from "../atoms/button";
import { DeleteUserModal, DetailLogModal, EditUserModal } from "../molecules/modal";

type UserProps = {
    users: any;
    refreshUsers: () => void;
}

type LogProps = {
    logs: any;
    refreshLogs: () => void;
}

export const UserTable = ({ users, refreshUsers }: UserProps) => {
    const [selectedUser, setSelectedUser] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleEditClick = (user: any) => {
        setSelectedUser(user);
        setShowEditModal(true);
    };
    const handleDeleteClick = (user: any) => {
        setSelectedUser(user);
        setShowDeleteModal(true);
    };
    const closeEditModal = () => {
        setShowEditModal(false);
        setSelectedUser(null);
        refreshUsers();
    }
    const closeDeleteModal = () => {
        setShowDeleteModal(false);
        setSelectedUser(null);
        refreshUsers();
    }

    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;
    const onPageChange = (page: number) => setCurrentPage(page);
    const startIndex = (currentPage - 1) * rowsPerPage;
    const selectedUsers = users.slice(startIndex, startIndex + rowsPerPage);

    return (
        <>
            <div className="overflow-x-auto w-[78vw]">
                <Table hoverable>
                    <TableHead>
                        <TableHeadCell>Id</TableHeadCell>
                        <TableHeadCell>User Name</TableHeadCell>
                        <TableHeadCell>Role</TableHeadCell>
                        <TableHeadCell>Phone</TableHeadCell>
                        <TableHeadCell>Email</TableHeadCell>
                        <TableHeadCell>Action</TableHeadCell>
                    </TableHead>
                    <TableBody className="divide-y">
                        {selectedUsers.map((user: any) => (
                            <TableRow key={user.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {user.id}
                                </TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.role}</TableCell>
                                <TableCell>{user.phone}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>
                                    <div className="flex flex-row gap-2">
                                        <ButtonModalComponent text="Edit" color="primary" onClick={() => handleEditClick(user)} />
                                        <ButtonModalComponent text="Delete" color="redFill" onClick={() => handleDeleteClick(user)} />
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div className="flex overflow-x-auto sm:justify-center mt-4">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={Math.ceil(users.length / rowsPerPage)}
                        onPageChange={onPageChange}
                    />
                </div>
            </div>
            {selectedUser && showEditModal ? (<EditUserModal showEditModal={showEditModal} setShowEditModal={setShowEditModal} user={selectedUser!} onClose={closeEditModal} />) : null}
            {selectedUser && showDeleteModal ? (<DeleteUserModal showDeleteModal={showDeleteModal} setShowDeleteModal={setShowDeleteModal} user={selectedUser!} onClose={closeDeleteModal} />) : null}
        </>
    );
}

export const LogTable = ({ logs, refreshLogs }: LogProps) => {
    const [selectedLog, setSelectedLog] = useState(null);
    const [showDetailModal, setShowDetailModal] = useState(false);
    const handleClick = (log: any) => {
        setSelectedLog(log);
        setShowDetailModal(true);
    };
    const closeDetailModal = () => {
        setShowDetailModal(false);
        setSelectedLog(null);
        refreshLogs();
    }

    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;
    const onPageChange = (page: number) => setCurrentPage(page);
    const startIndex = (currentPage - 1) * rowsPerPage;
    const selectedLogs = logs.slice(startIndex, startIndex + rowsPerPage);

    return (
        <>
            <div className="overflow-x-auto w-[78vw]">
                <Table hoverable>
                    <TableHead>
                        <TableHeadCell>Id</TableHeadCell>
                        <TableHeadCell>Name</TableHeadCell>
                        <TableHeadCell>Role</TableHeadCell>
                        <TableHeadCell>Date</TableHeadCell>
                        <TableHeadCell>Class Name</TableHeadCell>
                        <TableHeadCell>Detail</TableHeadCell>
                    </TableHead>
                    <TableBody className="divide-y">
                        {selectedLogs.map((log: any) => (
                            <TableRow key={log.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {log.id}
                                </TableCell>
                                <TableCell>{log.name}</TableCell>
                                <TableCell>{log.role}</TableCell>
                                <TableCell>{log.date_time}</TableCell>
                                <TableCell>{log.class_name}</TableCell>
                                <TableCell>
                                    <ButtonModalComponent text="Detail" color="primary" onClick={() => handleClick(log)} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div className="flex overflow-x-auto sm:justify-center mt-4">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={Math.ceil(logs.length / rowsPerPage)}
                        onPageChange={onPageChange}
                    />
                </div>
            </div>
            {selectedLog && showDetailModal ? (<DetailLogModal showDetailModal={showDetailModal} setShowDetailModal={setShowDetailModal} log={selectedLog!} />) : null}
        </>
    );
}