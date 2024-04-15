import React from 'react';

const FormComponent = () => {
  return (
    <div className="w-full max-w-xl bg-white shadow-md overflow-hidden rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h2 className="text-lg font-semibold text-gray-800">tes User</h2>
      </div>
      <div className="border-t border-gray-200">
        <form className="px-8 py-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nama:</label>
            <input id="name" type="text" placeholder="Masukkan nama Anda" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Alamat Email:</label>
            <input id="email" type="email" placeholder="Masukkan alamat email Anda" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="pin" className="block text-gray-700 text-sm font-bold mb-2">Kata Sandi:</label>
            <input id="pin" type="password" placeholder="Masukkan PIN Anda" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="pin" className="block text-gray-700 text-sm font-bold mb-2">PIN:</label>
            <input id="pin" type="password" placeholder="Masukkan PIN Anda" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="role" className="block text-gray-700 text-sm font-bold mb-2">Peran (Role):</label>
            <select id="role" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              <option value="">Pilih peran</option>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
