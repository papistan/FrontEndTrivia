import React, { Component } from 'react';
import DeckList from '../containers/deck_list';
import CardView from '../containers/card_view';

export default class App extends Component {
  render() {
    return (
    	<div>
      <h1 id="title">Front End Trivia</h1>
      <CardView />
      <DeckList />
      </div>
    );
  }
}
