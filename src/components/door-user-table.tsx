
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { UserListArray } from "../dummy/data/users";

export default function DoorUserTableComponent() {
const userList = new UserListArray();

  return (
    <div className="overflow-x-auto">
      <Table hoverable>
        <TableHead>
          <TableHeadCell>User Name</TableHeadCell>
          <TableHeadCell>Status</TableHeadCell>
          <TableHeadCell>Email</TableHeadCell>
          <TableHeadCell>
            <span className="sr-only">Hapus</span>
          </TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">

          {userList.userArray.map(user => (
            <TableRow key={user.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {user.name}
              </TableCell>
              <TableCell>{user.status}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <a href="#" className="font-medium text-red-600 hover:underline dark:text-red-500">
                  Hapus
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
