import { combineReducers } from 'redux';
import postReducer from './postReducer';
import statesReducer from './statesReducer';
import searchReducer from './searchReducer';
import adminReducer from './adminReducer';
import cityReducer from './cityReducer';
import awardReducer from './awardReducer';
import interviewReducer from './interviewReducer';

const rootReducer = combineReducers({
  posts: postReducer,
  states :statesReducer,
  searchResults: searchReducer,
  admin: adminReducer,
  cities: cityReducer,
  awards: awardReducer,
  interviews: interviewReducer

})


export default rootReducer
