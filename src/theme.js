import { createMuiTheme } from '@material-ui/core/styles';
import {colors} from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.green[400],
    },
    secondary: {
      main: colors.deepOrange[500],
    },
    drawer: {
      main: colors.lightBlue[100],
    },
  },
  headerIcons: {
    borderLeft: 40,
    fontSize: 30,
    color: 'white',
  },
  
});

export default theme;