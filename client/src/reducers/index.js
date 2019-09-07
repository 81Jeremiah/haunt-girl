import { combineReducers } from 'redux';
import postReducer from './postReducer';
import statesReducer from './statesReducer';

const rootReducer = combineReducers({
  posts: postReducer,
  states :statesReducer

})


export default rootReducer
