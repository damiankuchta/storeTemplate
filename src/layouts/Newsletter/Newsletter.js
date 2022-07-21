import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Newsletter() {
  return (
    <Box
      as="footer"
      type="email"
      sx={{
        padding: '150px',
        width: '100%',
        backgroundColor: '#3c3c3c',
        borderRadius: 0,
      }}
    >
      <TextField
        id="outlined-basic"
        label="Your E-mail"
        variant="filled"
        sx={{
          backgroundColor: 'white',
          borderRadius: 0,
        }}
        
      />
    </Box>
  );
}
