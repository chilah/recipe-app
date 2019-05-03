import React, { Component } from "react";
import { Modal, ButtonToolbar, Button, Form, Container, Row, Col } from "react-bootstrap";
import ReactMarkdown from "react-markdown";

export class EditModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      ingrediants: this.props.data.ingrediants,
      description: this.props.data.description,
      edit: false,
      lgShow: false
    };
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState(state => ({
      [name]: value
    }));
  };

  handleClick = () => {
    if (this.state.edit) {
      this.props.handleUpdateRecipe(this.state, this.props.data.id);
    }

    this.setState(state => ({
      edit: !state.edit
    }));
  };

  render() {
    let lgClose = () => this.setState({ lgShow: false });

    return (
      <div>
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
                <Container className="text-center">
                  <Row>
                    <Col>Meal type: {this.props.data.mealType}</Col>
                    <Col>Level: {this.props.data.level}</Col>
                  </Row>
                </Container>
                <div className="main">
                  <h5>Ingredients</h5>
                  {!this.state.edit ? (
                    <ReactMarkdown source={this.props.data.ingrediants} />
                  ) : (
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Control
                        as="textarea"
                        name="ingrediants"
                        rows="5"
                        placeholder="Add your ingrediants. *Press Enter twice to add a new line*"
                        value={this.state.ingrediants}
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                  )}
                  <h5>Method</h5>
                  {!this.state.edit ? (
                    <ReactMarkdown source={this.props.data.description} />
                  ) : (
                    <Form.Group controlId="exampleForm.ControlTextarea2">
                      <Form.Control
                        as="textarea"
                        name="description"
                        rows="5"
                        placeholder="Add your description. *Press Enter twice to add a new line*"
                        value={this.state.description}
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                  )}
                </div>
              </div>
            </Modal.Body>
            <Button className="btn" onClick={this.handleClick}>{this.state.edit ? 'Done': 'Edit'}</Button>
          </Modal>
        </ButtonToolbar>
      </div>
    );
  }
}

export default EditModal;
