import { setIsFetching, setFetchResult } from '../index';
import dotenv from 'dotenv';

dotenv.config();

console.log(process.env.ACCESS_KEY)

const getYoutubeData = (inputValue) => {
  return (dispatch) => {
    dispatch(setIsFetching(true))
    fetch(process.env.URL_SERCH+inputValue)
      .then(res => res.json())
      .then(result => {
          const serchResult = result.items;
          const videoId = serchResult.map(videos => videos.id.videoId).join(',');
          console.log(result)
          return fetch(`https://www.googleapis.com/youtube/v3/videos?key=${process.env.ACCESS_KEY}&id=${videoId}&part=snippet,statistics`)
      }).then(res => res.json())
      .then(result => dispatch(
        setFetchResult(result)
      )).catch(err => console.log(err))
  }
}

export default getYoutubeData;