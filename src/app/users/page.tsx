import ButtonComponent, { CreateButtonComponent } from "../components/button";
import SearchComponent from "../components/search";
import SidebarComponent from "../components/sidebar";
import UserListComponent from "../components/userlist";

export default function UserList() {
  return (
    <div className="flex flex-col lg:flex-row"> {/* Menggunakan flexbox untuk mengatur tata letak */}
      <div className="h-auto lg:h-screen lg:w-1/4"> {/* Mengatur lebar sidebar untuk layar kecil */}
        <SidebarComponent activePage="users"/>
      </div>
      <div className="p-4 lg:p-4 w-full lg:w-full"> {/* Mengatur padding dan lebar konten */}
        
        <div className="w-full bg-white rounded-lg my-4 py-4">
          <div className="flex flex-col lg:flex-row  justify-between pl-4"> {/* Menggunakan flexbox */}
            <div className="mt-4 lg:mt-0 lg:ml-4"> {/* Mengatur margin dan posisi tombol */}
              <CreateButtonComponent text="+ Add New User" color="greenFill"/>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <UserListComponent/>
        </div>
      </div>
    </div>
  );
}
