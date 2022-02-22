import React from "react";
import "./Card.css";
import data from "../data";
class Card extends React.Component {
  render() {
    return (
      <div
        className="card-container"
        id={this.props.id}
        onClick={(event) => {
          this.props.handleClick(event);
        }}
      >
        <img src={this.props.photo}></img>
        <p>{this.props.name}</p>
      </div>
    );
  }
}
export default Card;
