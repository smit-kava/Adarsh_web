import { Box, Typography, Container, IconButton } from '@mui/material';
import { Icons } from '../../assets/Icons/Icons';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        mt: 'auto',
        borderTop: '1px solid',
        borderColor: 'divider',
        bgcolor: 'transparent',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'center' },
            gap: 2,
          }}
        >
          {/* Left Side: Brand and Copyright Info */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 800,
                letterSpacing: '0.05em',
                color: 'text.primary',
                textTransform: 'uppercase',
              }}
            >
              ADARSH KAVA
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 350 }}>
              © {new Date().getFullYear()} Mechanical Design Engineering Portfolio. Built for Precision.
            </Typography>
          </Box>

          {/* Right Side: Links and Status */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'flex-start', sm: 'center' },
              gap: { xs: 2, sm: 4 },
            }}
          >
            {/* Social / Professional Icon Buttons */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton
                aria-label="linkedin"
                color="inherit"
                component="a"
                href="https://linkedin.com"
                target="_blank"
                sx={{
                  color: 'text.secondary',
                  '&:hover': { color: 'primary.main' },
                }}
              >
                <Icons.LinkedIn />
              </IconButton>
              <IconButton
                aria-label="Email"
                color="inherit"
                component="a"
                href="https://Gmail.com"
                target="_blank"
                sx={{
                  color: 'text.secondary',
                  '&:hover': { color: 'primary.main' },
                }}
              >
                <Icons.Mail />
              </IconButton>
              <IconButton
                aria-label="Menu"
                color="inherit"
                component="a"
                href="https://Gmail.com"
                target="_blank"
                sx={{
                  color: 'text.secondary',
                  '&:hover': { color: 'primary.main' },
                }}
              >
                <Icons.Menu />
              </IconButton>
            </Box>

            {/* System Status Indicator */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  bgcolor: '#10b981', // green dot
                  boxShadow: '0 0 8px #10b981', // subtle glow
                }}
              />
              <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                System Status: Nominal
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
