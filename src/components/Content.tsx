// components/Content.tsx
import React, { ReactNode } from 'react';

interface ContentProps {
  children: ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <main style={{ padding: '15px' }}>
      {children}
    </main>
  );
};

export default Content;
