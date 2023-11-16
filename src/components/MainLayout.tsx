// components/MainLayout.tsx
import React, { ReactNode } from 'react';
import Header from './Header';
import Sidebar from './SideBar';
import Content from './Content';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

interface MainLayoutProps {
  children?: ReactNode;  // children prop'u opsiyonel
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header className="w-full" /> {/* Ensure Header is full width */}
      <div className="flex flex-grow w-full">
        <Sidebar  /> {/* Sidebar should stretch full height */}
        <Content className="flex-grow">
          {children || <Outlet />}
        </Content>
      </div>
      <Footer className="w-full" /> {/* Ensure Footer is full width */}
    </div>
  );
};


export default MainLayout;
