import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import EditModal from './EditModal';

class RecipeCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card className="card-main">
        <Card.Img variant="top" src={this.props.data.imgUrl} />
        <Card.Body>
          <Card.Title>{this.props.data.recipeName}</Card.Title>
          <EditModal data={this.props.data}/>
        </Card.Body>
      </Card>
    );
  }
}

export default RecipeCard;
