

const GOOGLE_API_KEY = `AIzaSyCI7JPQlrnjGkZzEs2AKThQHDluPoneHLc`;

export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=US&maxResults=50&key=${GOOGLE_API_KEY}`;
