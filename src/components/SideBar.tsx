import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const SideBar: React.FC = () => (
  <Drawer variant="permanent" anchor="left">
    <List>
      {/* Buraya menü öğeleri eklenebilir */}
      <ListItem button>
        <ListItemText primary="Ana Sayfa" />
      </ListItem>
      {/* Diğer ListItem bileşenleri */}
    </List>
  </Drawer>
);

export default SideBar;
