import React from 'react';
import FormControl from './Formcontrol';
import { Modal, Button } from 'react-bootstrap';

const ShowModal = props => {
  return (
    <div>
      <Modal show={props.show} onHide={props.hide}>
        <Modal.Header closeButton>
          <Modal.Title>Add your recipe ✍</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl handleAdd={props.handleAdd}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.hide}>
            Close
          </Button>
          <Button className="savechange" onClick={props.hide}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
} 

export default ShowModal