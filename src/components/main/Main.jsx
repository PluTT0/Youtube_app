import React from 'react';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core'

import YoutubeCards from '../youtubeCards/YoutubeCards';
import SearchPanel from '../sertchPanel/SearchPanel';

import './Main.sass';

const Main = () => {
  const isFetching = useSelector(state => state.youtubeReducer.isFetching);

  return (
    <div className='app_wrapper'>
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
    </div>
  )
}

export default Main
