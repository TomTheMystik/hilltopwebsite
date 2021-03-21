import React, {useState, useCallback} from 'react';
import ImageViewer from 'react-simple-image-viewer';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { makeStyles } from '@material-ui/core/styles';

import CustomDrawer from "./CustomDrawer";
import room4_bed from './assets/room4_bed.jpeg';
import room4_bath from './assets/room4_bath.jpeg';
import room4_kitchen from './assets/room4_kitchen.jpeg';
import room4_living from './assets/room4_living.jpeg';
import room4_conservatory from './assets/room4_conservatory.jpeg';
import room4_utilities from './assets/room4_utilities.jpeg';
import room4_dining from './assets/room4_dining.jpeg';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
      paddingTop: 100,
      padding: 50
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    gridList: {
      flexWrap: 'nowrap',
      transform: 'translateZ(0)',
    },
    introText: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(6), 
      fontSize: 22  
    },
  }));

const Room3 = (props) => {
  const classes = useStyles();
  const images = [room4_living, room4_kitchen, room4_dining, room4_utilities, room4_bed, room4_bath, room4_conservatory];
  const listOne = ['Double room', 'Ensuite', 'Shower', 'Bath', 'WiFi', 'Sofa bed', 'Cot available', 'Washing machine', 'Dryer', 'Dishwasher'];
  const listTwo = ['Tea & Coffee', 'Kitchen', 'Microwave', 'Cutlery', 'Dining table', 'Smart TV', 'Towels', 'Hair dryer', 'Conservatory'];
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const room4Text = 'Welcome to Apartment Room 4. This is a beautiful room which enjoys amazing views stretching 10 miles or more over Belfast and can be enjoyed daytime for the scenery or nighttime for the city lights. The room can be used for a B&B stay, or as self contained accommodation. The decor is bright and fresh with soft hues to help you relax. The living space includes a 42 inch TV, a leather bed settee (opens into a double bed) and a dining area. This living room opens via double french doors into a Conservatory where the amazing views can be best enjoyed. The Conservatory comes complete with a fireplace built from re-claimed Belfast brick and a wood burning stove. Although on the second floor, there is access (with no steps) via a concrete path across field which leads to a private parking area. The kitchen has a gas cooker with overhead extractor fan, a Belfast sink, a combined fridge/freezer, dishwasher, microwave and kitchen units are in oak. All cooking utensils are provided. In the utility area beside the kitchen there is a washing machine, a tumble dryer and vacuum cleaner. The en-suite bathroom has a wash hand basin, toilet, and bath with a thermostatic shower mounted above the bath. There is also a shower screen above the bath. The floor and shower area are fully tiled with natural stone tiles. An inviting bedroom hosts a Queen sized wooden sleigh bed, storage facilities and bedside tables with lamps. All bedclothes and towels are provided.';

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  let {room4Disabled} = props;
  room4Disabled = true;

    return (
      <div className={classes.root}>
        <CustomDrawer {...props} room4Disabled={room4Disabled} title = "Hilltop Room 4" />
          <main className={classes.content}>
            <Grid container xs={12} spacing={6}>
              <Grid item xs={12} sm={8} md={8}>  
                <Typography variant="body1" color="textPrimary" align="justify" className={classes.introText}>
                    {room4Text}               
                </Typography>
              </Grid>
              <Grid item xs={6} sm={2} md={2}>
                <List>
                  {listOne.map((feature) => (
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleIcon style={{color: 'green'}}/>
                      </ListItemIcon>
                      <ListItemText primary={feature}/>
                    </ListItem>
                ))}
                </List>
              </Grid>
              <Grid item xs={6} sm={2} md={2}>
                <List>
                {listTwo.map((feature) => (
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleIcon style={{color: 'green'}}/>
                      </ListItemIcon>
                      <ListItemText primary={feature}/>
                    </ListItem>
                ))}
                </List>
              </Grid>
            </Grid>
            <GridList className={classes.gridList} cols={7}>
              {images.map((src, index) => (
                <GridListTile style={{height:300}}>
                  <img src={src} onClick={ () => openImageViewer(index) }/>
                </GridListTile>
              ))}
            </GridList>
            {isViewerOpen && (
              <ImageViewer
                src={ images }
                currentIndex={ currentImage }
                onClose={ closeImageViewer }
                backgroundStyle={{
                  backgroundColor: "rgba(0,0,0,0.5)",
                  zIndex: 10000
                }}
              />
            )}
          </main>
      </div>
    );
}

export default Room3;
