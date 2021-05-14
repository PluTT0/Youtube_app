import React from 'react';
import { Card, Button } from 'react-bootstrap';

import './BackCard.sass'

const BackCard = ({ info, handleClick }) => {
  return(
    <>
      <Card.Body id='backCardBody'>
        <Card.Text  className="descriptionTextWrapper" >
          <span className='descriptionText'>
            {info.snippet.description}
          </span>
        </Card.Text>
        <Button onClick={handleClick} id='flipButton' variant="secondary" size="lg" block>
          Back to info
        </Button>
      </Card.Body>
    </>
  )
  
}

export default BackCard;