import {
  MdHomeFilled,
  MdOutlineSubscriptions,
  MdHistory,
  MdPlaylistPlay,
  MdOutlineWatchLater,
  MdOutlineThumbUp,
  MdOutlineVideoLibrary,
  MdDownload,
  MdLiveTv,
  MdOutlineMovie,
} from "react-icons/md";

import { SiYoutubemusic, SiYoutubekids } from "react-icons/si";
import { IoGameControllerOutline, IoChevronForward } from "react-icons/io5";
import { PiFilmSlateBold } from "react-icons/pi";

const SideBar = () => {
  return (
    <aside className="w-64 h-screen overflow-y-auto px-4 py-3 text-[15px]">

      {/* Main */}
      <div className="space-y-1">
        <div className="flex items-center gap-5 p-2 rounded-xl hover:bg-gray-100 cursor-pointer">
          <MdHomeFilled size={24} />
          <span>Home</span>
        </div>

        <div className="flex items-center gap-5 p-2 rounded-xl hover:bg-gray-100 cursor-pointer">
          <PiFilmSlateBold size={24} />
          <span>Shorts</span>
        </div>

        <div className="flex items-center gap-5 p-2 rounded-xl hover:bg-gray-100 cursor-pointer">
          <MdLiveTv size={24} />
          <span>Live</span>
        </div>
      </div>

      <hr className="my-4" />

      {/* Subscriptions */}
      <div>
        <h2 className="flex items-center font-semibold text-lg mb-2 cursor-pointer">
          Subscriptions
          <IoChevronForward className="ml-1" size={18} />
        </h2>

        <div className="space-y-1">
          <div className="flex items-center gap-5 p-2 rounded-xl hover:bg-gray-100 cursor-pointer">
            <SiYoutubemusic size={22} />
            <span>Music</span>
          </div>

          <div className="flex items-center gap-5 p-2 rounded-xl hover:bg-gray-100 cursor-pointer">
            <MdOutlineMovie size={22} />
            <span>Movies</span>
          </div>

          <div className="flex items-center gap-5 p-2 rounded-xl hover:bg-gray-100 cursor-pointer">
            <IoGameControllerOutline size={22} />
            <span>Games</span>
          </div>
        </div>
      </div>

      <hr className="my-4" />

      {/* You */}
      <div>
        <h2 className="flex items-center font-semibold text-lg mb-2 cursor-pointer">
          You
          <IoChevronForward className="ml-1" size={18} />
        </h2>

        <div className="space-y-1">
          <div className="flex items-center gap-5 p-2 rounded-xl hover:bg-gray-100 cursor-pointer">
            <MdHistory size={22} />
            <span>History</span>
          </div>

          <div className="flex items-center gap-5 p-2 rounded-xl hover:bg-gray-100 cursor-pointer">
            <MdPlaylistPlay size={22} />
            <span>Playlists</span>
          </div>

          <div className="flex items-center gap-5 p-2 rounded-xl hover:bg-gray-100 cursor-pointer">
            <MdOutlineWatchLater size={22} />
            <span>Watch later</span>
          </div>

          <div className="flex items-center gap-5 p-2 rounded-xl hover:bg-gray-100 cursor-pointer">
            <MdOutlineThumbUp size={22} />
            <span>Liked videos</span>
          </div>

          <div className="flex items-center gap-5 p-2 rounded-xl hover:bg-gray-100 cursor-pointer">
            <MdOutlineVideoLibrary size={22} />
            <span>Your videos</span>
          </div>

          <div className="flex items-center gap-5 p-2 rounded-xl hover:bg-gray-100 cursor-pointer">
            <MdDownload size={22} />
            <span>Downloads</span>
          </div>
        </div>
      </div>

      <hr className="my-4" />

      {/* More from YouTube */}
      <div>
        <h2 className="font-semibold text-lg mb-2">
          More from YouTube
        </h2>

        <div className="space-y-1">
          <div className="flex items-center gap-5 p-2 rounded-xl hover:bg-gray-100 cursor-pointer">
            <SiYoutubemusic size={22} />
            <span>YouTube Music</span>
          </div>

          <div className="flex items-center gap-5 p-2 rounded-xl hover:bg-gray-100 cursor-pointer">
            <SiYoutubekids size={22} />
            <span>YouTube Kids</span>
          </div>

          <div className="flex items-center gap-5 p-2 rounded-xl hover:bg-gray-100 cursor-pointer">
            <MdOutlineSubscriptions size={22} />
            <span>Try Premium</span>
          </div>
        </div>
      </div>

    </aside>
  );
};

export default SideBar;