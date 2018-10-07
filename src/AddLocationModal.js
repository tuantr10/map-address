import React, { Component } from 'react';
import { Button, Modal, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

import './App.css';

export class AddLocationModal extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ''
    };
  }

  getValidationState() {
    console.log(this.state.value)
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div className="static-modal">
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Add Location</Modal.Title>
          </Modal.Header>

          <Modal.Body>
          <form>
            <FormGroup
              controlId="formBasicText"
              validationState={this.getValidationState()}
            >
              <ControlLabel>Search Address</ControlLabel>
              <FormControl
                type="text"
                value={this.state.value}
                placeholder="Enter address..."
                onChange={this.handleChange}
              />
              <FormControl.Feedback />
            </FormGroup>
          </form>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.props.toggleAddLocationModal}>Close</Button>
            <Button bsStyle="primary">Add Location</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }
}

export default AddLocationModal;