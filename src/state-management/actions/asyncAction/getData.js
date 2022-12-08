import { ACCESS_KEY, URL_SERCH } from '../../constants';
import { setIsFetching, setFetchResult } from '../index';


export const getYoutubeData = (inputValue) => {
  return (dispatch) => {
    dispatch(setIsFetching(true))
    fetch(/* URL_SERCH+inputValue */"../data.json")
      .then(res => res.json())
      .then(result => {
          const serchResult = result.items;
          const videoId = serchResult.map(videos => videos.id.videoId).join(',');
          console.log(result)
          return fetch(/* `https://www.googleapis.com/youtube/v3/videos?key=${ACCESS_KEY}&id=${videoId}&part=snippet,statistics` */"../dataItem.json")
      }).then(res => res.json())
      .then(result => dispatch(
        setFetchResult(result)
      )).catch(err => console.log(err))
  }
}
