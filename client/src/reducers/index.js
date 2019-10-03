import { combineReducers } from 'redux';
import postReducer from './postReducer';
import statesReducer from './statesReducer';
import searchReducer from './searchReducer';
import adminReducer from './adminReducer';
import cityReducer from './cityReducer';

const rootReducer = combineReducers({
  posts: postReducer,
  states :statesReducer,
  searchResults: searchReducer,
  admin: adminReducer,
  cities: cityReducer
})


export default rootReducer
