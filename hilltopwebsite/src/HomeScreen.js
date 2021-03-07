import React, {useState, useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import CustomDrawer from './CustomDrawer';
import { makeStyles } from '@material-ui/core/styles';
import ReactWeather, { useOpenWeather } from 'react-open-weather';
import Grid from '@material-ui/core/Grid';
import hilltop from './assets/hilltop.jpeg';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © Hilltop Drumbo '}
      {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  containerSpacing: {
    padding: 10,
  },

}));

const HomeScreen = ( props ) => {

  const classes = useStyles();

  const { data, isLoading, errorMessage } = useOpenWeather({
    key: "e1cb7f97cf81095fa13e4f10ac6140b0",
    lat: '51.4964',
    lon: '-0.1224',
    lang: 'en',
    unit: 'metric', 
  });

  let {homeDisabled} = props;
  homeDisabled = true;

  return (
    <div className={classes.root}>
      <CssBaseline />

      <CustomDrawer {...props} homeDisabled={homeDisabled} title = "Welcome to Hilltop Bed & Breakfast"/>

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />

        <Grid container spacing={3} className={classes.containerSpacing}>

        <Grid item xs={12}>

          <img src={hilltop} width={1000} />

        </Grid>

          <Grid item xs={3}>

            <ReactWeather
              isLoading={isLoading}
              errorMessage={errorMessage}
              data={data}
              lang="en"
              locationLabel="Drumbo"
              unitsLabels={{ temperature: '°C', windSpeed: 'Km/h' }}
              showForecast
            />

          </Grid>

          <Grid item xs={3}>

            <ReactWeather
              isLoading={isLoading}
              errorMessage={errorMessage}
              data={data}
              lang="en"
              locationLabel="Drumbo"
              unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
              showForecast
            />

          </Grid>

          <Grid item xs={3}>

            <ReactWeather
              isLoading={isLoading}
              errorMessage={errorMessage}
              data={data}
              lang="en"
              locationLabel="Drumbo"
              unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
              showForecast
            />

          </Grid>
          <Grid item xs={3}>

            <ReactWeather
              isLoading={isLoading}
              errorMessage={errorMessage}
              data={data}
              lang="en"
              locationLabel="Drumbo"
              unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
              showForecast
            />

          </Grid>

          <Grid item xs={12}>

            
              <Copyright />
                        

          </Grid>

        
         
        
          

        </Grid>
        
                  
          
        
      </main>
    </div>
  );
}

export default HomeScreen;
