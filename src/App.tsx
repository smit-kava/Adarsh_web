import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import Routing from './Routing/Routing';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routing />
    </ThemeProvider>
  );
}

export default App;
