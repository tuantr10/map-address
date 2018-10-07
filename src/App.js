import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { Button, Modal } from 'react-bootstrap';
import AddLocationModal from './AddLocationModal';

import './App.css';

export class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isShowAddLocationModal: false
    };
    this.onClickAddLocation = this.onClickAddLocation.bind(this)
  }

  onClickAddLocation() {
    this.setState({
      isShowAddLocationModal: true
    })
  }

  render() {
    const mapStyle = {
      width: '100%',
      height: '90vh'
    }
    const { isShowAddLocationModal } = this.state;
    return (
      <div>
        <div className="static-modal">
          {isShowAddLocationModal && <AddLocationModal />}
        </div>;
        <div className="mainMap">
          <Map
            style={mapStyle}
            google={this.props.google}
            zoom={14}
          >
          </Map>
        </div>
        <div className='mainMenu'>
          <Button bsStyle="primary" onClick={this.onClickAddLocation}>Add Location</Button>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD2LI07xbAtjPKotDF_Pno4kQowLZ-P_B8'
})(App)