import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';

import YoutubeCards from './YoutubeCards';
import { getYoutubeData } from '../state-management';



const Main = () => {
  const dispatch = useDispatch();
  const videos = useSelector(state => state.youtubeReducer.items);
  const isFetching = useSelector(state => state.youtubeReducer.isFetching);
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (ev) => {
    setInputValue(ev.target.value);
  } 

  const onSubmit = (ev) => {
    ev.preventDefault()
    dispatch(getYoutubeData(inputValue));
    
    setInputValue('');
  }

  useEffect(() => {
    dispatch(getYoutubeData(''))
  },[])
  console.log(videos)
  return (
    <>
      <form onSubmit={onSubmit}>
        <input value={inputValue} onChange={onInputChange} type="text" payload='Serch video' className='setch-input' />
        <button>Search</button>
      </form>

        {
          isFetching === false
          ?
          <YoutubeCards videos={videos} />
        :
        <div>
          <CircularProgress />
          <CircularProgress color="secondary" />
        </div>
        }
    </>
  )
}

export default Main