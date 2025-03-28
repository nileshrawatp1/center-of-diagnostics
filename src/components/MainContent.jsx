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

const services = [
    { title: 'Ultrasound', icon: <MedicalServices fontSize="large" />, description: 'High-resolution ultrasound imaging' },
    { title: 'CT Scan', icon: <Computer fontSize="large" />, description: 'Advanced CT scanning technology' },
    { title: 'Blood Testing', icon: <Bloodtype fontSize="large" />, description: 'Complete blood work analysis' },
    { title: 'Cardiology', icon: <MonitorHeart fontSize="large" />, description: 'Cardiac assessment & monitoring' },
];

const MainContent = () => {
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
                            <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
                                Advanced Diagnostic Care
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
                    <Grid container spacing={4} sx={{ px: 2 }}>
                        {services.map((service, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <Card sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'transform 0.3s',
                                    '&:hover': { transform: 'translateY(-5px)' }
                                }}>
                                    <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                                        <Box sx={{ color: 'primary.main', mb: 2 }}>
                                            {service.icon}
                                        </Box>
                                        <Typography variant="h5" gutterBottom>
                                            {service.title}
                                        </Typography>
                                        <Typography variant="body1" color="text.secondary">
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

export default MainContent
