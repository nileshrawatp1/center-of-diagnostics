import React, { useState } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';

import {
    AppBar,
    Toolbar,
    IconButton,
    Drawer,
    Box,
    Button,
    Grid,
    Container,
    useMediaQuery,
    createTheme,
} from '@mui/material';

import {
    Menu,
    Close,
} from '@mui/icons-material';

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

const Navbar = () => {
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [mobileOpen, setMobileOpen] = useState(false);


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box sx={{ width: 250, p: 2 }}>
            <IconButton onClick={handleDrawerToggle} sx={{ mb: 2 }}>
                <Close />
            </IconButton>
            <Grid container direction="column" spacing={2}>
                <Button component={Link} to="/" color="inherit">Home</Button>
                <Button component={Link} to="/services" color="inherit">Services</Button>
                <Button component={Link} to="/about" color="inherit">About</Button>
                <Button component={Link} to="/contact" color="inherit">Contact</Button>
            </Grid>
        </Box>
    );

    return (
        <>
            <AppBar position="sticky" sx={{ bgcolor: 'background.default', color: 'text.primary', boxShadow: 1 }}>
                <Container maxWidth="xl">
                    <Toolbar>
                        <Box
                            component="img"
                            src="/images/logo.png"
                            sx={{
                                height: 70,
                                width: 200,
                                padding: 0.5,
                                filter: 'brightness(0) saturate(100%) drop-shadow(1px 1px 1px rgba(0,0,0,0.2)) drop-shadow(2px 2px 2px rgba(0,0,0,0.15))',
                                transition: 'all 0.3s ease-in-out',
                                display: 'block',
                                mx: 'auto',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    filter: 'brightness(0) saturate(100%) drop-shadow(2px 2px 2px rgba(0,0,0,0.3)) drop-shadow(4px 4px 4px rgba(0,0,0,0.2))',
                                }
                            }}
                            alt="logo"
                        />
                        <Box sx={{ flexGrow: 1 }} />
                        {!isMobile && (
                            <Box sx={{ display: 'flex', gap: 3 }}>
                                <Button component={Link} to="/" color="inherit">Home</Button>
                                <Button component={Link} to="/services" color="inherit">Services</Button>
                                <Button component={Link} to="/about" color="inherit">About</Button>
                                <Button component={Link} to="/contact" color="inherit">Contact</Button>
                            </Box>
                        )}
                        {isMobile && (
                            <IconButton
                                color="inherit"
                                edge="end"
                                onClick={handleDrawerToggle}
                            >
                                <Menu />
                            </IconButton>
                        )}
                    </Toolbar>
                </Container>
            </AppBar>

            <Box component="nav">
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{ keepMounted: true }}
                    sx={{
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </>
    )
}

export default Navbar
