import { CssBaseline, Grid } from '@mui/material';
import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation'

function App() {
  return (
    <Grid container>
      <CssBaseline enableColorScheme />
      <Navigation />
      <Outlet />
    </Grid>
  );
}

export default App;