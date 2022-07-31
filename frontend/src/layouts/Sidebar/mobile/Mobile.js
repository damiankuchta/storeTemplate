import React from 'react'

import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';

export default function Mobile({isDrawerDisplayed, handleDrawerClose, drawer}) {
  return (
    <Drawer
    variant="temporary"
    open={isDrawerDisplayed}
    onClose={handleDrawerClose}
    ModalProps={{
      keepMounted: true,
    }}
  >
    <Toolbar />
    {drawer}
  </Drawer>
  )
}