import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import { Home, People, Assessment, Settings } from "@mui/icons-material";
import { Link, Outlet } from "react-router-dom";

const drawerWidth = 240;

const Dashboard = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItem button component={Link} to="/partners">
              <ListItemIcon>
                <People />
              </ListItemIcon>
              <ListItemText primary="Gestion des Partenaires" />
            </ListItem>
            <ListItem button component={Link} to="/projects">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Gestion des Projets" />
            </ListItem>
            <ListItem button component={Link} to="/reports">
              <ListItemIcon>
                <Assessment />
              </ListItemIcon>
              <ListItemText primary="Statistiques et Rapports" />
            </ListItem>
          </List>
          <List>
            <ListItem button component={Link} to="/settings">
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Paramètres" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3, mt: 8 }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Dashboard;
