import React, { useState } from 'react';
import {
    Box,
    Typography,
    Button,
    Grid,
    Card,
    CardContent,
    Container,
} from '@mui/material';

import {
    MedicalServices,
    ChevronRight,
    Bloodtype,
    MonitorHeart,
    Computer,
} from '@mui/icons-material';
import AboutSection from './AboutSection';
import FlipRoundedIcon from '@mui/icons-material/FlipRounded';

const services = [
    { title: 'Ultrasound', icon: <MedicalServices fontSize="large" />, description: 'High-resolution ultrasound imaging' },
    { title: 'CT Scan', icon: <Computer fontSize="large" />, description: 'Advanced CT scanning technology' },
    { title: 'Blood Testing', icon: <Bloodtype fontSize="large" />, description: 'Complete blood work analysis' },
    { title: 'Cardiology', icon: <MonitorHeart fontSize="large" />, description: 'Cardiac assessment & monitoring' },
    { title: 'FIBRO SCAN', icon: <FlipRoundedIcon fontSize="large" />, description: 'ASSESSING LIVER HEALTH' },
    { title: 'ECG', icon: <MonitorHeart fontSize="large" />, description: '12 CHANNEL ECG MONITORING' },
    { title: 'INTERVENTION PROCEDURE', icon: <MonitorHeart fontSize="large" />, description: 'PIGTAIL, FNAC, VIOPSY, DRANAGE TUBES' },
];

const Services = () => {
    return (
        <>
            <Box component="main" sx={{ flexGrow: 1 }}>
                {/* Hero Section */}
                <Box sx={{
                    bgcolor: 'primary.main',
                    color: 'white',
                    py: 10,
                    backgroundImage: 'url(/images/hero-bg.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                    <Container maxWidth="xl">
                        <Box sx={{
                            bgcolor: 'rgba(0,0,0,0.6)',
                            p: 4,
                            borderRadius: 2,
                            maxWidth: 800,
                            textAlign: 'center',
                            mx: 'auto'
                        }}>
                            <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
                                CENTER OF DIAGNOSTIC
                            </Typography>
                            <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
                                Precision Diagnostics with Compassion
                            </Typography>
                            <Button
                                variant="contained"
                                color="secondary"
                                size="large"
                                endIcon={<ChevronRight />}
                            >
                                Book Appointment
                            </Button>
                        </Box>
                    </Container>
                </Box>

                {/* Services Section */}
                <Container maxWidth="xl" sx={{ py: 8 }}>
                    <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ fontWeight: 700 }}>
                        Our Services
                    </Typography>
                    <Grid
                        container
                        spacing={3}
                        sx={{
                            justifyContent: "center",
                            px: 2,
                            "& .MuiGrid-item": {
                                display: "flex",
                                justifyContent: "center",
                                maxWidth: { xs: '50%', sm: '33%', md: '25%' }, // Responsive max-width
                                flexBasis: { xs: '50%', sm: '33%', md: '25%' },
                            }
                        }}
                    >
                        {services.map((service, index) => (
                            <Grid
                                item
                                key={index}
                                xs={6}  // 2 cards per row on mobile
                                sm={4}  // 3 cards per row on small tablets
                                md={3}  // 4 cards per row on desktop
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    p: 1.5 // Adjust padding for better spacing
                                }}
                            >
                                <Card sx={{
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'transform 0.3s',
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                        boxShadow: 3
                                    }
                                }}>
                                    <CardContent sx={{
                                        flexGrow: 1,
                                        textAlign: 'center',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        px: 2,
                                        py: 3
                                    }}>
                                        <Box sx={{
                                            color: 'primary.main',
                                            mb: 2,
                                            fontSize: { xs: '2rem', md: '2.5rem' }
                                        }}>
                                            {service.icon}
                                        </Box>
                                        <Typography variant="h5" gutterBottom>
                                            {service.title}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            color="text.secondary"
                                            sx={{
                                                flexGrow: 1,
                                                fontSize: { xs: '0.875rem', sm: '1rem' } // Responsive text
                                            }}
                                        >
                                            {service.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            <Box>
                <AboutSection />
            </Box>
        </>
    )
}

export default Services
