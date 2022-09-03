import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';

export default function Navbar({ setIsDrawerDisplayed }) {
  const handleDrawerToggle = () => {
    setIsDrawerDisplayed(true);
  };

  return (
    <AppBar position="fixed" sx={{ display: { sm: 'none' } }}>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Responsive drawer
        </Typography>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
