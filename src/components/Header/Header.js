import React from "react";
import "./Header.css";
class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header-container">
          <h1>Akatsuki</h1>
          <h4>Memory Game</h4>
        </div>
        <div className="score-board">
          <p className="score">Score:6</p>
          <p className="hi-score">Hi-Score:12</p>
        </div>
      </div>
    );
  }
}
export default Header;
