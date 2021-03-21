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
import room2_bed from './assets/Room1.JPG';
import room2_desk from './assets/Room2.JPG';
import room2_shower from './assets/room2_shower.jpeg';
import room2_toilet from './assets/room2_toilet.jpeg';

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

const Room2 = (props) => {
  const classes = useStyles();
  const images = [room2_bed, room2_desk, room2_shower, room2_toilet];
  const listOne = ['Double room', 'Ensuite', 'Shower', 'Ground floor', 'Cot available', 'WiFi', 'Kitchen access'];
  const listTwo = ['Accessibility', 'Tea & Coffee', 'Breakfast', 'Smart TV', 'Towels', 'Hairdryer', 'Bed lights'];
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const room2Text = 'Welcome to Room 2. This is a ground floor room with full disabled access and enhanced features. This comfortable room comes with a double bed and fitted wardrobes for storage. The decor throughout the room is neutral with solid wooden floor & oak door. The room contains a TV, a mirrored wooden dressing table and a fold-down wall mounted wooden desk shelf for additional accessibility. The en-suite bathroom features a wet room shower (no steps) with thermostatic shower, toilet with hand rails, and wash hand basin which allows wheel chair access below. All bed linen and towels are provided.';

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  let {room2Disabled} = props;
  room2Disabled = true;

    return (
      <div className={classes.root}>
        <CustomDrawer {...props} room2Disabled={room2Disabled} title = "Hilltop Room 2" />
          <main className={classes.content}>
            <Grid container xs={12} spacing={6}>
              <Grid item xs={12} sm={8} md={8}>  
                <Typography variant="body1" color="textPrimary" align="justify" className={classes.introText}>
                    {room2Text}               
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
            <GridList className={classes.gridList} cols={4}>
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

export default Room2;
