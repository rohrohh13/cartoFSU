import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider, createTheme } from '@mui/material/styles';

import App from './App.jsx'
import Colors from './config/color.js';
import './index.css'

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.yellow,
    },
    text: {
      primary: Colors.black
    }
  },
  typography: {
    htmlFontSize: 14,
    fontSize: 14,
    fontFamily: 'inter'
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
