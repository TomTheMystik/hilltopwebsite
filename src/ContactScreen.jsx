import React, {useState, useEffect} from 'react';
import CustomDrawer from "./CustomDrawer";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import GoogleMapReact from 'google-map-react';
import Grid from '@material-ui/core/Grid';
import './map.css'
import { Icon } from '@iconify/react'
import RoomIcon from '@material-ui/icons/Room';
import ReCAPTCHA from "react-google-recaptcha";
import clsx from 'clsx';
import './myStyles.css';

const apiKey = process.env.REACT_APP_API_KEY;

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
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      paddingLeft: theme.spacing(5),
    }

  }));

const ContactScreen = (props) => {

    const classes = useStyles();
    const [styleName, setStyleName] = useState('invisible');

    let {contactDisabled} = props;
    contactDisabled = true;

    const LocationPin = ({ text }) => (
      <div className="pin">
        <Icon icon={RoomIcon} className="pin-icon" />
        <p className="pin-text">{text}</p>
      </div>
    )

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
                    <Typography variant='h5' paragraph>To reserve a room there is a non-refundable reservation fee based on single rate occupancy per night. The balance for additional guests is paid on arrival.</Typography>
            </Grid>

            <Grid container xs={12} spacing={8} className={classes.container}>
                    <div style={{ height: '40vh', width: '40%' }}>
                      <GoogleMapReact
                        bootstrapURLKeys={{ key: apiKey }}
                        defaultCenter={{lat: 54.584797232045304, lng: -5.913390777515708}}
                        defaultZoom={11}>
                        <LocationPin
                          lat={54.584797232045304}
                          lng={-5.913390777515708}
                          text={'Hilltop B&B'}
                        />
                      </GoogleMapReact>
                    </div>
            </Grid>
                    
            <Grid container xs={12} spacing={8} className={classes.container}>
                  <Grid item xs={2}>
                      <Typography variant='h5' paragraph>Please prove you are not a robot to see our contact info:</Typography>

                  </Grid>

                  <Grid item xs={2}>                    
                    <ReCAPTCHA
                      sitekey="6LfIZJgaAAAAAKX3KL-SZreKosEVvlpUU536PegD"
                      onChange={onChange}
                      onExpired={onError}
                      />
                      </Grid>
            </Grid>

            <Grid container xs={12} spacing={8} className={clsx(classes.container, styleName)}>

                  <Grid item xs={4}>
                      <Typography variant='h5' paragraph>Email: &nbsp;&nbsp;&nbsp;&nbsp; info@hilltopdrumbo.com</Typography>
                      <Typography variant='h5' paragraph>Tel: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 028 9082 6021</Typography>
                      <Typography variant='h5' paragraph> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (0044) 28 9082 6021</Typography>

                  </Grid>
                  
            </Grid>
                
      </Grid>
   </main>
</div>
    );
}

export default ContactScreen;
