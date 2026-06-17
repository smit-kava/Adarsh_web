import { AppBar, Box, Button, Container, Toolbar, Typography, useTheme } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { Routes } from '../Routing/routes';





const Header = () => {
  const theme = useTheme();
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === Routes.Home) {
      return location.pathname === '/' || location.pathname === Routes.Home;
    }
    return location.pathname === path;
  };

  const getButtonStyle = (path: string) => {
    const active = isActive(path);
    return {
      fontWeight: 700,
      color: active ? theme.palette.primary.main : theme.palette.text.primary,
      borderBottom: active ? `2px solid ${theme.palette.primary.main}` : '2px solid transparent',
      borderRadius: 0,
      minWidth: 'auto',
      px: 1,
      py: 0.3,
      '&:hover': {
        color: theme.palette.primary.main,
        backgroundColor: 'transparent',
      }
    };
  };


  return (
    <AppBar position="sticky" color="inherit"  >
      <Container maxWidth="xl" sx={{ borderRadius: 'none' }}>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
            <Typography
              variant="h5"
              noWrap
              component={Link}
              to={Routes.Home}
              sx={{
                fontWeight: 800,
                color: theme.palette.primary.main,
                textDecoration: 'none',
                letterSpacing: '.2rem'
              }}
            >
              ADARSH.
            </Typography>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 5 }}>
            <Button component={Link} to={Routes.Home} sx={getButtonStyle(Routes.Home)}>Home</Button>
            <Button component={Link} to={Routes.About} sx={getButtonStyle(Routes.About)}>About</Button>
            <Button component={Link} to={Routes.Skills} sx={getButtonStyle(Routes.Skills)}>Skills</Button>
            <Button component={Link} to={Routes.Experience} sx={getButtonStyle(Routes.Experience)}>Experience</Button>
            <Button component={Link} to={Routes.Certificates} sx={getButtonStyle(Routes.Certificates)}>Certificates</Button>
            <Button component={Link} to={Routes.Contact} sx={getButtonStyle(Routes.Contact)}>Contact</Button>
          </Box>

          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Button component={Link} to={Routes.Contact} sx={{ fontWeight: 600, color: "whitesmoke", height: '35px' }} variant='contained'>Hire Me</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
