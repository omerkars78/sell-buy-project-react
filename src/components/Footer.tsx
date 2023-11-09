import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer: React.FC = () => (
  <Box component="footer" sx={{ p: 2, bgcolor: 'background.paper' }}>
    <Typography variant="body1" align="center">
      My Footer
    </Typography>
  </Box>
);

export default Footer;
