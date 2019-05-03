import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import EditModal from "./EditModal";

const RecipeCard = props => {
  return (
    <Card className="card-main">
      <Card.Img variant="top" src={props.data.imgUrl} />
      <Card.Body>
        <Card.Title>{props.data.recipeName}</Card.Title>
        <EditModal
          data={props.data}
          handleDelete={props.handleDelete}
          handleUpdateRecipe={props.handleUpdateRecipe}
          handleGetIndex={props.handleGetIndex}
        />
      </Card.Body>
    </Card>
  );
};

export default RecipeCard;
