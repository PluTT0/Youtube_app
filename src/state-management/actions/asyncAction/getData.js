import { SET_RESULT, URL, ACCESS_KEY } from '../../constants';
import { setIsFetching } from '../setIsFetching';


export const getYoutubeData = (inputValue) => {
  return (dispatch) => {
    dispatch(setIsFetching(true))
    fetch(`../../data.json`)
      .then(res => res.json())
      .then(result => {
        const serchResult = result.items;
        const videoId = serchResult.map(videos => videos.id.videoId).join(',');
        return fetch(`../../dataId.json`)
      }).then(res => res.json())
      .then(result => dispatch({
        type: SET_RESULT,
        payload: result
      }))
  }
}

