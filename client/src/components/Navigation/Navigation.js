import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { navigationItems } from './NavigationItems';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import { useAuth0 } from "@auth0/auth0-react";

import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const drawerWidth = 280;

const Navigation = () => {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return null;
  }

  return (
    <Grid item xs={4}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <Typography
            variant="h7"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Playoff Fantasy Football
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          <LoginButton />
          {isAuthenticated && navigationItems.map((item, index) => (
            <ListItem button key={item.id} onClick={() => navigate(item.route)} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
          <LogoutButton/>
        </List>
      </Drawer>
    </Grid >
  );
}

export default Navigation;