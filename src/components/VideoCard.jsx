import React, { useCallback, useState } from 'react';
import ReactCardFlip from 'react-card-flip';

import FrontCard from './FrontCard'
import BackCard from './BackCard';


const VideoCard = ({info}) => {
  const [ isFlipped, setIsFlipped ] = useState(false);
  const handleClick = useCallback(() => {
    setIsFlipped(!isFlipped)
  })

  return (
    <ReactCardFlip  isFlipped={isFlipped} flipDirection="vertical">
      <FrontCard info={info} handleClick={handleClick} />
                    
      <BackCard info={info} handleClick={handleClick} />
    </ReactCardFlip>
  )
}

export default VideoCard;
