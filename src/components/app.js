import React, { Component } from 'react';
import DeckList from '../containers/deck_list';

export default class App extends Component {
  render() {
    return (
    	<div>
      <h1>Front End Trivia</h1>
      <DeckList />
      </div>
    );
  }
}
