import React, { Component } from "react";
import RecipeCard from "./RecipeCard";
import { Container, Row, Col } from "react-bootstrap";

class Main extends Component {
  render() {
    return (
      <div className="container d-flex flex-wrap mt-5">
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </div>
    );
  }
}

export default Main;
