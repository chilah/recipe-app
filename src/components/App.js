import React, { Component } from "react";
import Header from "./Header";
import ShowModal from "./ShowModal";
import Main from "./Main";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeList: [],
      show: false
    };
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem("recipeList");

      const recipeList = JSON.parse(json);

      if (recipeList) {
        this.setState(prevState => ({
          recipeList
        }));
      }
    } catch (e) {}
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.recipeList.length !== this.state.recipeList.length) {
      const json = JSON.stringify(this.state.recipeList);

      localStorage.setItem("recipeList", json);
    }
  }

  handleAddRecipe = data => {
    const recipeBox = {
      recipeName: data.recipeName,
      id: data.id,
      imgUrl:
        data.imgUrl ||
        "https://images.unsplash.com/photo-1493807402946-1a3fe6683ff2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      mealType: data.mealType,
      level: data.level,
      ingrediants: data.ingrediants,
      description: data.description
    };

    this.setState(prevState => ({
      recipeList: prevState.recipeList.concat(recipeBox)
    }));
  };

  handleGetIndex = id => {
    const i = this.state.recipeList.findIndex(recipe => {
      if (recipe.id === id) return true;
    });

    return i;
  };

  handleUpdateRecipe = ({ingrediants, description}, id) => {
    const i = this.handleGetIndex(id)
    const lists = [...this.state.recipeList]
    const list = {...lists[i]}
    list.ingrediants = ingrediants;
    list.description = description;
    lists[i] = list;
    // this.state.recipeList[i].ingrediants = ingrediants;
    // this.state.recipeList[i].description = description;
    this.setState(prevState => ({
      recipeList: lists
    }));
  }

  handleDelete = id => {
    this.setState(prevState => ({
      recipeList: prevState.recipeList.filter(recipe => recipe.id !== id)
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
        <Header />
        <i className="fas fa-plus add-recipe" onClick={this.handleShow} />
        <ShowModal
          show={this.state.show}
          hide={this.handleClose}
          handleAddRecipe={this.handleAddRecipe}
        />
        <Main
          data={this.state.recipeList}
          handleAddRecipe={this.handleAddRecipe}
          handleGetIndex={this.handleGetIndex}
          handleUpdateRecipe={this.handleUpdateRecipe}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
