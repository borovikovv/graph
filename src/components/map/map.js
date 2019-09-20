import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
// key in google map API
// let apiKey = 'AIzaSyDD92CRply5iC537Ui_pAzTNVrZqNPuNmo';
export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <h1></h1>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyDD92CRply5iC537Ui_pAzTNVrZqNPuNmo')
})(MapContainer)