import React from 'react';
import { useSelector } from 'react-redux';
import NavBar from './components/NavBar';
import SearchPanel from './components/SearchPanel';
import Spinner from './components/Spinner';
import YoutubeCards from './components/YoutubeCards';

import './index.sass'



const App = () => {
  const isFetching = useSelector(state => state.youtubeReducer.isFetching);
  const errorFetch = useSelector(state => state.youtubeReducer.error)
  console.log(errorFetch)

  return (
    <>
      <div className='appWrapper'>
        <NavBar />
        <SearchPanel />
        {
          !isFetching
          ?
          <YoutubeCards />
          :
          <Spinner/>
        }
      </div>
    </>
  );
};


export default App;
