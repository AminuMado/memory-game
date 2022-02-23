import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import data from "./components/Utils/data";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { characters: data, score: 0, hiScore: 0 };
  }
  handleClick = (event) => {
    // This handleClick function gets the id of the element clicked the id is mapped automatically if you have an id property on a tag.
    // saving the id as a const and then we try to match the id to the corresponding character with the same id in the saved state
    // we change the characters clicked property to true, while leaving everthing else as is and save it to the clicked constant created
    // we finally set the state with the new generated clicked constant
    // we do all this using map method so as to not directly mutate state.

    const id = event.currentTarget.id;
    const clicked = this.state.characters.map((character) => {
      if (id === character.id) {
        return { ...character, clicked: true };
      }
      return character;
    });
    this.setState({ characters: clicked });
  };
  render() {
    return (
      <>
        <Header score={this.state.score} hiScore={this.state.hiScore} />
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
