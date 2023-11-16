// components/Content.tsx
import React, { ReactNode } from 'react';

interface ContentProps {
  children: ReactNode;
  className?: string;
}

const Content: React.FC<ContentProps> = ({ children, className }) => {
  return (
    <main className={className}>
      {children}
    </main>
  );
};

export default Content;
