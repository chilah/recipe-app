import React, { Component } from "react";
import ShowModal from './ShowModal'

class AddRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeList: [],
      show: false
    };
  }

  handleAddRecipe = (data) => {
    const recipeBox = {
      recipeName: data.recipeName,
      imgUrl: data.imgUrl,
      mealType: data.mealType,
      level: data.level,
      description: data.description,
    }

    this.setState(prevState => ({
      recipeList: prevState.recipeList.concat(recipeBox)
    }))
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true });
  }

  render() {
    return (
      <div>
        {console.log(this.state.recipeList)}
        <i className="fas fa-plus add-recipe" onClick={this.handleShow}/>
        <ShowModal 
          show={this.state.show} 
          hide={this.handleClose} 
          handleAddRecipe={this.handleAddRecipe}/>
      </div>
    );
  }
}

export default AddRecipe;
