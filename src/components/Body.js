import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";


const Body = () => {
  return (
    <div className="flex flex-1 min-h-0 pt-4">
      <SideBar />
      <div className="flex-1 min-w-0 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
