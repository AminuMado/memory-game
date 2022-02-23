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
    return <div className="main">{cards}</div>;
  }
}
export default Main;
