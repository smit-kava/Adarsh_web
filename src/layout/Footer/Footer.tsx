import React from 'react';
import { Box, Typography, Container, IconButton } from '@mui/material';
import { Icons } from '../../assets/Icons/Icons';

const Footer = () => {
  return (
    <Box component="footer" sx={{ display: 'flex', bgcolor: 'background.paper', py: 4, mt: 'auto', borderTop: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ fontWeight: 500, justifyContent: 'flex-start' }}>
          © {new Date().getFullYear()} Adarsh. All rights reserved.
        </Typography>

        <Box sx={{ mt: 2, display: 'flex', flexDirection: 'row', justifyContent: 'end', gap: 2 }}>
          <IconButton aria-label="linkedin" color="inherit" component="a" href="https://linkedin.com" target="_blank">
            <Icons.LinkedIn />
          </IconButton>
          <IconButton aria-label='Email' color='inherit' component="a" href="https://Gmail.com" target='_blank'>
            <Icons.Mail />
          </IconButton>
          <IconButton aria-label='Email' color='inherit' component="a" href="https://Gmail.com" target='_blank'>
            <Icons.Menu />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
