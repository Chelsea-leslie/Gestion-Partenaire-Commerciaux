import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#2E9BEF" }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Menu
        </Typography>
        <Button color="inherit">Compte</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
