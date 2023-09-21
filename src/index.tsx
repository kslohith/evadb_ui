import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import {grey } from '@mui/material/colors';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const theme = createTheme({
  palette: {
    primary: {
      main: "#000000"
    },
    secondary: grey,
  },
});

root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </React.StrictMode>
)
