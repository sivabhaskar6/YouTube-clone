import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import { IoSearch, IoNotificationsOutline } from "react-icons/io5";
import { MdMic } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";

const Header = () => {

  const dispatch = useDispatch();
  const toggleMenuHandeler = ()=>{
    dispatch(toggleMenu());
  }

  return (
    <header className="sticky top-0 z-50 bg-white flex items-center justify-between px-2 py-2 shadow-sm">
      {/* Left */}
      <div className="flex items-center gap-5">
        <button className="p-2 rounded-full hover:bg-gray-100" >
          <RxHamburgerMenu size={23} onClick={()=>toggleMenuHandeler()}/>
        </button>

        <div className="flex items-center cursor-pointer">
          <FaYoutube size={33} className="text-red-600" />
          <h1 className="ml-1 text-2xl font-semibold">YouTube</h1>
        </div>
      </div>

      {/* Middle */}
      <div className="flex items-center w-[45%]">

        <input
          type="text"
          placeholder="Search"
          className="flex-1 border border-gray-300 rounded-l-full px-5 py-2 outline-none focus:border-blue-500"
        />

        <button className="border border-l-0 border-gray-300 rounded-r-full bg-gray-100 px-6 py-2 hover:bg-gray-200">
          <IoSearch size={21} />
        </button>

        <button className="ml-3 p-3 rounded-full bg-gray-100 hover:bg-gray-200">
          <MdMic size={20} />
        </button>

      </div>

      {/* Right */}
      <div className="flex items-center gap-5">

        <button className="relative p-2 rounded-full hover:bg-gray-100">
          <IoNotificationsOutline size={23} />
        </button>

        <button className="rounded-full hover:bg-gray-100 p-1">
          <FaRegUserCircle size={33} />
        </button>

      </div>

    </header>
  );
};

export default Header;