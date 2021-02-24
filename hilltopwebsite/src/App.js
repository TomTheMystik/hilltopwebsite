import './App.css';
import Documentation from './Documentation';
import { Button, Grid } from '@material-ui/core';
import Header from './Header';

function App() {

  return (
    <div className="App">
      <header className="App-header">    

        <Grid container direction='column'>
          <Grid><Header/></Grid>
        <Grid item container>
          <Grid item xs={2} />
          <Grid item xs={8}> 
              This is where the header be
          </Grid>
          <Grid item xs={8}>
              This is where the content be
          </Grid>
          <Grid item xs={2} />
        </Grid>  
        </Grid>

      </header>
    </div>
  );
}

export default App;