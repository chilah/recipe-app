import React from "react";
import Header from "./Header";
import AddRecipe from "./AddRecipe";
import Main from "./Main";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }

  handleClick = () => {
    console.log("Hi");
  };

  render() {
    return (
      <div>
        <Header />
        <AddRecipe />
        <Main />
      </div>
    );
  }
}

export default App;
