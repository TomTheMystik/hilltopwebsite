import React, {useState, useCallback} from 'react';
import ImageViewer from 'react-simple-image-viewer';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { makeStyles } from '@material-ui/core/styles';
import ShadowCard from './ShadowCard';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
      paddingTop: 100,
      padding: 50
    },
    introText: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(6), 
      fontSize: 22  
    },
  }));

const RoomTemplate = (props) => {
  const classes = useStyles();

  const {listOne, listTwo, roomText, images} = props;    
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);  

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };  

    return (
      
      <div className={classes.root}>
        <CssBaseline />

          <main className={classes.content}>

          <Grid container xs={12} spacing={2} direction="column">
            
            <Grid container xs={12} spacing={6}>
              <Grid item xs={12}  md={6} lg={8}>  
                <Typography variant="body1" color="textPrimary" align="justify" className={classes.introText}>
                    {roomText}               
                </Typography>
              </Grid>
              <Grid item xs={6}  md={3} lg={2}> 
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
              <Grid item xs={6}  md={3} lg={2}> 
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

            <Grid container xs={12} >
            <Typography variant="body1" color="textPrimary" align="justify" className={classes.introText}>
                    Check out our Photos of this room:            
                </Typography>
            </Grid>

            <Grid container xs={12} spacing={6}>
                  
                    {images.map((src, index) => (                      
                      <Grid item xs={12} sm={6} lg={4} xl={3} onClick = { () => openImageViewer(index) }>
                        <ShadowCard img={src} width={4000} text=""/>           
                    </Grid>
                    ))}

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

              </Grid>
            </Grid>
          </main>
      </div>
      
    );
}

export default RoomTemplate;
