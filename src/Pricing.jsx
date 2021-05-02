import React, {useState, useEffect} from 'react';
import CustomDrawer from "./CustomDrawer";
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: 'green',
    color: theme.palette.common.white,
  },
  body: {
    fontWeight: 'bold',
  },
}))(TableCell);

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    header: {
      fontSize: 20
    },
    tableRightBorder : { borderLeft: 0, borderTop: 0, borderRight: 1, borderColor: 'white', borderStyle: 'solid'},
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
      paddingTop: 100,
      padding: 50
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    table: {
      minWidth: 650,
    },

  }));

const Room3 = (props) => {

    const classes = useStyles();

    let {pricingDisabled} = props;
    pricingDisabled = true;

    function createData(room, continetalOneNight, continentalTwoNights, cookedOneNight, cookedTwoNights) {
      return { room, continetalOneNight, continentalTwoNights, cookedOneNight, cookedTwoNights };
    }
    
    const rows = [
      createData('Single', '£40.00', '£30.00', '£50.00', '£40.00'),
      createData('Double', '£50.00', '£40.00', '£70.00', '£50.00'),
      createData('Child 5-18', '£20.00pp', '£15.00pp', '£25.00pp', '£20.00pp'),
      createData('Child 0-5', 'free', 'free', 'free', 'free')
    ];

    const oneNight = 'One night - Price per night';
    const moreNights = 'Three or more nights - Price per night';

    return (
        <div className={classes.root}>
          <CustomDrawer {...props} pricingDisabled={pricingDisabled} title = "Pricing" />
            <main className={classes.content}>
              <Typography variant='body1' paragraph>To reserve a room there is a non-refundable reservation fee based on single rate occupancy per night. The balance for additional guests is paid on arrival.</Typography>
              <Typography variant='body1' paragraph>We offer a Special Rate for weekly bookings of the two apartments. Please contact us for special rates.</Typography>
              <Typography variant='body1' paragraph>Once you complete your reservation you will receive a confirmation email. </Typography>
              <Typography variant='body1' paragraph>We use PayPal for our transactions. We do not hold your card details and you can use PayPal without having an account with them. </Typography>
              <Typography variant='body1' paragraph>If you prefer to speak with us directly, or have any questions or queries, please see our Contact page or call us anytime.</Typography>
              <Typography variant='body1' paragraph>If you need to cancel your booking, please let us know as soon as possible so that we may offer the room to someone else. </Typography>
              <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                  <TableHead className={classes.header}>
                    <TableRow>
                      <StyledTableCell></StyledTableCell>
                      <StyledTableCell align="right">Bed & Continental Breakfast</StyledTableCell>
                      <StyledTableCell align="right" className={classes.tableRightBorder}></StyledTableCell>
                      <StyledTableCell align="right">Bed & Full Cooked Irish Breakfast</StyledTableCell>
                      <StyledTableCell align="right"></StyledTableCell>
                    </TableRow>
                    <TableRow>
                      <StyledTableCell></StyledTableCell>
                      <StyledTableCell align="right" className={classes.tableRightBorder}>{oneNight}</StyledTableCell>
                      <StyledTableCell align="right" className={classes.tableRightBorder}>{moreNights}</StyledTableCell>
                      <StyledTableCell align="right" className={classes.tableRightBorder}>{oneNight}</StyledTableCell>
                      <StyledTableCell align="right" className={classes.tableRightBorder}>{moreNights}</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.room}>
                        <TableCell component="th" scope="row">
                          {row.room}
                        </TableCell>
                        <TableCell align="right">{row.continetalOneNight}</TableCell>
                        <TableCell align="right">{row.continentalTwoNights}</TableCell>
                        <TableCell align="right">{row.cookedOneNight}</TableCell>
                        <TableCell align="right">{row.cookedTwoNights}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </main>
        </div>
    );
}

export default Room3;
