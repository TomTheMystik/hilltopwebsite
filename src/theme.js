import { createMuiTheme } from '@material-ui/core/styles';
import {colors} from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.green[800],
    },
    secondary: {
      main: colors.deepOrange[500],
    },
    drawer: {
      main: colors.green[200],
      //main: colors.lightGreen[200],
    },
  },
  headerIcons: {
    borderLeft: 40,
    fontSize: 30,
    color: 'white',
  },
  
});

export default theme;