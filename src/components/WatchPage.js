import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";


const WatchPage = () =>{

    const [searchParams] = useSearchParams();

    const videoId = searchParams.get("v");
    console.log(videoId);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
    },[])


    return (
        <div className="w-full">
            <div className="flex">
                {/* YouTube Video */}
                <div className="ml-2 flex-shrink-0">
                    <iframe
                        width="1050"
                        height="500"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Remaining Width */}
                <div className="ml-2 flex-1 min-w-0 ">
                    <LiveChat />
                </div>
            </div>

            {/* Comments */}
            <div className="ml-2  bg-gray-100 w-[1050px]">
                <CommentsContainer />
            </div>
        </div>
    )
}

export default WatchPage;