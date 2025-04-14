import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import {
    Box,
    Typography,
    Button,
    Grid,
    Container,
} from '@mui/material';

import {
    Phone,
    Email,
    LocationOn,
} from '@mui/icons-material';


const Footer = () => {
    return (
        <div>
            <Box component="footer" sx={{ bgcolor: 'secondary.main', color: 'white', mt: 'auto' }}>
                <Container maxWidth="lg" sx={{ py: 6 }}>
                    <Grid container spacing={1} sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        position: 'relative'
                    }}>
                        <Grid item xs={12} md={4}>
                            <Typography variant="h6" gutterBottom>Contact Us</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                <LocationOn sx={{ mr: 1 }} />
                                <Typography
                                    variant="body1"
                                    sx={{
                                        whiteSpace: 'pre-line', // Preserves line breaks
                                        maxWidth: 400, // Optional: Set max width for better wrapping
                                        textAlign: 'left' // Adjust alignment as needed
                                    }}
                                >
                                    {`MCF 8059, Sohna Road, Near Lal Kothi,
                                      Block F, Sanjay Colony, Ballabgarh,
                                      Faridabad, Haryana 121005`}
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                <Phone />
                                <Typography>
                                    <Button
                                        component="a"
                                        href="tel:9319319994"
                                        sx={{
                                            color: 'background.default',
                                            '&:hover': {
                                                color: 'background.blue',
                                                backgroundColor: 'transparent',
                                                fontWeight: 'bolder',
                                            }
                                        }}
                                    >
                                        +91 931-931-9994
                                    </Button>
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                <Phone />
                                <Typography>
                                    <Button
                                        component="a"
                                        href="tel:9319319998"
                                        sx={{
                                            color: 'background.default',
                                            '&:hover': {
                                                color: 'background.blue',
                                                backgroundColor: 'transparent',
                                                fontWeight: 'bolder',
                                            }
                                        }}
                                    >
                                        +91 931-931-9998
                                    </Button>
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Email sx={{ mr: 1 }} />
                                <Typography>centerofdiagnostic01@gmail.com</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography variant="h6" gutterBottom>Quick Links</Typography>
                            <Button component={Link} to="/" color="inherit">Home</Button>
                            <br />
                            <Button component={Link} to="/services" color="inherit">Services</Button>
                            <br />
                            <Button component={Link} to="/about" color="inherit">About</Button>
                            <br />
                            <Button component={Link} to="/contact" color="inherit">Contact</Button>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography variant="h6" gutterBottom>Opening Hours</Typography>
                            <Typography>Mon-Sat: 8am - 8pm</Typography>
                            <Typography>Sun: 3am - 3pm</Typography>
                        </Grid>
                    </Grid>
                </Container>
                <Box sx={{ bgcolor: 'primary.main', py: 2 }}>
                    <Container maxWidth="xl">
                        <Typography align="center">
                            © {new Date().getFullYear()} Diagnostic Center. All rights reserved.
                        </Typography>
                    </Container>
                </Box>
            </Box>
        </div>
    )
}

export default Footer
