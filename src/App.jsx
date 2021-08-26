import React from 'react';
import { useSelector } from 'react-redux';
import SearchPanel from './components/sertchPanel/SearchPanel';
import YoutubeCards from './components/youtubeCards/YoutubeCards';
import './index.scss'
import { Spinner } from 'react-bootstrap';


function App()  {
  const videos = useSelector(state => state.youtubeReducer.items);
  const errorFetch = useSelector(state => state.youtubeReducer.error)
  console.log(errorFetch)

  return (
    <div className='appWrapper'>
      <SearchPanel />
      {
        !videos.length
        ?
        <Spinner />
        :
        <YoutubeCards />
      }
      
    </div>
  );
}


export default App;
