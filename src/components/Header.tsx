// components/Header.tsx
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header: React.FC = () => {
  return (
    <AppBar position="static" color="primary" className="shadow-lg">
      <Toolbar className="justify-center">
        <Typography variant="h6" className="text-white">
          Web Sitemizin Başlığı
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
