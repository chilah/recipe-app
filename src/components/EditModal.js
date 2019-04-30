import React, { Component } from "react";
import { Modal, ButtonToolbar, Button, Jumbotron } from "react-bootstrap";

export class EditModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      lgShow: false
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
          <Modal.Header closeButton className="header">
            <Modal.Title id="example-modal-sizes-title-lg">
              {this.props.data.recipeName}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="img-size">
              <img src={this.props.data.imgUrl} className="" />
            </div>
            <Jumbotron className="mt-4">
              <h5>Meal type: {this.props.data.mealType}</h5>
              <h5>Level: {this.props.data.level}</h5>
              <h5>Ingredients</h5>
              <p>{this.props.data.ingrediants}</p>
              <h5>Instructor</h5>
              <p>{this.props.data.description}</p>
            </Jumbotron>
          </Modal.Body>
        </Modal>
      </ButtonToolbar>
    );
  }
}

export default EditModal;
