
"use client";

import { Checkbox, Table, Select, Button } from "flowbite-react";
import { HiTrash,HiOutlinePencil } from "react-icons/hi";
import { DeleteButtonComponent, EditButtonComponent } from "./button";


function UserListComponent() {
  return (
    <div className="overflow-x-auto">
      <Table hoverable className="w-full">
        <Table.Head>
          <Table.HeadCell>No</Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Telp</Table.HeadCell>
          <Table.HeadCell>Role</Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'1'}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'Hadian Nelvi'}
            </Table.Cell>
            <Table.Cell>Hadian@gmail.com</Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'085264'}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'User'}
            </Table.Cell>
            <Table.Cell className="flex">
              <EditButtonComponent text="Edit" size="door" color="primary" />
              <DeleteButtonComponent text="Delete" size="door" color="primary" />
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'2'}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'Hadian Nelvi'}
            </Table.Cell>
            <Table.Cell>Hadian@gmail.com</Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'085264'}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'User'}
            </Table.Cell>
            <Table.Cell className="flex">
              <EditButtonComponent text="Edit" size="door" color="primary" />
              <DeleteButtonComponent text="Delete" size="door" color="primary" />
            </Table.Cell>
          </Table.Row>

        </Table.Body>
      </Table>
    </div>
  );
}

export default UserListComponent;