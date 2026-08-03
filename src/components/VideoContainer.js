import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";


const VideoContainer = ()=>{
    const [videos, setVideos] = useState([]);
    const getVideos = async() =>{

        const response =await fetch(YOUTUBE_VIDEOS_API);
        const data = await response.json();
        console.log(data);
        setVideos(data?.items);
    }

    useEffect(() => {
        getVideos();
    }, []);

    

    return(
        <div className="flex flex-wrap  gap-2">
            {videos?.map((video,index) => (
                <Link to={"/watch?v=" + video.id} key={video.id}>
                    <VideoCard info={video} />
                </Link>
            ))}
        </div>
    )
}
export default VideoContainer;
