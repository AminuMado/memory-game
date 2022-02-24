import React from "react";
import "./Main.css";
import Card from "../Utils/Card/Card";

class Main extends React.Component {
  render() {
    const score = this.props.score;
    const gameOver = this.props.gameOver;
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
        <div className={gameOver ? "results-page active" : "results-page"}>
          <div
            className={gameOver ? "overlay-result active" : "overlay-result"}
          >
            <div className={gameOver ? "result-page active" : "result-page"}>
              <p className="result-message-1">
                {score > 11 ? "You Win" : "You Lose"}
              </p>
              <button
                type="button"
                className="play-again"
                onClick={(event) => console.log("ck")}
              >
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
