


export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=IN&maxResults=49&key=${process.env.REACT_APP_GOOGLE_API_KEY}`;


// https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=AIzaSyCI7JPQlrnjGkZzEs2AKThQHDluPoneHLc

export const YOUTUBE_SEARCH_API =`http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`;