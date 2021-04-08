import React, { useState } from 'react';
import CustomDrawer from "./CustomDrawer";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from '@material-ui/core/';
import './map.css'
import MapContainer from './MapContainer';
import Grid from '@material-ui/core/Grid';
import './map.css'
import ReCAPTCHA from "react-google-recaptcha";
import clsx from 'clsx';
import './myStyles.css';


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
      margin:10,
      padding: 50
    },
    container: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      paddingLeft: theme.spacing(1),
    }

  }));

const ContactScreen = (props) => {

    const classes = useStyles();
    const directionsUrl = "https://www.google.com/maps/dir//Hilltop+Drumbo+Bed+%26+Breakfast,+60+Tullyard+Rd,+Lisburn+BT27+5JN/@54.5032779,-6.0407118,12z/data=!4m9!4m8!1m0!1m5!1m1!1s0x4861056c63235de9:0x4a2fb96902262137!2m2!1d-5.9706723!2d54.5031985!3e0";
    const [styleName, setStyleName] = useState('invisible');

    let {contactDisabled} = props;
    contactDisabled = true;

    function onChange(value) {
       setStyleName('');
    }

    function onError(value) {
      setStyleName('invisible');
   }

    return (
        <div className={classes.root}>
          <CustomDrawer {...props} contactDisabled={contactDisabled} title = "Contact" />
            <main className={classes.content}>

            <Grid container spacing={4} direction="row">
             <Grid item xs={12} md={6} spacing={4}>
                <Typography variant='h5' paragraph>To reserve a room there is a non-refundable reservation fee based on single rate occupancy per night. The balance for additional guests is paid on arrival.</Typography>
                <Link onClick={()=> window.open(directionsUrl, "_blank")} style={{cursor:'pointer'}}>
                  <Typography variant='body1' paragraph>Directions</Typography>
                </Link>
                <MapContainer/>
            </Grid>
                    
            <Grid item xs={12} md={6} spacing={4}>
                <Typography variant='h5' paragraph>Please prove you are not a robot to see our contact info:</Typography>                
                <ReCAPTCHA
                  sitekey="6LfIZJgaAAAAAKX3KL-SZreKosEVvlpUU536PegD"
                  onChange={onChange}
                  onExpired={onError}
                />
                <Typography variant='h5' paragraph className={clsx(classes.container, styleName)}>Email: &nbsp;&nbsp;&nbsp;&nbsp; info@hilltopdrumbo.com</Typography>
                <Typography variant='h5' paragraph className={clsx(classes.container, styleName)}>Tel: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 028 9082 6021</Typography>
                <Typography variant='h5' paragraph className={clsx(classes.container, styleName)}> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (0044) 28 9082 6021</Typography>
            </Grid>
                
      </Grid>
   </main>
</div>
    );
}

export default ContactScreen;
