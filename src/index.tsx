// src/index.tsx
import React from 'react';
import {createRoot} from 'react-dom/client';
import LandingPage from './LandingPage';
import { BrowserRouter as Router } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// import CssBaseline from '@mui/material/CssBaseline';
import './index.css';



const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        {/*<ThemeProvider theme={AppTheme}>*/}


                    {/*<Router  basename='/projectxxx'>*/}
                    <Router >
                        <LandingPage/>
                    </Router>

    </React.StrictMode>
);


