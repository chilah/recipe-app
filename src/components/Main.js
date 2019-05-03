import React from "react";
import RecipeCard from "./RecipeCard";

const Main = props => {
  return (
    <div className="container d-flex flex-wrap mt-5">
      {props.data.map((list, index) => (
        <RecipeCard
          key={index}
          data={list}
          handleDelete={props.handleDelete}
          handleAddRecipe={props.handleAddRecipe}
          handleGetIndex={props.handleGetIndex}
          handleUpdateRecipe={props.handleUpdateRecipe}
        />
      ))}
    </div>
  );
};

export default Main;
