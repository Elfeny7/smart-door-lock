import { CreateButtonComponent } from "@/components/button";
import SidebarComponent from "@/components/sidebar";
import UserListComponent from "@/components/userlist";

export default function UserList() {
  return (
    <div className="flex flex-col lg:flex-row h-screen"> {/* Menambahkan h-screen untuk tinggi penuh */}
      <div className="lg:w-1/4 h-auto lg:h-screen sticky top-0"> {/* Mengatur lebar sidebar untuk layar kecil */}
        <SidebarComponent activePage="users"/>
      </div>
      <div className="flex-1 p-4"> {/* Menambahkan flex-1 untuk mengambil sisa ruang */}
        
        <div className="w-full bg-white rounded-lg my-4 py-4 shadow-md"> {/* Menambahkan shadow untuk kotak */}
          <div className="flex flex-col lg:flex-row justify-between items-center px-4"> {/* Menggunakan flexbox dan menambahkan items-center */}
            <h1 className="font-bold text-3xl mb-4 lg:mb-0">User List</h1> {/* Menambahkan judul */}
            <div>
              <CreateButtonComponent text="+ Add New User" color="greenFill"/>
            </div>
          </div>
        </div>
        <div className="w-full bg-white rounded-lg shadow-md overflow-x-auto p-4"> {/* Menambahkan shadow dan padding untuk tabel */}
          <UserListComponent/>
        </div>
      </div>
    </div>
  );
}
