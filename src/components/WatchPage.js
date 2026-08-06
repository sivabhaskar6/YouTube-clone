import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";


const WatchPage = () =>{

    const [searchParams] = useSearchParams();

    const videoId = searchParams.get("v");
    console.log(videoId);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
    },[])


    return (
        <div className="flex justify-center items-center ">
           <iframe
                width="1200"
                height="600"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        </div>
        
    )
}

export default WatchPage;