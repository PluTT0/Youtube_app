import React from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, { Pagination } from 'swiper/core';

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import "./styles/YoutubeCards.sass";
import VideoCard from './VideoCard';

SwiperCore.use([Pagination]);

  
const pagination = {
  "clickable": true,
  "rewind": true,
  "dynamicBullets": true,
  "hideOnClick": true,
  "dynamicMainBullets": 1,
  "renderBullet": function (index, className) {
    return '<div class=\"' + className + '\">' + (index + 1) + '</div>';
  }
}

const YoutubeCards = () => {
  const videos = useSelector(state => state.youtubeReducer.items);
  console.log(videos)
  
  return (
    <>
      <div className='swiperWrapper'>
        <Swiper
          rewind="true"
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
  )
}

export default YoutubeCards;
