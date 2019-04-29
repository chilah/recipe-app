import React from "react";
import Header from "./Header";
import AddRecipe from "./AddRecipe";

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
      </div>
    );
  }
}

export default App;
