import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LogoutIcon from '@mui/icons-material/Logout';

import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();

    if (!isAuthenticated) {
        return null;
    }

    return (
        <ListItem button onClick={() => logout({ returnTo: window.location.origin })} disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Sign Out" />
            </ListItemButton>
        </ListItem>
    );
}

export default LogoutButton;