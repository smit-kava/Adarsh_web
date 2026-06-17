import {
    AppBar,
    Box,
    Button,
    Container,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    Typography,
    useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Routes } from '../Routing/routes';

const NAV_LINKS = [
    { label: 'Home', path: Routes.Home },
    { label: 'About', path: Routes.About },
    { label: 'Skills', path: Routes.Skills },
    { label: 'Experience', path: Routes.Experience },
    { label: 'Certificates', path: Routes.Certificates },
    { label: 'Contact', path: Routes.Contact },
];

const Header = () => {
    const theme = useTheme();
    const location = useLocation();
    const [drawerOpen, setDrawerOpen] = useState(false);

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
            borderBottom: active
                ? `2px solid ${theme.palette.primary.main}`
                : '2px solid transparent',
            borderRadius: 0,
            minWidth: 'auto',
            px: 1,
            py: 0.3,
            '&:hover': {
                color: theme.palette.primary.main,
                backgroundColor: 'transparent',
            },
        };
    };

    return (
        <>
            <AppBar
                position="sticky"
                color="inherit"
                elevation={0}
                sx={{
                    backdropFilter: 'blur(12px)',
                    bgcolor: 'rgba(255,255,255,0.85)',
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: { xs: '60px', md: '68px' } }}>
                        {/* Logo */}
                        <Typography
                            variant="h5"
                            noWrap
                            component={Link}
                            to={Routes.Home}
                            sx={{
                                fontWeight: 800,
                                color: theme.palette.primary.main,
                                textDecoration: 'none',
                                letterSpacing: '.15rem',
                                fontSize: { xs: '1.1rem', md: '1.35rem' },
                            }}
                        >
                            ADARSH.
                        </Typography>

                        {/* Desktop nav */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
                            {NAV_LINKS.map(({ label, path }) => (
                                <Button
                                    key={path}
                                    component={Link}
                                    to={path}
                                    sx={getButtonStyle(path)}
                                >
                                    {label}
                                </Button>
                            ))}
                        </Box>

                        {/* Right side */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            {/* Hire Me — always visible */}
                            <Button
                                component={Link}
                                to={Routes.Contact}
                                variant="contained"
                                sx={{
                                    fontWeight: 600,
                                    color: 'white',
                                    height: '36px',
                                    px: { xs: 2, md: 3 },
                                    fontSize: { xs: '0.78rem', md: '0.875rem' },
                                }}
                            >
                                Hire Me
                            </Button>

                            {/* Hamburger — mobile only */}
                            <IconButton
                                onClick={() => setDrawerOpen(true)}
                                sx={{ display: { xs: 'flex', md: 'none' }, color: 'text.primary' }}
                                aria-label="Open navigation menu"
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* ── Mobile Drawer ── */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                slotProps={{
                    paper: {
                        sx: {
                            width: 260,
                            bgcolor: 'background.default',
                            pt: 2,
                        },
                    },
                }}
            >
                {/* Close button */}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2, pb: 1 }}>
                    <IconButton onClick={() => setDrawerOpen(false)} aria-label="Close navigation menu">
                        <CloseIcon />
                    </IconButton>
                </Box>

                <List>
                    {NAV_LINKS.map(({ label, path }) => (
                        <ListItem key={path} disablePadding>
                            <ListItemButton
                                component={Link}
                                to={path}
                                onClick={() => setDrawerOpen(false)}
                                selected={isActive(path)}
                                sx={{
                                    px: 3,
                                    py: 1.5,
                                    borderLeft: isActive(path)
                                        ? `3px solid ${theme.palette.primary.main}`
                                        : '3px solid transparent',
                                    '&.Mui-selected': {
                                        bgcolor: 'transparent',
                                        color: theme.palette.primary.main,
                                    },
                                }}
                            >
                                <ListItemText
                                    primary={label}
                                    sx={{
                                        '& .MuiListItemText-primary': {
                                            fontWeight: isActive(path) ? 700 : 500,
                                            color: isActive(path)
                                                ? theme.palette.primary.main
                                                : theme.palette.text.primary,
                                        },
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    );
};

export default Header;
