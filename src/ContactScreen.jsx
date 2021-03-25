import React, {useState, useEffect} from 'react';
import CustomDrawer from "./CustomDrawer";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import GoogleMapReact from 'google-map-react';
import './map.css'
import { Icon } from '@iconify/react'
import RoomIcon from '@material-ui/icons/Room';

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

    let {contactDisabled} = props;
    contactDisabled = true;

    const LocationPin = ({ text }) => (
      <div className="pin">
        <Icon icon={RoomIcon} className="pin-icon" />
        <p className="pin-text">{text}</p>
      </div>
    )

    return (
        <div className={classes.root}>
          <CustomDrawer {...props} contactDisabled={contactDisabled} title = "Contact" />
            <main className={classes.content}>
              <Typography variant='body1' paragraph>To reserve a room there is a non-refundable reservation fee based on single rate occupancy per night. The balance for additional guests is paid on arrival.</Typography>
              <div style={{ height: '40vh', width: '40%' }}>
                <GoogleMapReact
                  bootstrapURLKeys={{ key: 'AIzaSyCMCr91J12f97H34_amDqG9Vm0JKNb_ark' }}
                  defaultCenter={{lat: 54.584797232045304, lng: -5.913390777515708}}
                  defaultZoom={11}>
                  <LocationPin
                    lat={54.584797232045304}
                    lng={-5.913390777515708}
                    text={'Hilltop B&B'}
                  />
                </GoogleMapReact>
              </div>
            </main>
        </div>
    );
}

export default ContactScreen;
