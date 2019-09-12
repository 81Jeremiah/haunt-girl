import { combineReducers } from 'redux';
import postReducer from './postReducer';
import statesReducer from './statesReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  posts: postReducer,
  states :statesReducer,
  searchResults: searchReducer

})


export default rootReducer
