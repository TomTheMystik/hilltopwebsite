import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import CustomDrawer from "./CustomDrawer";
import room2_bed from './assets/Room1.JPG';
import room2_desk from './assets/Room2.JPG';
import room2_shower from './assets/room2_shower.jpeg';
import room2_toilet from './assets/room2_toilet.jpeg';
import RoomTemplate from './RoomTemplate';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
  }));

const Room2 = (props) => {
  const classes = useStyles();
  const images = [room2_bed, room2_desk, room2_shower, room2_toilet];
  const listOne = ['Double room', 'Ensuite', 'Shower', 'Ground floor', 'Cot available', 'WiFi', 'Kitchen access'];
  const listTwo = ['Accessibility', 'Tea & Coffee', 'Breakfast', 'Smart TV', 'Towels', 'Hairdryer', 'Bed lights'];
  const roomText = 'Welcome to Room 2. This is a ground floor room with full disabled access and enhanced features. This comfortable room comes with a double bed and fitted wardrobes for storage. The decor throughout the room is neutral with solid wooden floor & oak door. The room contains a TV, a mirrored wooden dressing table and a fold-down wall mounted wooden desk shelf for additional accessibility. The en-suite bathroom features a wet room shower (no steps) with thermostatic shower, toilet with hand rails, and wash hand basin which allows wheel chair access below. All bed linen and towels are provided.';
  
  let {room2Disabled} = props;
  room2Disabled = true;

  return (      
    <div className={classes.root}>
      <CssBaseline />
      <CustomDrawer {...props} room2Disabled={room2Disabled} title = "Hilltop Room 2" />          

            <RoomTemplate {...props} listOne={listOne} listTwo={listTwo} roomText={roomText} images={images}/>          
    </div>      
  );
    
}

export default Room2;
