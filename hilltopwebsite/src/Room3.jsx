import React, {useState, useEffect} from 'react';
import CustomDrawer from "./CustomDrawer";
import { makeStyles } from '@material-ui/core/styles';

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

const Room3 = (props) => {  
    
    const classes = useStyles();

    let {room3Disabled} = props;
    room3Disabled = true;

    return (
        <div className={classes.root}>
                <CustomDrawer {...props} room3Disabled={room3Disabled} title = "Hilltop Room No.3" />

                 <main className={classes.content}>
                
                 </main>
        </div>
    );
}

export default Room3;