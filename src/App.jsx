import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import {
    Box,
    ThemeProvider,
    createTheme,
    CssBaseline
} from '@mui/material';


import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
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
                    <MainContent />
                    <Footer />

                </Box>
            </Router>
        </ThemeProvider>
    );
}

export default App;
