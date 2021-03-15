import './App.css';
import Documentation from './Documentation';
import { Button, Grid } from '@material-ui/core';
import Header from './Header';
import React, {useState, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import Room1 from './Room1';
import Room2 from './Room2';
import Room3 from './Room3';
import Pricing from './Pricing';


const App = () => {

  const [open, setOpen] = React.useState(false);
  let homeDisabled = false, room1Disabled = false, room2Disabled = false, room3Disabled = false, pricingDisabled = false;

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (

    <Switch>
      <Route exact path="/" render={(props) => <HomeScreen {...props} open = {open} handleDrawerOpen={handleDrawerOpen}
      handleDrawerClose={handleDrawerClose} />} homeDisabled={homeDisabled} room1Disabled={room1Disabled}
      room2Disabled={room2Disabled} room3Disabled={room3Disabled}/>

      <Route
        exact path ="/Room1"
        render={(props) => <Room1 {...props} open = {open} handleDrawerOpen={handleDrawerOpen}  handleDrawerClose={handleDrawerClose}
        homeDisabled={homeDisabled} room1Disabled={room1Disabled}
        room2Disabled={room2Disabled} room3Disabled={room3Disabled}/>}/>

      <Route
        exact path ="/Room2"
        render={(props) => <Room2 {...props} open = {open} handleDrawerOpen={handleDrawerOpen}  handleDrawerClose={handleDrawerClose}
        homeDisabled={homeDisabled} room1Disabled={room1Disabled}
        room2Disabled={room2Disabled} room3Disabled={room3Disabled}/>}/>

        <Route
        exact path ="/Room3"
        render={(props) => <Room3 {...props} open = {open} handleDrawerOpen={handleDrawerOpen}  handleDrawerClose={handleDrawerClose}
        homeDisabled={homeDisabled} room1Disabled={room1Disabled}
        room2Disabled={room2Disabled} room3Disabled={room3Disabled}/>}/>

        <Route
        exact path ="/Pricing"
        render={(props) => <Pricing {...props} open = {open} handleDrawerOpen={handleDrawerOpen}  handleDrawerClose={handleDrawerClose}
        homeDisabled={homeDisabled} room1Disabled={room1Disabled}
        room2Disabled={room2Disabled} room3Disabled={room3Disabled} pricingDisabled={pricingDisabled}/>}/>

    </Switch>

  )
};

export default App;
