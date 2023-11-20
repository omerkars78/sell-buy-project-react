import React, { ReactNode } from 'react';

interface ContentProps {
  children: ReactNode;
  className?: string; // className prop'u opsiyonel
}

// Content.tsx
// Content.tsx
const Content: React.FC<ContentProps> = ({ children, className }) => {
  return (
    <div className={`content-container ${className}`} style={{ marginTop: '60px', display: 'flex' , flexDirection: 'row'}}>
      <div style={{ flex: 2 }}> {/* Sol Reklam Alanı */}</div>
      <div style={{ flex: 8 }}>{children}</div> {/* Ana İçerik */}
      <div style={{ flex: 2 }}> {/* Sağ Reklam Alanı */}</div>
    </div>
  );
};


export default Content;
