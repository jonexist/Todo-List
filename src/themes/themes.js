import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#404258',
      light: '#FFFFFF',
      dark: '#24242D',
    },
    secondary: {
      main: '#474E68',
      light: '#EEEDEB',
    },
    error: {
      main: '#EF4040',
    },
  },
  typography: {
    fontFamily: 'Outfit, sans-serif',
  },
});

export default theme;
