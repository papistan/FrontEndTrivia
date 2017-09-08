import { combineReducers } from 'redux';
import DecksReducer from './reducer_decks';

const rootReducer = combineReducers({
  decks: DecksReducer
});

export default rootReducer;
