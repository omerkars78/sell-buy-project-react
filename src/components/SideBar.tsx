import React, { useState } from 'react';
import { Button, Drawer, List, ListItem, ListItemText } from '@mui/material';

const MultiDirectionDrawer: React.FC = () => {
  const [state, setState] = useState({
    left: false,
    right: false,
    top: false,
    bottom: false,
  });

  const toggleDrawer = (
    anchor: 'left' | 'right' | 'top' | 'bottom',
    open: boolean
  ) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    // Tab veya Shift tuşlarına basıldığında çekmeceyi kapatmamak için bir kontrol
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
       (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: 'left' | 'right' | 'top' | 'bottom') => (
    <List>
      {/* Örnek içerik, burayı ihtiyacınıza göre özelleştirebilirsiniz */}
      <ListItem button>
        <ListItemText primary={`Öğe 1 - ${anchor}`} />
      </ListItem>
      <ListItem button>
        <ListItemText primary={`Öğe 2 - ${anchor}`} />
      </ListItem>
    </List>
  );

  return (
    <>
      {(['left', 'right', 'top', 'bottom'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </>
  );
};

export default MultiDirectionDrawer;
