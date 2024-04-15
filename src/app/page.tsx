import SidebarComponent from "@/components/sidebar";

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
         {/* <UserListComponent />   */}
        {/* <FormComponent />   */}
      </div>
      </div>
    </>
  );
}