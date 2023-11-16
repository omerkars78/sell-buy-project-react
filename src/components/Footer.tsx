// components/Footer.tsx
import React from 'react';
import { Container } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <footer className="bg-lightblue text-center p-4 mt-auto">
      <Container maxWidth="lg">
        <p className="m-0">Haklarımız Saklıdır © 2023</p>
      </Container>
    </footer>
  );
};

export default Footer;
