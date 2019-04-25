import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ShowModal = props => {
  return (
    <div>
      <Modal show={props.show} onHide={props.hide}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
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