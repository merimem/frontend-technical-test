import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {siteTitle } from "./index"

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"  style={{ background: 'rgb(255 107 24 / 73%)' }}>
        <Toolbar>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <span style={{ "display": "block", "textAlign": "center"}}>
                {siteTitle}
            </span>
          </Typography>
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}