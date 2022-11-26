import { SET_ERROR, SET_IS_FETCHING, SET_RESULT } from '../constants';


export const setIsFetching = (bool) => ({
  type: SET_IS_FETCHING,
  payload: bool
});

export const setFetchResult = (result) => ({
  type: SET_RESULT,
  payload: result
});

export const setError = (result) => ({
  type: SET_ERROR,
  payload: result
});
