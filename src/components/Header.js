import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import { IoSearch, IoNotificationsOutline } from "react-icons/io5";
import { MdMic } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
  import { useEffect, useState } from "react";
import { cacheResults } from "../utils/searchSlice";



const Header = () => {

  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {

    // Don't call API for empty search
    if (!searchQuery.trim()) return;

    // Start new timer
    const timer= setTimeout(() => {
      if(searchCache[searchQuery])
      {
        setSuggestions(searchCache[searchQuery]);
        return;
      }
      getSearchSuggestions();
    }, 150);

    // Cleanup when searchQuery changes/unmounts
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const data = await response.json();

    setSuggestions(data[1]);
    console.log(searchQuery);
    console.log(data[1]);
    dispatch(cacheResults({ [searchQuery]: data[1] }));
  };

  return (
    <header className="sticky top-0 z-50 bg-white flex items-center justify-between px-2 py-2 shadow-sm">
      {/* Left */}
      <div className="flex items-center gap-5">
        <button className="p-2 rounded-full hover:bg-gray-100"  onClick={()=>dispatch(toggleMenu())} >
          <RxHamburgerMenu size={23}/>
        </button>

         <Link to={"/"} >
          <div className="flex items-center cursor-pointer">
            <FaYoutube size={33} className="text-red-600" />
            <h1 className="ml-1 text-2xl font-semibold">YouTube</h1>
          </div>
        </Link>
      </div>

      {/* Middle */}
      <div className="w-[45%]">
        <div className="flex items-center ">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 border border-gray-300 rounded-l-full px-5 py-2 outline-none focus:border-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value.trim())}
            onFocus={()=>setShowSuggestions(true)}
            onBlur={()=>setShowSuggestions(false)}
          />

          <button className="border border-l-0 border-gray-300 rounded-r-full bg-gray-100 px-6 py-2 hover:bg-gray-200">
            <IoSearch size={21} />
          </button>

          <button className="ml-3 p-3 rounded-full bg-gray-100 hover:bg-gray-200">
            <MdMic size={20} />
          </button>
        </div>
        {showSuggestions && searchQuery.trim() && (
          <div className="absolute bg-white w-[36.5%]  shadow-lg rounded-xl mt-1 pb-1 ">
            <ul>
              {suggestions.map((suggestion, index) => (
                <li key={index} className="px-4 py-2 mx-2 hover:bg-gray-200 rounded-xl cursor-pointer">
                  <div className="flex place-items-end gap-2">
                    < IoSearch size={16} />
                    {suggestion}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
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