import { Box, Button, Container, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const AboutSection = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box
      id="about"
      sx={{
        py: 8,
        backgroundColor: 'grey.100',
      }}
    >
      <Container maxWidth="xl" sx={{ px: 3 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 4,
          }}
        >
          {/* Image Section */}
          <Box
            sx={{
              width: { md: '50%' },
              mb: { xs: 4, md: 0 },
              flexShrink: 0,
            }}
          >
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Diagnostics Center"
              sx={{
                width: 1,
                height: 1,
                borderRadius: 2,
                boxShadow: 3,
                objectFit: 'cover',
              }}
            />
          </Box>

          {/* Content Section */}
          <Box
            sx={{
              width: { md: '50%' },
              pl: { md: 6 },
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 'bold',
                color: 'text.primary',
                mb: 2,
              }}
            >
              About Our Center
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                mb: 2,
              }}
            >
              Center Of Diagnostics is a state-of-the-art facility dedicated to providing accurate and
              timely diagnostic services. Our team of experienced radiologists and pathologists
              work together to deliver comprehensive results.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                mb: 3,
              }}
            >
              We are equipped with the latest technology and follow strict quality control measures
              to ensure the highest standards in diagnostic testing.
            </Typography>

            <Button
              variant="contained"
              color="primary"
              sx={{
                fontWeight: 'medium',
                py: 1.5,
                px: 4,
                borderRadius: 1,
                '&:hover': {
                  backgroundColor: 'primary.dark',
                }
              }}
            >
              Learn More
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSection;
