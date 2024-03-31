import SidebarComponent from "./components/sidebar";
import ButtonComponent from "./components/button";
import UserListComponent from "./components/userlist";
import FormComponent from "./components/form";


export default function MyPage() {
  return (
    <>
      <div className="flex flex-row">
        <div className="h-screen">
          <SidebarComponent />
        </div>
         {/* <div>
          <ButtonComponent />
        </div>  */}
        <div className="flex flex-grow justify-center items-center"> {/* Meletakkan UserListComponent di tengah */}
         <UserListComponent />  
        {/* <FormComponent />   */}
      </div>
      </div>
    </>
  );
}