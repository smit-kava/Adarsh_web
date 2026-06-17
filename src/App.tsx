import { useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import Routing from './Routing/Routing';
import theme from './theme';
import { LoadingPage } from './Pages';

function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {!loaded ? (
        <LoadingPage onComplete={() => setLoaded(true)} />
      ) : (
        <Routing />
      )}
    </ThemeProvider>
  );
}

export default App;
