import React, { useEffect, useState }  from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, InputGroup, FormControl } from 'react-bootstrap';

import { getYoutubeData } from '../state-management';
import './styles/SearchPanel.sass';


const SearchPanel = () => {
  const [inputValue, setInputValue] = useState('');
  const [sertchValue, setSertchValue] = useState('');

  const dispatch = useDispatch();
  const onInputChange = (ev) => {
    setInputValue(ev.target.value);
  }

  useEffect(() => {
    dispatch(getYoutubeData(sertchValue));
  },[sertchValue]);

  const getVideo = (ev) => {
    ev.preventDefault()
    setSertchValue(inputValue);
    setInputValue('');
  }

  return (
    <> 
      <Form onSubmit={getVideo} className='serchWrapper'>
        <InputGroup>  
          <FormControl 
            value={inputValue} 
            onChange={onInputChange} 
            type="text" 
            placeholder='Search video'
            aria-label="Search video" 
            className='sertchInput'
            aria-describedby="basic-addon2" />
          <InputGroup.Append >
            <Button onSubmit={getVideo} type="submit" variant="outline-danger" className='serchButton'>Search</Button>
          </InputGroup.Append>
        </InputGroup>
      </Form> 
    </>
  )
}

export default SearchPanel;
