// components/MainLayout.tsx
import React, { ReactNode } from 'react';
import Header from './Header';
import Sidebar from './SideBar';
import Content from './Content';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

interface MainLayoutProps {
  children?: ReactNode;  // Make children optional
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Sidebar />
      <Content>
        {children || <Outlet />} {/* Use Outlet if children is not provided */}
      </Content>
      <Footer />
    </>
  );
};

export default MainLayout;
