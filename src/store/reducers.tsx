import {combineReducers} from 'redux';
import {dataReducer} from './dataSet/redusers';

export default combineReducers({
    dataSet: dataReducer,
});