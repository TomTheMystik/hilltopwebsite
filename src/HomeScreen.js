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
import { Card, CardContent, CardMedia } from '@material-ui/core';



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

}));

const HomeScreen = ( props ) => {

  const classes = useStyles();
  const picWidth = 500;

  

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

  <Grid container spacing={2} direction="column">

    <Grid container xs={12} spacing={8} className={classes.container}>

            <Grid item xs={8} xl={7}>              

            </Grid>

            <Grid item xs={4} xl={5}>   

                      

              <Card>
                    <CardMedia />

                      <CardContent>
                          <img src={hilltop} width={900} />
                      </CardContent>                    
                  </Card>  

            </Grid>
            

     </Grid>  

     <Grid container xs={12} spacing={8} className={classes.container}>     

              <Grid item xs={4} xl={3}>   
                  <Card>
                    <CardMedia className={classes.cardMedia}/>

                      <CardContent>
                          <img src={Room1} width={picWidth}/>
                      </CardContent>                    
                  </Card>                               
              </Grid>                                

              <Grid item xs={4} xl={3}>

                  <Card>
                        <CardMedia className={classes.cardMedia}/>

                          <CardContent>
                              <img src={Room2} width={picWidth}/>
                          </CardContent>                    
                      </Card>   

              </Grid>   

                      
              <Grid item xs={4} xl={3}>

                  <Card>
                        <CardMedia className={classes.cardMedia}/>

                          <CardContent>
                              <img src={Room3} width={picWidth}/>
                          </CardContent>                    
                      </Card>   

              </Grid>
              

              <Grid item xs={4} xl={3}>

                  <Card>
                        <CardMedia className={classes.cardMedia}/>

                          <CardContent>
                              <img src={Room4} width={picWidth}/>
                          </CardContent>                    
                      </Card>   

                  </Grid>

              
      </Grid>             
    

     <Grid container xs={12} className={classes.container}>


              

              <Grid item xs={4} xl={3}>

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
