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
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-grow">
        <Sidebar />
        <Content>
          {children || <Outlet />} {/* children veya Outlet kullanımı */}
        </Content>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
