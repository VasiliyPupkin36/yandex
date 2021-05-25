import { combineReducers } from 'redux';
import bookReducer from './book';
import modalReducer from './modal';
import searchReducer from './search';

export default combineReducers({
    modal: modalReducer,
    search: searchReducer,
    book: bookReducer,
});
