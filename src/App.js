import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { Button, Modal } from 'react-bootstrap';
import AddLocationModal from './AddLocationModal';

import './App.css';

export class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isShowAddLocationModal: false,
      markers: [{
        name: 'SOMA',
        lat: 10.8231,
        lng: 106.6297
      }]
    };
    this.toggleAddLocationModal = this.toggleAddLocationModal.bind(this);
  }

  toggleAddLocationModal() {
    this.setState({ isShowAddLocationModal: !this.state.isShowAddLocationModal });
  }

  addLocation = latLng => {
    let { markers } = this.state;
    markers.push({
      name: '',
      ...latLng
    });
    this.setState({ markers: markers });
    this.toggleAddLocationModal();
  }

  render() {
    const mapStyle = {
      width: '100%',
      height: '93vh'
    };
    const { isShowAddLocationModal, markers } = this.state;
    const latestMarker = markers[markers.length - 1];
    return (
      <div>
        <div className="static-modal">
          {isShowAddLocationModal &&
            <AddLocationModal
              toggleAddLocationModal={this.toggleAddLocationModal}
              google={this.props.google}
              addLocation={this.addLocation}
            />}
        </div>
        <div className="mainMap">
          <Map
            style={mapStyle}
            google={this.props.google}
            zoom={18}
            initialCenter={{ lat: 10.8231, lng: 106.6297 }}
            center={Object.keys(latestMarker).length ? {
              lat: latestMarker.lat,
              lng: latestMarker.lng
            } : {}}
          >
            {this.state.markers.map(marker => {
              return <Marker
                name={marker.name}
                position={{lat: marker.lat, lng: marker.lng }}
              />
            })}
          </Map>
        </div>
        <div className='mainMenu'>
          <Button bsStyle="primary" onClick={this.toggleAddLocationModal}>Add By Address</Button>
          <Button bsStyle="danger" onClick={this.toggleAddLocationModal}>Add By Marker</Button>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD2LI07xbAtjPKotDF_Pno4kQowLZ-P_B8',
  libraries: ['places'] 
})(App)