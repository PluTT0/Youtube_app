import React from 'react';
import { CircularProgress } from '@material-ui/core'

import './styles/Spinner.sass';

const Spinner = () => {
  return (
    <div id="spinner">
      <CircularProgress />
      <CircularProgress color="secondary" />
      <CircularProgress />
    </div>
  )
}

export default Spinner;
