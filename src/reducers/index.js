import { combineReducers } from 'redux';
import DecksReducer from './reducer_decks';
import ActiveDeck from './reducer_active_deck';
import ActiveCard from './reducer_active_card';

const rootReducer = combineReducers({
  decks: DecksReducer,
  activeDeck: ActiveDeck,
  activeCard: ActiveCard
});

export default rootReducer;
