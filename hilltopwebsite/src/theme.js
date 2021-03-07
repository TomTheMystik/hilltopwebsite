import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import {colors} from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.green[500],
    },
    secondary: {
      main: colors.deepOrange[500],
    },
  },
  headerIcons: {
    borderLeft: 40,
    fontSize: 30,
    color: 'white',
  },
});

export default theme;