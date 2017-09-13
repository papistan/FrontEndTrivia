import { combineReducers } from 'redux';
import DecksReducer from './reducer_decks';
import ActiveDeck from './reducer_active_deck';
import NewDeck from './reducer_newdeck';

const rootReducer = combineReducers({
  decks: DecksReducer,
  activeDeck: ActiveDeck,
  newDeck: NewDeck
});

export default rootReducer;
