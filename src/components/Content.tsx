import React, { ReactNode } from 'react';

interface ContentProps {
  children: ReactNode;
  className?: string; // className prop'u opsiyonel
}

// Content.tsx
const Content: React.FC<ContentProps> = ({ children, className }) => {
  return (
    <div className={`content-container ${className}`} style={{ marginTop: '60px' }}>
      {children}
    </div>
  );
};


export default Content;
