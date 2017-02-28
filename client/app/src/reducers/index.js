import { combineReducers } from 'redux';
import DataSetsReducer from './reducer_dataSets';
import {reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  dataSets: DataSetsReducer,
  form: formReducer
});

export default rootReducer;
