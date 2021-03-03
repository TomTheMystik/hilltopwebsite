import './App.css';
import Documentation from './Documentation';
import { Button, Grid } from '@material-ui/core';
import Header from './Header';
import { Route, Switch } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import Room1 from './Room1';


const App = () => (
  
    <Switch>
      <Route exact path="/" render={(props) => <HomeScreen {...props} />} />
      <Route
        exact path ="/Room1"
        render={(props) => <Room1 {...props} />}/> 
  
    </Switch>
  
);

export default App;
