import SidebarComponent from "./components/sidebar";
import ButtonComponent from "./components/button";

export default function MyPage() {
  return (
    <>
      <div className="flex flex-row">
        <div className="h-screen">
          <SidebarComponent />
        </div>
        <div>
          <ButtonComponent />
        </div>
      </div>
    </>
  );
}