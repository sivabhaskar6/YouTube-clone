import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";


const WatchPage = () =>{

    const [searchParams] = useSearchParams();

    const videoId = searchParams.get("v");
    console.log(videoId);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
    },[])


    return (
        <div className=" flex flex-col w-[1180px]">
            <div className="ml-32">
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
           
            <div className=" ml-32 mt-5 bg-gray-100">
                <CommentsContainer />
            </div>
        </div>
        
    )
}

export default WatchPage;