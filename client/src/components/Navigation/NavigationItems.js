import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import GroupsIcon from '@mui/icons-material/Groups';
import LogoutIcon from '@mui/icons-material/Logout';
import NewspaperIcon from '@mui/icons-material/Newspaper';

export const navigationItems = [
    {
        id: 0,
        icon: <NewspaperIcon />,
        label: 'News',
        route: 'news',
    },
    {
        id: 1,
        icon: <GroupsIcon />,
        label: 'My Team',
        route: 'teams',
    },
    {
        id: 2,
        icon: <EqualizerIcon />,
        label: 'League Standings',
        route: 'league',
    },
    {
        id: 3,
        icon: <AdminPanelSettingsIcon />,
        label: 'Administration',
        route: 'admin',
    },
    {
        id: 4,
        icon: <AccountCircleIcon />,
        label: 'My Profile',
        route: 'profile',
    },
    {
        id: 5,
        icon: <LogoutIcon />,
        label: 'Sign Out',
        route: ''
    }
]