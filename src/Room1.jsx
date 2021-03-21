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
import room1_bed from './assets/room1_bed.jpg';
import room1_chair from './assets/room1_chair3.jpg';
import room1_window from './assets/room1_window.jpg';
import room1_shower from './assets/room1_shower.jpg';

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

const Room1 = (props) => {
  const classes = useStyles();
  const images = [room1_bed, room1_chair, room1_window, room1_shower];
  const listOne = ['Double room', 'Ensuite', 'Bath', 'Shower', 'Ground floor', 'WiFi', 'Kitchen access'];
  const listTwo = ['Tea & Coffee', 'Breakfast', 'Smart TV', 'Towels', 'Cot available', 'Hairdryer', 'Bed lights'];
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const room1Text = 'Welcome to Room 1. This is a ground floor ensuite room. It comes with a double bed and fitted wardrobes for storage. The decor throughout the room is neutral with solid wooden floor and oak door. A TV and dressing table with mirror are provided, as well as a comfortable vintage chair in the reading corner. The ensuite contains a bath with showerhead. All bed linen and towels are provided.';

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  let {room1Disabled} = props;
  room1Disabled = true;

    return (
      <div className={classes.root}>
        <CustomDrawer {...props} room1Disabled={room1Disabled} title = "Hilltop Room 1" />
          <main className={classes.content}>
            <Grid container xs={12} spacing={6}>
              <Grid item xs={12} sm={8} md={8}>  
                <Typography variant="body1" color="textPrimary" align="justify" className={classes.introText}>
                    {room1Text}               
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

export default Room1;
