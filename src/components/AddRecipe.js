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

  handleAdd = (e) => {
    this.setState(prevState => ({
      recipeList: prevState.recipeList.concat()
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
        <i className="fas fa-plus add-recipe" onClick={this.handleShow}/>
        <ShowModal 
          show={this.state.show} 
          hide={this.handleClose} 
          handleAdd={this.handleAdd}/>
      </div>
    );
  }
}

export default AddRecipe;
