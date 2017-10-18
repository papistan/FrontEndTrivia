import React, { Component } from "react";
import DeckList from "../containers/deck_list";
import CardView from "../containers/card_view";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="title-app">
          <h1 id="title">Front End Trivia</h1>
        </div>
        <div className="content">
          <CardView className="card-view-app" />
          <DeckList className="deck-list-app" />
        </div>
      </div>
    );
  }
}
