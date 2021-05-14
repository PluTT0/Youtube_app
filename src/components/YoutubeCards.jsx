import React from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from 'swiper/core';

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "./YoutubeCards.sass";
import VideoCard from './VideoCard';


SwiperCore.use([Pagination]);

const YoutubeCards = () => {
  const videos = useSelector(state => state.youtubeReducer.items);

  return (
    <div className='swiperWrapper'>
      <Swiper 
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true} 
        className='cardCarusel'>
          {videos.map(info =>
            <SwiperSlide key={info.id}>
              <VideoCard info={info} />
            </SwiperSlide>)}
      </Swiper>
    </div>
  )
}

export default YoutubeCards;