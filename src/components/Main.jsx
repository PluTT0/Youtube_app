import React from 'react';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core'

import YoutubeCards from './YoutubeCards';
import SearchPanel from './SearchPanel';

import './Main.sass';

const Main = () => {
  const isFetching = useSelector(state => state.youtubeReducer.isFetching);

  return (
    <>
      <SearchPanel />
      {
        isFetching === false
         ?
         <YoutubeCards />
        :
        <div id="spinner">
          <CircularProgress />
          <CircularProgress color="secondary" />
          <CircularProgress />
        </div>
      }
    </>
  )
}

export default Main