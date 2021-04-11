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
      height: '100%',
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

            <Grid container xs={12} spacing={4} direction="column">
             <Grid container xs={12} spacing={8} className={classes.container}>
                    <Typography variant='h5' style={{paddingTop: 10, paddingLeft: 30}} paragraph>To reserve a room there is a non-refundable reservation fee based on single rate occupancy per night. The balance for additional guests is paid on arrival.</Typography>
            </Grid>

            <Grid container xs={12} spacing={8} className={classes.container}>

                    <Grid item xs={6} className={classes.container}>
                    <Link onClick={()=> window.open(directionsUrl, "_blank")} style={{cursor:'pointer'}}>
                  <Typography variant='body1' paragraph>Directions</Typography>
                </Link>
                          <div style={{ height: '50vh', width: '100%' }}>
                          
                <MapContainer/>                           
                          </div>
                    </Grid>

                    

                    <Grid item xs={4} className={classes.container}>

                    <Typography variant='h4' style={{padding: 20}}> Directions: </Typography>
                    
                    <Typography variant='h5' style={{paddingLeft: 20}} paragraph>You will find us 3.5 miles from Lisburn City, on the hills where Down meets Antrim. We overlook the landscape of Belfast's Lagan Valley and Belfast City is just 8.5 miles away.
                        There are many hillside walks, duns and forests to explore within an easy distance.
                        Tullyard (our location) was once a fortified Celtic town and the surrounding area has much ancient history including the nearby Giants Ring and one of Ireland's oldest churches believed to have been founded by St Patrick.
                        Drumbo village is a small townland with ancient roots. The name is taken from 'ridge of the oxen' relating to its hill top location. It has the only remaining round tower (Drumbo Tower) in Ireland, which is believed to 
                        have been used to warn of invading vikings!</Typography>
                    </Grid>
            </Grid>
                    
            <Grid container xs={12} spacing={4} className={classes.container}>
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
