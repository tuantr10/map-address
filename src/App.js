import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { Button } from 'react-bootstrap';

import './App.css';

export class App extends Component {
  render() {
    const mapStyle = {
      width: '100%',
      height: '90vh'
    }
    return (
      <div>
        <div className="mainMap">
          <Map
            style={mapStyle}
            google={this.props.google}
            zoom={14}
          >
          </Map>
        </div>
        <div className='mainMenu'>
          <Button bsStyle="primary">Add Address</Button>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD2LI07xbAtjPKotDF_Pno4kQowLZ-P_B8'
})(App)