import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider, } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline'


import theme from './theme'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,

  document.getElementById('root')
);
