// components/Content.tsx
import React, { ReactNode } from 'react';
import { Container } from '@mui/material';

interface ContentProps {
  children: ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <main className="flex-grow">
      <Container maxWidth="lg" className="py-4">
        {children}
      </Container>
    </main>
  );
};

export default Content;
