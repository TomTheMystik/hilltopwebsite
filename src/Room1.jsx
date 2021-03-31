import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import CustomDrawer from "./CustomDrawer";
import room1_bed from './assets/room1_bed.jpg';
import room1_chair from './assets/room1_chair3.jpg';
import room1_window from './assets/room1_window.jpg';
import room1_shower from './assets/room1_shower.jpg';
import RoomTemplate from './RoomTemplate';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },      
  }));

const Room1 = (props) => {
  const classes = useStyles();
  const images = [room1_bed, room1_chair, room1_window, room1_shower];
  const listOne = ['Double room', 'Ensuite', 'Bath', 'Shower', 'Ground floor', 'WiFi', 'Kitchen access'];
  const listTwo = ['Tea & Coffee', 'Breakfast', 'Smart TV', 'Towels', 'Cot available', 'Hairdryer', 'Bed lights'];  
  const roomText = 'Welcome to Room 1. This is a ground floor ensuite room. It comes with a double bed and fitted wardrobes for storage. The decor throughout the room is neutral with solid wooden floor and oak door. A TV and dressing table with mirror are provided, as well as a comfortable vintage chair in the reading corner. The ensuite contains a bath with showerhead. All bed linen and towels are provided.';

  let {room1Disabled} = props;
  room1Disabled = true;

    return (      
      <div className={classes.root}>
        <CssBaseline />
        <CustomDrawer {...props} room1Disabled={room1Disabled} title = "Hilltop Room 1" />          

              <RoomTemplate {...props} listOne={listOne} listTwo={listTwo} roomText={roomText} images={images}/>          
      </div>      
    );
}

export default Room1;
