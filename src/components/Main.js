import React, { Component } from "react";
import RecipeCard from "./RecipeCard";
import { Container, Row, Col } from "react-bootstrap";

const Main = props => {
  return (
    <div className="container d-flex flex-wrap mt-5">
      {props.data.map((list, index) => < RecipeCard key={index} data={list} />)}
    </div>
  );
};

export default Main;
