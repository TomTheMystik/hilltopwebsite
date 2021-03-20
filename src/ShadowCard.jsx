import React, { useState } from 'react';
import { Card, CardContent, CardActionArea, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './myStyles.css';
import clsx from 'clsx';
import { BrightnessHigh } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    root: {
        boxShadow: theme.shadows[10],
        cursor: 'pointer',
        position: 'relative'  
    },    
    images: {
      height: "auto",
      width: "100%",    
    },
    fontStyling: {
      position: "absolute",
      top: "10%",
      width: "100%",
      textAlign: "center",
      color: "white",
      backgroundColor: "none",
      opacity: "100%",
      outline: true,
      outlineColor: "white",
      //fontFamily: "Comic Sans MS"
    },
    
  }));
  
    const ShadowCard = (props) => {
    const classes = useStyles();
    const {img, width, text} = props;

    const [styleName, setStyleName] = useState('');
    const [fontName, setFontName] = useState('font2');

    return (
        <Card className={classes.root}
        onMouseOver = {() => {
          setStyleName('shadowcard');
          setFontName('');
        }}
        onMouseOut = {() => {
          setStyleName('');
          setFontName('font2');
        }}>

              <CardActionArea >
                                       
                    <CardMedia
                      component="img"
                      width={width}
                      image={img}
                      className={styleName}
                    />
                    <Typography
                        gutterBottom
                        variant="h2"
                        component="h1"
                        className={clsx(fontName, classes.fontStyling)}
                      >
                        {text}
                    </Typography>
                    

              </CardActionArea>
        </Card>
        
      );

};


export default ShadowCard;