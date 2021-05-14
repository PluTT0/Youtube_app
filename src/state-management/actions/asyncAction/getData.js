import { SET_RESULT, ACCESS_KEY, URL_SERCH } from '../../constants';
import { setIsFetching } from '../actionCreaters';


export const getYoutubeData = (inputValue) => {
  return (dispatch) => {
    dispatch(setIsFetching(true))
    fetch(URL_SERCH+inputValue)
      .then(res => res.json())
      .then(result => {
        const serchResult = result.items;
        const videoId = serchResult.map(videos => videos.id.videoId).join(',');
        return fetch(`https://www.googleapis.com/youtube/v3/videos?key=${ACCESS_KEY}&id=${videoId}&part=snippet,statistics`)
      }).then(res => res.json())
      .then(result => dispatch({
        type: SET_RESULT,
        payload: result
      }))
  }
}

