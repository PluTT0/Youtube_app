import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, Button } from 'react-bootstrap';
import SwiperCore, { Pagination } from 'swiper/core';

import './YoutubeCards.sass';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

SwiperCore.use([Pagination]);

const YoutubeCards = ({ videos }) => {
  console.log(videos)

  return (
    <>
      <Swiper slidesPerView={4} spaceBetween={30} freeMode={true} >
          {videos.map(videos => 
          <Card  key={videos.id} style={{ width: '18rem' }}>
            <SwiperSlide key={videos.id}>
              <Card.Img variant="top" src={videos.snippet.thumbnails.medium.url} />
              <Card.Body>
                <Card.Title>{videos.snippet.title}</Card.Title>
                <Card.Text>{videos.snippet.description}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </SwiperSlide>
          </Card>)}
      </Swiper>
    </>

      
  )
}

export default YoutubeCards;