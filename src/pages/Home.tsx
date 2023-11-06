import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const HomePage: React.FC = () => {
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Ana Sayfa
      </Typography>
      {/* Ana sayfa içeriğiniz burada yer alacak */}
    </Box>
  );
};

export default HomePage;
