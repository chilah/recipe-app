import React from 'react';
import FormControl from './Formcontrol';
import { Modal } from 'react-bootstrap';

const ShowModal = props => {
  return (
    <div>
      <Modal show={props.show} onHide={props.hide}>
        <Modal.Header closeButton>
          <Modal.Title>Add your recipe ✍</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl hide={props.hide} handleAddRecipe={props.handleAddRecipe}/>
        </Modal.Body>
      </Modal>
    </div>
  );
} 

export default ShowModal