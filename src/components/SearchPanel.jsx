import React, { useEffect, useState }  from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, InputGroup, FormControl } from 'react-bootstrap';

import { getYoutubeData } from '../state-management';
import './styles/SearchPanel.sass';

const style = {"textAlign": "center", "margin": "40px 0 20px 0", "color": "#fff", "fontFamily": "Monserrat"};

const SearchPanel = () => {
  const [inputValue, setInputValue] = useState('');
  const [sertchValue, setSertchValue] = useState('');
  const [title, setTitle] = useState("Most popular videos");

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
    setTitle(`${inputValue}`)
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
            <Button type="submit" variant="outline-danger" className='serchButton'>Search</Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
      <h2 className='title' style={style}>{title}</h2>
    </>
  )
}

export default SearchPanel;
