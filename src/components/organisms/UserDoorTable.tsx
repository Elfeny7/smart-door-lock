
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

type Props = {
  userDoor: any;
}

export default function UserDoorTableComponent({ userDoor }: Props) {

  return (
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
          {userDoor.map((user: any) => (
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
  );
}
