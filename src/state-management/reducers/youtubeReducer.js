import { 
  SET_IS_FETCHING,
  SET_RESULT,
  } 
from '../constants';

const initialState = {
  items: [],
  isFetching: true,
}

const youtubeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESULT:
      return {
        ...state,
        items: action.payload.items,
        isFetching: false,
      }
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload
      }
    default:
      return state
  }
}


export default youtubeReducer;