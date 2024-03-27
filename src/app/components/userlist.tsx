
"use client";

import { Checkbox, Table, Select, Button } from "flowbite-react";
import { HiTrash,HiOutlinePencil } from "react-icons/hi";

function UserListComponent() {
  return (
    <div className="overflow-x-auto">
      <Table hoverable>
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
            <Table.Cell><Select id="role">
                <option value="admin">Admin</option>    
                <option value="user">User</option>
              </Select>
              </Table.Cell>
            <Table.Cell>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded items-center mr-2">
              <HiOutlinePencil className="mr-2 h-5 w-5" />
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded items-center mr-2">
              <HiTrash className="mr-2 h-5 w-5" />
              </button>
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
            <Table.Cell><Select id="role">
                <option value="admin">Admin</option>    
                <option value="user">User</option>
              </Select>
              </Table.Cell>
            <Table.Cell>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded items-center mr-2">
              <HiOutlinePencil className="mr-2 h-5 w-5" />
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded items-center mr-2">
              <HiTrash className="mr-2 h-5 w-5" />
              </button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'3'}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'Hadian Nelvi'}
            </Table.Cell>
            <Table.Cell>Hadian@gmail.com</Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'085264'}
            </Table.Cell>
            <Table.Cell><Select id="role">
                <option value="admin">Admin</option>    
                <option value="user">User</option>
              </Select>
              </Table.Cell>
            <Table.Cell>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded items-center mr-2">
              <HiOutlinePencil className="mr-2 h-5 w-5" />
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded items-center mr-2">
              <HiTrash className="mr-2 h-5 w-5" />
              </button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'4'}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'Hadian Nelvi'}
            </Table.Cell>
            <Table.Cell>Hadian@gmail.com</Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'085264'}
            </Table.Cell>
            <Table.Cell><Select id="role">
                <option value="admin">Admin</option>    
                <option value="user">User</option>
              </Select>
              </Table.Cell>
            <Table.Cell>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded items-center mr-2">
              <HiOutlinePencil className="mr-2 h-5 w-5" />
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded items-center mr-2">
              <HiTrash className="mr-2 h-5 w-5" />
              </button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'5'}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'Hadian Nelvi'}
            </Table.Cell>
            <Table.Cell>Hadian@gmail.com</Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'085264'}
            </Table.Cell>
            <Table.Cell><Select id="role">
                <option value="admin">Admin</option>    
                <option value="user">User</option>
              </Select>
              </Table.Cell>
            <Table.Cell>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded items-center mr-2 ">
              <HiOutlinePencil className="mr-2 h-5 w-5" />
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded items-center mr-2">
              <HiTrash className="mr-2 h-5 w-5" />
              </button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}

export default UserListComponent;