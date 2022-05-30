import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LoginIcon from '@mui/icons-material/Login';

import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    if (isAuthenticated) {
        return null;
    }

    return (
        <ListItem button onClick={() => loginWithRedirect()} disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    <LoginIcon />
                </ListItemIcon>
                <ListItemText primary="Sign In" />
            </ListItemButton>
        </ListItem>
    );
}

export default LoginButton;