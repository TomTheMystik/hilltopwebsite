import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import {colors} from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.blue[400],
    },
    secondary: {
      main: colors.deepOrange[500],
    },
  },
});

export default theme;