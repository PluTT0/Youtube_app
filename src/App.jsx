import React from 'react';
import { useSelector } from 'react-redux';
import SearchPanel from './components/SearchPanel';
import Spinner from './components/Spinner';
import YoutubeCards from './components/YoutubeCards';

import './index.sass'



const style = {"textAlign": "center", "margin": "20px 0", "color": "#fff", "fontFamily": "Monserrat"}
const App = () => {
  const isFetching = useSelector(state => state.youtubeReducer.isFetching);
  const errorFetch = useSelector(state => state.youtubeReducer.error)
  console.log(errorFetch)

  return (
    <div className='appWrapper'>
      <SearchPanel />
      <h1 className='title' style={style}>Most popular</h1>
      {
        !isFetching
         ?
         <YoutubeCards />
        :
        <Spinner/>
      }
    </div>
  );
};


export default App;
