import { combineReducers } from 'redux';
import modalReducer from './modal';
import searchReducer from './search';

export default combineReducers({
    modal: modalReducer,
    search: searchReducer,
});
