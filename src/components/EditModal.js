import React, { Component } from 'react'
import { Modal, ButtonToolbar, Button } from 'react-bootstrap'

export class EditModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      lgShow: false,
    };
  }

  render() {
    let lgClose = () => this.setState({ lgShow: false });

    return (
      <ButtonToolbar>
        <Button onClick={() => this.setState({ lgShow: true })}>
        More detail
        </Button>
        <Modal
          size="lg"
          show={this.state.lgShow}
          onHide={lgClose}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              {this.props.data.recipeName}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="img-size">
              <img src={this.props.data.imgUrl} className=""/>
            </div>
          </Modal.Body>
        </Modal>
      </ButtonToolbar>
    );
  }
}

export default EditModal
