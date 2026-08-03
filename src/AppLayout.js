import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <Header />
      <Outlet />
    </div>
  );
};

export default AppLayout;