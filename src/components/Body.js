import MainContainer from "./MainContainer";
import SideBar from "./SideBar";


const Body = () => {
  return (
    <div className="flex flex-1 min-h-0 pt-4 ml-3">
      <SideBar />
      <div className="flex-1 min-w-0 overflow-y-auto">
        <MainContainer />
      </div>
    </div>
  );
};

export default Body;
