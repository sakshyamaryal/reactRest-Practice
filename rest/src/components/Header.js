import React from 'react';
import { AppBar, Toolbar, Typography, CssBaseline } from "@mui/material";

function Header() {
  return (
    <>
      <CssBaseline />
      <AppBar position="static" style={{ borderBottom: '1px solid #dadada', backgroundColor: 'white', boxShadow: 'none' }}>
        <Toolbar>       
          <Typography variant="h6" color="textPrimary" noWrap>
            BlogmeUp
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
