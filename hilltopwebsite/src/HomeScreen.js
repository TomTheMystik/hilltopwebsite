import React, {useState, useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import CustomDrawer from './CustomDrawer';
import { makeStyles } from '@material-ui/core/styles';
import ReactWeather, { useWeatherBit, useOpenWeather } from 'react-open-weather';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Hilltop Drumbo
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
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
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
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
        <Container maxWidth="lg" className={classes.container}>
          <ReactWeather
            isLoading={isLoading}
            errorMessage={errorMessage}
            data={data}
            lang="en"
            locationLabel="Drumbo"
            unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
            showForecast
          />
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}

export default HomeScreen;
