import React, {useState, useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import CustomDrawer from './CustomDrawer';
import { makeStyles } from '@material-ui/core/styles';
import ReactWeather, { useOpenWeather } from 'react-open-weather';
import Grid from '@material-ui/core/Grid';
import hilltop from './assets/hilltop.jpg';
import Room1 from './assets/Room1.JPG';
import Room2 from './assets/Room2.JPG';
import Room3 from './assets/Room3.JPG';
import Room4 from './assets/Room4.JPG';
import ShadowCard from './ShadowCard';
import './myStyles.css';



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
    padding: 20,
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(0),
  },
  cardMedia: {
    margin: "auto",    
  }, 
  introText: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(2),   
  },

}));

const HomeScreen = ( props ) => {

  const classes = useStyles();
  const picWidth = 500;
  const { history } = props;

  

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
    <div className={classes.appBarSpacer}/>

  <Grid container xs={12} spacing={2} direction="column">

    <Grid container xs={12} spacing={8} className={classes.container}>

            <Grid item xs={12} md={7}>  

            <Typography variant="h5" color="textPrimary" align="center" className={classes.introText}>
               {'Enjoy your stay at our lovely B&B in Drumbo!'}               
            </Typography>
            <Typography variant="h5" color="textPrimary" align="center" className={classes.introText}>
               {'Click on our rooms to view their photos'}               
            </Typography>
            <Typography variant="h5" color="textPrimary" align="center" className={classes.introText}>
               {'Check out our deals on the pricing page'}               
            </Typography>
            <Typography variant="h5" color="textPrimary" align="center" className={classes.introText}>
               {'If you are interested in booking, Click Contact Us for more info!'}               
            </Typography>

            </Grid>

            <Grid item xs={12} md={5}>                      

                  <ShadowCard img={hilltop} width={900} text="Explore Hilltop B&B"/> 

            </Grid>
            

     </Grid>  

     <Grid container xs={12} spacing={8} className={classes.container}>     

              <Grid item xs={12} sm={6} md={3}  onClick = {() => history.push('/Room1')}>
                  <ShadowCard img={Room1} width={picWidth} text="Explore Room 1"/>                  
              </Grid>
              <Grid item xs={12} sm={6} md={3} onClick = {() => history.push('/Room2')}>
                  <ShadowCard img={Room2} width={picWidth} text="Explore Room 2"/> 
              </Grid>                      
              <Grid item xs={12} sm={6} md={3}  onClick = {() => history.push('/Room3')}>
                  <ShadowCard img={Room3} width={picWidth} text="Explore Room 3"/>
              </Grid>
              <Grid item xs={12} sm={6} md={3}  onClick = {() => history.push('/Room4')}>
                  <ShadowCard img={Room4} width={picWidth} text="Explore Room 4"/>      
              </Grid>
              
      </Grid>             
    

     <Grid container xs={12} spacing={8} className={classes.container}>              

              <Grid item xs={12} md={6} paddingRight="100">

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

              <Grid item xs={12} xl={12}>
                
                  <Copyright />                       

              </Grid>
        </Grid>
    </Grid>
            
        
      </main>
    </div>
  );
}

export default HomeScreen;
