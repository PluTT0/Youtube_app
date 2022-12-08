import React from 'react';
import { CircularProgress } from '@material-ui/core'

import './styles/Spinner.sass';

const Spinner = () => {
  return (
    <div className="container">
      <div className="circle circle-1"></div>
      <div className="circle circle-2"></div>
      <div className="circle circle-3"></div>
      <div className="circle circle-4"></div>
      <div className="circle circle-5"></div>
    </div>
  )
}

export default Spinner;
