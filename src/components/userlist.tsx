
"use client";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { HiTrash, HiOutlinePencil } from "react-icons/hi";
import { DeleteButtonComponent, EditButtonComponent } from "./button";
import { UserListArray } from "../dummy/data/users";
const userList = new UserListArray();

function UserListComponent() {
  return (
    <div className="overflow-x-auto">
      <Table hoverable className="w-full">
        <Table.Head>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Role</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Telp</Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {userList.userArray.map(user => (
            <TableRow key={user.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {user.name}
              </TableCell>
              <TableCell>{user.status}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                {user.number}
              </TableCell>
              <Table.Cell className="flex">
                <EditButtonComponent text="Edit" size="door" color="primary" />
                <DeleteButtonComponent text="Delete" size="door" color="primary" />
              </Table.Cell>
            </TableRow>
          ))}

        </Table.Body>
      </Table>
    </div>
  );
}

export default UserListComponent;