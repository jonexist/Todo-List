import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#404258',
    },
    secondary: {
      main: '#474E68',
    },
    checkbox: {
      main: '#24242D',
    },
    delete: {
      main: '#EF4040',
    },
    itemBox: {
      main: '#FFFFFF',
    },
    listContainer: {
      main: '#EEEDEB',
    },
  },
  typography: {
    fontFamily: 'Outfit, sans-serif',
  },
});

export default theme;
