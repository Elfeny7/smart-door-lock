import SidebarComponent from "../components/sidebar";

export default function Doors() {
  return (
    <>
      <div className="flex flex-row">
        <div className="h-screen">
          <SidebarComponent activePage="doors" />
        </div>
        
      </div>
    </>
  );
}