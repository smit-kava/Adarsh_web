import React from 'react';
import Header from './Header';
import Footer from './Footer/Footer';
import { Box, Container } from '@mui/material';
import { useLocation } from 'react-router-dom';
import AuroraBackground from '../components/AuroraBackground';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname.toLowerCase() === '/home' || location.pathname === '/';
  const isLandingPage = location.pathname === '/';

  if (isLandingPage) {
    return <>{children}</>;
  }

  return (
    <AuroraBackground>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'transparent', color: 'text.primary' }}>
        <Header />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: isHomePage ? 0 : { xs: 3, sm: 4, md: 6 },
            px: { xs: 2, sm: 3, md: 0 },
          }}
        >
          <Container maxWidth="xl">
            {children}
          </Container>
        </Box>
        <Footer />
      </Box>
    </AuroraBackground>
  );
};

export default Layout;
