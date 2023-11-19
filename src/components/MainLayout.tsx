// MainLayout.tsx
import React, { ReactNode } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Content className="flex-grow">
        {children || <Outlet />}
      </Content>
      <Footer />
    </div>
  );
};

export default MainLayout;
