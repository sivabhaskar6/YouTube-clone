


export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${process.env.REACT_APP_GOOGLE_API_KEY}`;




export const YOUTUBE_SEARCH_API =
  `/api/suggestions?client=firefox&ds=yt&q=`;