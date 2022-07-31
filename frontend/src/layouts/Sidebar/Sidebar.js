import React from 'react';
import Drawer from '@mui/material/Drawer';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemText from '@mui/material/ListItemText';

import menu from '../../data/menu';
import mapDictionary from '../../utils/mapDictionary';

import Mobile from './mobile/Mobile';
import Desktop from './desktop/Desktop';

export default function Sidebar({ isDrawerDisplayed, setIsDrawerDisplayed }) {
  const handleDrawerClose = () => {
    setIsDrawerDisplayed(false);
  };

  const drawer = (
    <List>
      {' '}
      {mapDictionary(menu, (key, text) => {
        return (
          <ListItem key={key} disablePadding>
            <ListItemButton>
              <ListItemText primary={key} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );

  return (
    <React.Fragment>
        <div></div>
      {/*<Mobile*/}
      {/*  isDrawerDisplayed={isDrawerDisplayed}*/}
      {/*  handleDrawerClose={handleDrawerClose}*/}
      {/*  drawer={drawer}*/}
      {/*/>*/}
      {/*<Desktop drawer={drawer} />*/}
    </React.Fragment>
  );
}
