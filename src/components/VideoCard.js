import { useSelector } from "react-redux";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { formatViewCount } from "../utils/helper";



dayjs.extend(relativeTime);
const VideoCard = ({ info }) => {

  const {isMenuOpen}  = useSelector(store => store.app)
    
  if(!info) return null;
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  const { viewCount } = statistics;

  const size = isMenuOpen ? "w-[430px]" : "w-[373px]";

  return (
    <div className={`${size} cursor-pointer p-2 rounded-lg hover:bg-blue-50`}>
      {/* Thumbnail */}
      <img
        className="w-full h-52 object-cover rounded-xl"
        src={
          thumbnails?.maxres?.url ||
          thumbnails?.high?.url ||
          thumbnails?.medium?.url
        }
        alt={title}
        loading="lazy"
      />

      {/* Video Info */}
      <div className="mt-3">
        <h3 className="font-semibold text-[16px] leading-6 line-clamp-2">
          {title}
        </h3>

        <p className="mt-1 text-sm text-gray-600 hover:text-black">
          {channelTitle}
        </p>

        <div className="flex text-sm text-gray-600">
          <span>{formatViewCount(viewCount)} views</span>
          <span className="mx-2">•</span>
         <span>{dayjs(publishedAt).fromNow()}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;