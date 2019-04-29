import React from "react";
import { Card, Button } from "react-bootstrap";

const RecipeCard = (props) => {
  return (
    <Card className="card-main">
      <Card.Img
        variant="top"
        src={props.data.imgUrl}
      />
      <Card.Body>
        <Card.Title>{props.data.recipeName}</Card.Title>
        <Button className="btn-submit">More datail</Button>
      </Card.Body>
    </Card>
  );
};

export default RecipeCard;
