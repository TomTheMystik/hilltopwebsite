import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import CustomDrawer from "./CustomDrawer";
import room3_bed from './assets/room3_bed.jpeg';
import room3_ensuite from './assets/room3_ensuite.jpeg';
import room3_kitchen from './assets/room3_kitchen.jpeg';
import room3_living from './assets/room3_living.jpeg';
import room3_toilet from './assets/room3_toilet.jpeg';
import RoomTemplate from './RoomTemplate';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
  }));

const Room3 = (props) => {
  const classes = useStyles();
  const images = [room3_living, room3_kitchen, room3_bed, room3_ensuite, room3_toilet];
  const listOne = ['Double room', 'Ensuite', 'Shower', 'Bath', 'Ground floor', 'WiFi', 'Sofa bed', 'Cot available', 'Washing dryer', 'Dishwasher'];
  const listTwo = ['Accessibility', 'Tea & Coffee', 'Breakfast', 'Kitchen', 'Microwave', 'Cutlery', 'Dining table', 'Smart TV', 'Towels', 'Hair dryer'];
  const roomText = 'Welcome to Apartment Room 3. This is a ground floor apartment with disabled access. This large one bedroom apartment comes with full self catering facilities. The decor is easy and bright in peaceful cream tones throughout. There are large windows to the side of the living space. The living room includes a 42 inch television, leather bed settee (which opens into a double bed) and a single matching chair which has back massage facilities. There is also a dining area. The kitchen contains a fridge, freezer, gas cooker with extractor fan, combined washing machine and dryer, dishwasher, microwave and all cooking utensils. There is also a vacuum cleaner. The bedroom hosts a double bed, wall mounted TV, storage facilities and bedside tables with lamps. There is a large en-suite bathroom with a wet area for shower (no steps) and a beautiful roll top bath. The toilet is raised with hand rails for accessibility. All doors are 1 metre wide and are made from solid oak. All bed linen and towels are provided.';

  let {room3Disabled} = props;
  room3Disabled = true;

    return (
           
        <div className={classes.root}>
          <CssBaseline />
          <CustomDrawer {...props} room3Disabled={room3Disabled} title = "Hilltop Room 3" />          
    
                <RoomTemplate {...props} listOne={listOne} listTwo={listTwo} roomText={roomText} images={images}/>          
        </div>      
      );
}

export default Room3;
