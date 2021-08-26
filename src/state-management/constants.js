const ACCESS_KEY = 'AIzaSyDrKC9KgTvfTM1DalnTzKy2ICQJ3HCMJw0';
const maxResults = '15';
const URL_SERCH = `https://www.googleapis.com/youtube/v3/search?key=${ACCESS_KEY}&type=video&part=snippet&maxResults=${maxResults}&q=`


const SET_RESULT = 'SET_RESULT';
const SET_IS_FETCHING = 'SET_IS_FETCHING';

export {
  SET_RESULT,
  URL_SERCH,
  SET_IS_FETCHING,
  ACCESS_KEY,
}
