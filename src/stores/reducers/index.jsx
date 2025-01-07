import {combineReducers} from 'redux';
import CharactersReducer from './CharactersReducer';

const rootReducer = combineReducers({
  characters: CharactersReducer,
});
export default rootReducer;
