import React from "react";
import CardItem from "./CardItem";
import "../../styles/open-lang.css";
import "../../styles/cardlist.css";

class CardList extends React.Component {
  render() {
    return (
      <div className="container card-list">
        <div className="top">
          <p className="text small">{this.props.collection}</p>
          <div className="divider horizontal" />
        </div>
        <div className="slider">
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
      </div>
    );
  }
}

export default CardList;
