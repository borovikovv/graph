import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
// key in google map API
// let apiKey = 'AIzaSyDD92CRply5iC537Ui_pAzTNVrZqNPuNmo';

const mapStyle = {
  display: 'inline-block',
  position: 'absolute',
  width: '450px',
  height: '398px',
  left: '375px',
  top: '87px',
  boxShadow: '0px -5px 5px -5px rgba(0,0,0,0.5)'
};
export class MapContainer extends Component {
  render() {
    return (
      <Map style={mapStyle} google={this.props.google} zoom={14}>
 
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