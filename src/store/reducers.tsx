import {combineReducers} from 'redux';
import {dataReducer} from './dataSet/redusers';
import {actDataReducer} from './actDataSet/redusers';

export default combineReducers({
    dataSet: dataReducer,
    actDataReducer: actDataReducer
});