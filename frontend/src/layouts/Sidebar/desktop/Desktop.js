import React from 'react';

import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';

export default function Desktop({ drawer }) {
  return (
    <Drawer
      variant="permanent"
      sx={{ display: { xs: 'none', sm: 'block' } }}
      open
    >
      <Toolbar />
      {drawer}
    </Drawer>
  );
}
