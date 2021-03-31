import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import CustomDrawer from "./CustomDrawer";
import room4_bed from './assets/room4_bed.jpeg';
import room4_bath from './assets/room4_bath.jpeg';
import room4_kitchen from './assets/room4_kitchen.jpeg';
import room4_living from './assets/room4_living.jpeg';
import room4_conservatory from './assets/room4_conservatory.jpeg';
import room4_utilities from './assets/room4_utilities.jpeg';
import room4_dining from './assets/room4_dining.jpeg';
import RoomTemplate from './RoomTemplate';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
  }));

const Room3 = (props) => {
  const classes = useStyles();
  const images = [room4_living, room4_kitchen, room4_dining, room4_utilities, room4_bed, room4_bath, room4_conservatory];
  const listOne = ['Double room', 'Ensuite', 'Shower', 'Bath', 'WiFi', 'Sofa bed', 'Cot available', 'Washing machine', 'Dryer', 'Dishwasher'];
  const listTwo = ['Tea & Coffee', 'Kitchen', 'Microwave', 'Cutlery', 'Dining table', 'Smart TV', 'Towels', 'Hair dryer', 'Conservatory'];
  const roomText = 'Welcome to Apartment Room 4. This is a beautiful room which enjoys amazing views stretching 10 miles or more over Belfast and can be enjoyed daytime for the scenery or nighttime for the city lights. The room can be used for a B&B stay, or as self contained accommodation. The decor is bright and fresh with soft hues to help you relax. The living space includes a 42 inch TV, a leather bed settee (opens into a double bed) and a dining area. This living room opens via double french doors into a Conservatory where the amazing views can be best enjoyed. The Conservatory comes complete with a fireplace built from re-claimed Belfast brick and a wood burning stove. Although on the second floor, there is access (with no steps) via a concrete path across field which leads to a private parking area. The kitchen has a gas cooker with overhead extractor fan, a Belfast sink, a combined fridge/freezer, dishwasher, microwave and kitchen units are in oak. All cooking utensils are provided. In the utility area beside the kitchen there is a washing machine, a tumble dryer and vacuum cleaner. The en-suite bathroom has a wash hand basin, toilet, and bath with a thermostatic shower mounted above the bath. There is also a shower screen above the bath. The floor and shower area are fully tiled with natural stone tiles. An inviting bedroom hosts a Queen sized wooden sleigh bed, storage facilities and bedside tables with lamps. All bedclothes and towels are provided.';

  let {room4Disabled} = props;
  room4Disabled = true;

  return (
           
    <div className={classes.root}>
      <CssBaseline />
      <CustomDrawer {...props} room4Disabled={room4Disabled} title = "Hilltop Room 4" />          

            <RoomTemplate {...props} listOne={listOne} listTwo={listTwo} roomText={roomText} images={images}/>          
    </div>      
  );
}

export default Room3;
