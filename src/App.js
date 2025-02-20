import './App.css';
import React, {useState, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import Room1 from './Room1';
import Room2 from './Room2';
import Room3 from './Room3';
import Room4 from './Room4';
import Pricing from './Pricing';
import ContactScreen from './ContactScreen';


const App = () => {

  const [open, setOpen] = React.useState(false);
  let homeDisabled = false, room1Disabled = false, room2Disabled = false, room3Disabled = false, room4Disabled = false, pricingDisabled = false, contactDisabled = false;

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (

    <Switch>
      <Route exact path="/" render={(props) => <HomeScreen {...props} open = {open} handleDrawerOpen={handleDrawerOpen}
      handleDrawerClose={handleDrawerClose} homeDisabled={homeDisabled} room1Disabled={room1Disabled}
      room2Disabled={room2Disabled} room3Disabled={room3Disabled} contactDisabled={contactDisabled}/>}
      />

      <Route
        exact path ="/Room1"
        render={(props) => <Room1 {...props} open = {open} handleDrawerOpen={handleDrawerOpen}  handleDrawerClose={handleDrawerClose}
        homeDisabled={homeDisabled} room1Disabled={room1Disabled}
        room2Disabled={room2Disabled} room3Disabled={room3Disabled} contactDisabled={contactDisabled}/>}
        />

      <Route
        exact path ="/Room2"
        render={(props) => <Room2 {...props} open = {open} handleDrawerOpen={handleDrawerOpen}  handleDrawerClose={handleDrawerClose}
        homeDisabled={homeDisabled} room1Disabled={room1Disabled}
        room2Disabled={room2Disabled} room3Disabled={room3Disabled} contactDisabled={contactDisabled}/>}
        />

        <Route
        exact path ="/Room3"
        render={(props) => <Room3 {...props} open = {open} handleDrawerOpen={handleDrawerOpen}  handleDrawerClose={handleDrawerClose}
        homeDisabled={homeDisabled} room1Disabled={room1Disabled}
        room2Disabled={room2Disabled} room3Disabled={room3Disabled} contactDisabled={contactDisabled}/>}
        />

        <Route
        exact path ="/Room4"
        render={(props) => <Room4 {...props} open = {open} handleDrawerOpen={handleDrawerOpen}  handleDrawerClose={handleDrawerClose}
        homeDisabled={homeDisabled} room1Disabled={room1Disabled}
        room2Disabled={room2Disabled} room3Disabled={room3Disabled} room4Disabled={room4Disabled}/>}/>

        <Route
        exact path ="/Pricing"
        render={(props) => <Pricing {...props} open = {open} handleDrawerOpen={handleDrawerOpen}  handleDrawerClose={handleDrawerClose}
        homeDisabled={homeDisabled} room1Disabled={room1Disabled}
        room2Disabled={room2Disabled} room3Disabled={room3Disabled} pricingDisabled={pricingDisabled}
        contactDisabled={contactDisabled}/>}
        />

        <Route
        exact path ="/Contact"
        render={(props) => <ContactScreen {...props} open = {open} handleDrawerOpen={handleDrawerOpen}  handleDrawerClose={handleDrawerClose}
        homeDisabled={homeDisabled} room1Disabled={room1Disabled}
        room2Disabled={room2Disabled} room3Disabled={room3Disabled} pricingDisabled={pricingDisabled}
        contactDisabled={contactDisabled}/>}
        />

    </Switch>

  )
};

export default App;
