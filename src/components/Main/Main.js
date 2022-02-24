import React from "react";
import "./Main.css";
import Card from "../Utils/Card/Card";

class Main extends React.Component {
  render() {
    const cards = this.props.characters.map((item) => {
      return (
        <Card
          key={item.id}
          name={item.name}
          photo={item.photo}
          id={item.id}
          handleClick={this.props.handleClick}
        />
      );
    });
    return (
      <div className="main">
        <div className="results-page">
          <div className="overlay-result active">
            <div className="result-page active">
              <p className="result-message-1">You Lose</p>
              <button type="button" className="play-again">
                Play Again
              </button>
            </div>
          </div>
        </div>
        <div className="cards-container">{cards}</div>
      </div>
    );
  }
}
export default Main;
