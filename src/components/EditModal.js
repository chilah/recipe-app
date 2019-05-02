import React, { Component } from "react";
import { Modal, ButtonToolbar, Button } from "react-bootstrap";
import ReactMarkdown from 'react-markdown';

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
        <Button
          className="btn-submit"
          onClick={() => this.setState({ lgShow: true })}
        >
          Preview
        </Button>
        <Button
          variant="dark"
          className="ml-auto"
          onClick={() => this.props.handleDelete(this.props.data.id)}
        >
          <i className="fas fa-trash-alt" />
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
              <img src={this.props.data.imgUrl} />
            </div>
            <div className="mt-4">
              <h5 className="text-center">
                Meal type: {this.props.data.mealType} Level:{" "}
                {this.props.data.level}
              </h5>
              <h5>Ingredients</h5>
              <ReactMarkdown>{this.props.data.ingrediants}</ReactMarkdown>
              <h5>Instructor</h5>
              <ReactMarkdown>{this.props.data.description}</ReactMarkdown>
            </div>
          </Modal.Body>
        </Modal>
      </ButtonToolbar>
    );
  }
}

export default EditModal;
