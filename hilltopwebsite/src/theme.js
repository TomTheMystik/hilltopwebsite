import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
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
  drawer: {
    backgroundColor: {
      main: colors.blue[500],
    } 
  }
});

export default theme;