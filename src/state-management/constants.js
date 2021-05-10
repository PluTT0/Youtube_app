const ACCESS_KEY = 'AIzaSyC7kIefeZtScz6x-oWZ4GMKXzlxRLqDMx8';
const maxResults = '15';
const URL_SERCH = `https://www.googleapis.com/youtube/v3/search?key=${ACCESS_KEY}&type=video&part=snippet&maxResults=${maxResults}&q=`
const URL_VIDEO_ID = 'https://www.googleapis.com/youtube/v3/videos?key=${ACCESS_KEY}&id=${videoId}&part=snippet,statistics';

const SET_RESULT = 'SET_RESULT';
const SET_IS_FETCHING = 'SET_IS_FETCHING';

export {
  SET_RESULT,
  URL_SERCH,
  URL_VIDEO_ID,
  SET_IS_FETCHING,
  ACCESS_KEY,
}
