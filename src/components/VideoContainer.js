import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";


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
                <VideoCard key={video.id} info={video} />
            ))}
        </div>
    )
}
export default VideoContainer;
