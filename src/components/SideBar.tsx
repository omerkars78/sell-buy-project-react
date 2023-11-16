// components/Sidebar.tsx
import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside style={{ backgroundColor: 'lightgray', padding: '10px' }}>
      <ul>
        <li>Ana Sayfa</li>
        <li>Giriş Yap</li>
        <li>Kayıt Ol</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
