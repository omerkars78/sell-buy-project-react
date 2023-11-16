// components/Sidebar.tsx
import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';

const Sidebar: React.FC = () => {
  return (
    <AppBar position="static" color="default" className="shadow-md">
      <Toolbar className="justify-between">
        <Button color="inherit">Ana Sayfa</Button>
        <Button color="inherit">Giriş Yap</Button>
        <Button color="inherit">Kayıt Ol</Button>
        {/* Diğer menü öğeleri */}
      </Toolbar>
    </AppBar>
  );
};

export default Sidebar;
