import React from "react";
import { Form } from "react-bootstrap";

const FormControl = props => {
  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Recipe name</Form.Label>
        <Form.Control type="email" placeholder="Add your recipe name" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Meal type</Form.Label>
        <Form.Control as="select">
          <option>Breakfast</option>
          <option>Lunch</option>
          <option>Dinner</option>
          <option>Snack</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect2">
        <Form.Label>Dificult level</Form.Label>
        <Form.Control as="select">
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advance</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows="3" placeholder="Add your description"/>
      </Form.Group>
    </Form>
  );
};

export default FormControl;
