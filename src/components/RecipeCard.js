import React from "react";
import { Card, Button, Col } from "react-bootstrap";

const RecipeCard = () => {
  return (
    <Card className="card-main">
      <Card.Img
        variant="top"
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className="btn-submit">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default RecipeCard;
