import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import data from "./components/Utils/data";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { characters: data };
  }
  handleClick = (event) => {
    console.log(event.target);
    console.log(event.currentTarget.id);
  };
  render() {
    return (
      <>
        <Header />
        <Main
          characters={this.state.characters}
          handleClick={this.handleClick}
        />
        <Footer />
      </>
    );
  }
}
export default App;
