import { SET_IS_FETCHING } from '../constants';


export const setIsFetching = (bool) => ({
  type: SET_IS_FETCHING,
  payload: bool
})
