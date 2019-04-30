import React, { Component } from "react";
import ShowModal from "./ShowModal";
import Main from './Main'

class AddRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeList: [],
      show: false
    };
  }

  handleAddRecipe = data => {
    const recipeBox = {
      recipeName: data.recipeName,
      imgUrl: data.imgUrl || 'https://images.unsplash.com/photo-1493807402946-1a3fe6683ff2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      mealType: data.mealType,
      level: data.level,
      ingrediants: data.ingrediants,
      description: data.description
    };

    this.setState(prevState => ({
      recipeList: prevState.recipeList.concat(recipeBox)
    }));
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  render() {
    return (
      <div>
        <i className="fas fa-plus add-recipe" onClick={this.handleShow} />
        <ShowModal
          show={this.state.show}
          hide={this.handleClose}
          handleAddRecipe={this.handleAddRecipe}
        />
        <Main data={this.state.recipeList}/>
      </div>
    );
  }
}

export default AddRecipe;
