import React, { useEffect, useState }  from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, InputGroup, FormControl } from 'react-bootstrap';

import { getYoutubeData } from '../state-management';
import './SearchPanel.sass';


const SearchPanel = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (ev) => {
    setInputValue(ev.target.value);
  } 

  const onSubmit = (ev) => {
    ev.preventDefault()
    dispatch(getYoutubeData(inputValue));
    
    setInputValue('');
  }

  useEffect(() => {
    dispatch(getYoutubeData(inputValue))
    setInputValue('')
  },[dispatch])

  return (
    <> 
      <Form onSubmit={onSubmit} className='serchWrapper'>
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
            <Button onSubmit={onSubmit} type="submit" variant="outline-danger" className='serchButton'>Search</Button>
          </InputGroup.Append>
        </InputGroup>
      </Form> 
    </>
  )
}

export default SearchPanel;