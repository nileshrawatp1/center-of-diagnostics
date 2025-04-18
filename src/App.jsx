import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import {
    Box,
    ThemeProvider,
    createTheme,
    CssBaseline
} from '@mui/material';


import Navbar from './components/Navbar';
import Services from './components/Services';
import Footer from './components/Footer';

const theme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    perspective: '1000px',
                },
            },
        },
    },
    palette: {
        primary: {
            main: '#cc0000',
        },
        secondary: {
            main: '#990000',
        },
        background: {
            default: '#ffffff',
            blue: '#5edef0'
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
    },
});

function App() {

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

                    <Navbar />
                    <Services />
                    <Footer />

                </Box>
            </Router>
        </ThemeProvider>
    );
}

export default App;
