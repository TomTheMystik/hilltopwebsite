import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import './myStyles.css';
import { Card, CardActionArea, CardContent } from '@material-ui/core';

const apiKey = process.env.REACT_APP_API_KEY;
const directionsUrl = "https://www.google.com/maps/dir//Hilltop+Drumbo+Bed+%26+Breakfast,+60+Tullyard+Rd,+Lisburn+BT27+5JN/@54.5032779,-6.0407118,12z/data=!4m9!4m8!1m0!1m5!1m1!1s0x4861056c63235de9:0x4a2fb96902262137!2m2!1d-5.9706723!2d54.5031985!3e0";

const hilltopLat = 54.50532;
const hilltopLng = -5.97067;

const mapStyles = {
  width: 1193,
  height: 650,
  position: 'relative',
  

};

export class MapContainer extends Component {
  render() {
    return (
      <Card >
        <CardActionArea>
          
              <Map
                google={this.props.google}
                zoom={9}
                containerStyle={mapStyles}
                style={mapStyles}
                className={'mapStyles'}
                initialCenter={
                  {
                    lat: hilltopLat,
                    lng: hilltopLng
                  }
                }>
                <Marker
                  title={'Click for directions'}
                  name={'Hilltop B&B'}
                  position={{lat: hilltopLat, lng: hilltopLng}} 
                  onClick={()=> window.open(directionsUrl, "_blank")}
                />
              </Map>
          
        </CardActionArea>
              
      </Card>
      
    );
  }
}

export default GoogleApiWrapper({
  apiKey: apiKey
})(MapContainer);