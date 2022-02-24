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
  updateScore = () => {
    // This function counts the number of trues in the cliked property of each character and adds it to the newScore variable delcalred below
    // After wards it sets the score state to the current score
    // Furthermore it makes a check if the current score is higher the hiscore the highscore should be updated also
    let newScore = 0;
    const count = this.state.characters.map((character) => {
      if (character.clicked) {
        newScore++;
      } else return;
    });

    if (newScore > this.state.hiScore) {
      this.setState({ hiScore: newScore });
    }
    this.setState({ score: newScore });
  };

  handleClick = (event) => {
    // This handleClick function gets the id of the element clicked the id is mapped automatically if you have an id property on a tag.
    // saving the id as a const and then we try to match the id to the corresponding character with the same id in the saved state
    // we change the characters clicked property to true, while leaving everthing else as is and save it to the clicked constant created
    // we finally set the state with the new generated clicked constant
    // we do all this using map method so as to not directly mutate state.
    let newScore = 0;
    const id = event.currentTarget.id;
    const clicked = this.state.characters.map((character) => {
      if (id === character.id) {
        return { ...character, clicked: true };
      }
      return character;
    });
    this.setState({ characters: clicked });
  };
  componentDidUpdate(prevProps, prevState) {
    //This is used since we wanna update the score anytime the clicked variable changes to true in the charactes state property
    // The change is asynchonous so we cant have this in the handleclick function as it wont properly update
    // this function only fires when the state changes, we use a comparision to make sure thats the case
    if (this.state.characters !== prevState.characters) {
      this.updateScore();
    }
  }
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
