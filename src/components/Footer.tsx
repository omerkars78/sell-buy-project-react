// components/Footer.tsx
import React from 'react';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={className}>
      <p>Haklarımız Saklıdır © 2023</p>
    </footer>
  );
};

export default Footer;
