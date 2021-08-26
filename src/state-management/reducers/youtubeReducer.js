import { 
  SET_CURRENT_PAGE,
  SET_IS_FETCHING,
  SET_RESULT,
  } 
from '../constants';

const initialState = {
  items: [],
  isFetching: true,
  error: [],
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
    case 'SET_ERROR':
      return {
        ...state,
        isFatching: false,
        error: action.payload
      }
    default:
      return state
  }
}


export default youtubeReducer;