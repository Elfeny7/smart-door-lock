// pages/TablePage.js

import React from 'react';

const TablePage = () => {
  return (
    <div className="container mx-10 mt-1">
      <h1 className="text-2xl font-bold mb-4">Data Pengguna</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              No
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Nama
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Telp
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Role
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">

          {/* Data Pengguna */}
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">1</td>
            <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
            <td className="px-6 py-4 whitespace-nowrap">john@example.com</td>
            <td className="px-6 py-4 whitespace-nowrap">1234567890</td>
            <td>
            <select id="role" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              <option value="">Pilih role</option>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
            </select>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <i className="fas fa-edit mr-2"></i> 
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">
                <i className="fas fa-trash-alt mr-2"></i> 
              </button>
            </td>
          </tr>
          {/* End Data Pengguna */}
        </tbody>
      </table>
    </div>
  );
};

export default TablePage;
