import React, {useState, useEffect} from 'react';
import CustomDrawer from "./CustomDrawer";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import GoogleMapReact from 'google-map-react';
import './map.css'
import { Icon } from '@iconify/react'
import { Link } from '@material-ui/core';
import RoomIcon from '@material-ui/icons/Room';

const apiKey = process.env.REACT_APP_API_KEY;
const directionsUrl = "https://www.google.com/maps/dir//Hilltop+Drumbo+Bed+%26+Breakfast,+60+Tullyard+Rd,+Lisburn+BT27+5JN/@54.5032779,-6.0407118,12z/data=!4m9!4m8!1m0!1m5!1m1!1s0x4861056c63235de9:0x4a2fb96902262137!2m2!1d-5.9706723!2d54.5031985!3e0";

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

const ContactScreen = (props) => {

    const classes = useStyles();
    const hilltopLat = 54.50532;
    const hilltopLng = -5.97067;

    let {contactDisabled} = props;
    contactDisabled = true;

    const Marker = props => {
      return (
      <>
        <RoomIcon className="pin"/>
      </>
      );
    }

    return (
        <div className={classes.root}>
          <CustomDrawer {...props} contactDisabled={contactDisabled} title = "Contact" />
            <main className={classes.content}>
              <Typography variant='body1' paragraph>To reserve a room there is a non-refundable reservation fee based on single rate occupancy per night. The balance for additional guests is paid on arrival.</Typography>
              <div style={{ height: '40vh', width: '40%' }}>
              <Link onClick={()=> window.open(directionsUrl, "_blank")}>
                <GoogleMapReact
                  bootstrapURLKeys={{ key: apiKey }}
                  defaultCenter={{lat: hilltopLat, lng: hilltopLng}}
                  yesIWantToUseGoogleMapApiInternals
                  defaultZoom={9}>
                  <Marker lat={hilltopLat} lng={hilltopLng} />
                </GoogleMapReact>
                </Link>
              </div>
            </main>
        </div>
    );
}

export default ContactScreen;
