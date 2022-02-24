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
        <div className="cards-container">{cards}</div>
      </div>
    );
  }
}
export default Main;
