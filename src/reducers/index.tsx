import { combineReducers } from 'redux';
import counterReducer from './counterRDC';

export default combineReducers({
  counter: counterReducer
});
