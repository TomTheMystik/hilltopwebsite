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
import room3_bed from './assets/room3_bed.jpeg';
import room3_ensuite from './assets/room3_ensuite.jpeg';
import room3_kitchen from './assets/room3_kitchen.jpeg';
import room3_living from './assets/room3_living.jpeg';
import room3_toilet from './assets/room3_toilet.jpeg';

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
  const images = [room3_living, room3_kitchen, room3_bed, room3_ensuite, room3_toilet];
  const listOne = ['Double room', 'Ensuite', 'Shower', 'Bath', 'Ground floor', 'WiFi', 'Sofa bed', 'Cot available', 'Washing dryer', 'Dishwasher'];
  const listTwo = ['Accessibility', 'Tea & Coffee', 'Breakfast', 'Kitchen', 'Microwave', 'Cutlery', 'Dining table', 'Smart TV', 'Towels', 'Hair dryer'];
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const room3Text = 'Welcome to Apartment Room 3. This is a ground floor apartment with disabled access. This large one bedroom apartment comes with full self catering facilities. The decor is easy and bright in peaceful cream tones throughout. There are large windows to the side of the living space. The living room includes a 42 inch television, leather bed settee (which opens into a double bed) and a single matching chair which has back massage facilities. There is also a dining area. The kitchen contains a fridge, freezer, gas cooker with extractor fan, combined washing machine and dryer, dishwasher, microwave and all cooking utensils. There is also a vacuum cleaner. The bedroom hosts a double bed, wall mounted TV, storage facilities and bedside tables with lamps. There is a large en-suite bathroom with a wet area for shower (no steps) and a beautiful roll top bath. The toilet is raised with hand rails for accessibility. All doors are 1 metre wide and are made from solid oak. All bed linen and towels are provided.';

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  let {room3Disabled} = props;
  room3Disabled = true;

    return (
      <div className={classes.root}>
        <CustomDrawer {...props} room3Disabled={room3Disabled} title = "Hilltop Room 3" />
          <main className={classes.content}>
            <Grid container xs={12} spacing={6}>
              <Grid item xs={12} sm={8} md={8}>  
                <Typography variant="body1" color="textPrimary" align="justify" className={classes.introText}>
                    {room3Text}               
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
            <GridList className={classes.gridList} cols={5}>
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
