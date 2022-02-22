import React from "react";
import Card from "../Utils/Card/Card";
import data from "../Utils/data";

class Main extends React.Component {
  handleClick = (event) => {
    console.log(event.target);
  };
  render() {
    const cards = data.map((item) => {
      return (
        <Card
          name={item.name}
          photo={item.photo}
          id={item.id}
          handleClick={this.handleClick}
        />
      );
    });
    return cards;
  }
}
export default Main;
