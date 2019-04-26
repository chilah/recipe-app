import React, { Component } from "react";
import { Form, ButtonToolbar, Button } from "react-bootstrap";

class FormControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeName: "",
      imgUrl: "",
      mealType: "",
      level: "",
      description: "",
      warningMessage: false
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState(prevState => ({
      [name]: value
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    
    this.props.handleAddRecipe(this.state);
    this.props.hide();
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Recipe name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Add your recipe name"
            name="recipeName"
            onChange={this.handleChange}
            value={this.state.recipeName}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput2">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Add your image url"
            name="imgUrl"
            onChange={this.handleChange}
            value={this.state.imgUrl}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Meal type</Form.Label>
          <Form.Control
            as="select"
            name="mealType"
            onChange={this.handleChange}
            value={this.state.mealType}
          >
            <option>Select your meal type</option>
            <option>Breakfast</option>
            <option>Lunch</option>
            <option>Dinner</option>
            <option>Snack</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Label>Dificult level</Form.Label>
          <Form.Control
            as="select"
            name="level"
            onChange={this.handleChange}
            value={this.state.level}
          >
            <option>Select level</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advance</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            rows="3"
            placeholder="Add your description"
            onChange={this.handleChange}
            value={this.state.description}
          />
        </Form.Group>
        <ButtonToolbar>
          <Button variant="dark" className="ml-auto" onClick={this.props.hide}>
            Cancel
          </Button>
          <Button
            type="submit"
            variant="primary"
            className="ml-3"
          >
            Add Recipe
          </Button>
        </ButtonToolbar>
      </Form>
    );
  }
}

export default FormControl;
