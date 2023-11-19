import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const userLoggedIn = false; // Bu değeri uygulamanızın durumuna göre ayarlayın.

  return (
    <AppBar position="fixed" color="primary" className={className}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Web sitesi başlığı */}
        <Typography variant="h6" className="text-white" sx={{ mr: 2 }}>
          Web Sitemizin Başlığı
        </Typography>

        {/* Ana menüler */}
        <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }}>
          <Button color="inherit">Ana Menü 1</Button>
          <Button color="inherit">Ana Menü 2</Button>
          {/* Daha fazla menü eklenebilir */}
        </Box>

        {/* Login/Logout butonları */}
        {userLoggedIn ? (
          <Button color="inherit">Çıkış Yap</Button>
        ) : (
          <Button color="inherit">Giriş Yap</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
