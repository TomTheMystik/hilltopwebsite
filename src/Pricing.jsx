import React, {useState, useEffect} from 'react';
import CustomDrawer from "./CustomDrawer";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PhotoViewer from './PhotoViewer';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
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

  }));

const Room3 = (props) => {

    const classes = useStyles();

    let {pricingDisabled} = props;
    pricingDisabled = true;

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
                <table width="300" border="1" align="center" cellpadding="2" cellspacing="0" bordercolor solid="#000000">
                  <tr>
                    <td colspan="2"><div align="center"><span class="h2">Room 1 and Room 2</span></div></td>
                    </tr>
                  <tr>
                    <td width="216"><div align="left"><span class="style3">Single person per night </span></div></td>
                    <td width="57"><span class="style3">£30</span></td>
                  </tr>
                  <tr>
                    <td><div align="left"><span class="style3">Couple sharing per night </span></div></td>
                    <td><span class="style3">£45</span></td>
                  </tr>
                  <tr>
                    <td><div align="left"><span class="style3"> Children under 5  </span></div></td>
                    <td><span class="style3">free</span></td>
                  </tr>
                  <tr>
                    <td><div align="left"><span class="style3">Children 5 - 16 per night</span></div></td>
                    <td><span class="style3">£15</span></td>
                  </tr>
                  <tr>
                    <td colspan="2"><div align="center"><span class="h2">Room 3 and Room 4</span></div></td>
                    </tr>
                  <tr>
                    <td><div align="left"><span class="style3">Single person per night </span></div></td>
                    <td><span class="style3">£45</span></td>
                  </tr>
                  <tr>
                    <td><div align="left"><span class="style3">Couple sharing per night</span></div></td>
                    <td><span class="style3">£60</span></td>
                  </tr>
                  <tr>
                    <td><div align="left"><span class="style3">Children under 5 </span></div></td>
                    <td><span class="style3">free</span></td>
                  </tr>
                  <tr>
                    <td><div align="left"><span class="style3">Children 5 - 16 per night</span></div></td>
                    <td><span class="style3">£22.50</span></td>
                  </tr>
                  <tr>
                    <td><div align="left"><span class="h2"><span class="style3">SPECIAL* - 1 week self contained* (up to 4 people) </span></span><span class="style5">*Guests supply their own towels, bedding &amp; utensils etc.</span></div></td>
                    <td><span class="h2">£250 </span></td>
                  </tr>
                </table>
            </main>
        </div>
    );
}

export default Room3;
