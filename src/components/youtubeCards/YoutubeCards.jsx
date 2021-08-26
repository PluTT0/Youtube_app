import React from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, { Pagination } from 'swiper/core';

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import "./YoutubeCards.sass";
import VideoCard from './VideoCard';
import Spinner from '../spinner/Spinner';

SwiperCore.use([Pagination]);

const YoutubeCards = () => {
  const videos = useSelector(state => state.youtubeReducer.items);
  const isFetching = useSelector(state => state.youtubeReducer.isFetching);

  const pagination = {
    "clickable": true,
    "dynamicBullets": true,
    "hideOnClick": true,
    "dynamicMainBullets": 1,
    "renderBullet": function (index, className) {
      return '<div class=\"' + className + '\">' + (index + 1) + '</div>';
    }
  }

  return (
      isFetching === false
      ?
      <>
        <div className='swiperWrapper'>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={pagination}
            freeMode={true} 
            className='cardCarusel'>
              {videos.map(info =>
                <SwiperSlide key={info.id}>
                  <VideoCard info={info} />
                </SwiperSlide>)}
          </Swiper>
        </div>
      </>
      :
      <Spinner />
  )
}

export default YoutubeCards;
