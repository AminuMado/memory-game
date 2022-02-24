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
      </div>
    );
  }
}
export default Card;
