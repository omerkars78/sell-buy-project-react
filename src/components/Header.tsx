// components/Header.tsx
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <AppBar position="static" color="primary" className={className}>
      <Toolbar className="justify-center">
        <Typography variant="h6" className="text-white">
          Web Sitemizin Başlığı
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
