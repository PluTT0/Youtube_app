import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from '@material-ui/core'
  
import { BiLike, BiDislike } from 'react-icons/bi';
import { FaRegEye } from 'react-icons/fa';
import { GrChannel } from 'react-icons/gr';
import { BsCalendar } from 'react-icons/bs';

import './styles/FrontCard.sass';


const FrontCard = ({ info, handleClick }) => {
  return (
    <div className='frontCardWrapper'>
        <div className="cardHeader">
          <Card.Img className="cardHeaderImg" variant="top" src={info.snippet.thumbnails.medium.url} />
          <Card.Title 
            as={Link} 
            href={`https://www.youtube.com/watch?v=${info.id}&ab_channel=${info.snippet.channelTitle}`}
            className="cardHeaderTitle"
          >
            {info.snippet.title}
          </Card.Title>
        </div>
        <Card.Body id='cardBody'>
          <Card.Text className="infoWrapper">
            <span className='cardBodyTitle'><GrChannel /> {info.snippet.channelTitle}</span>  
            <span><BiLike /> {info.statistics.likeCount}</span>
            <span><BiDislike /> {info.statistics.dislikeCount}</span>
            <span><FaRegEye /> {info.statistics.viewCount} </span>
            <span><BsCalendar /> {info.snippet.publishedAt.substr(-20,10)} </span>
          </Card.Text>
          <Button onClick={handleClick} id='flipButton' variant="secondary" size="lg" block>
            Description
          </Button>
        </Card.Body>
    </div>
  )
}

export default FrontCard;
