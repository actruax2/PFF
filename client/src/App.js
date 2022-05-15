import { CssBaseline } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import Navigation from './components/Navigation/Navigation'

function App() {
  return (
    <Box>
      <CssBaseline enableColorScheme />
      <Navigation></Navigation>
    </Box>
  );
}

export default App;