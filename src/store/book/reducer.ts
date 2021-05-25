import { AnyAction } from 'redux';
import * as constants from './constants';

const initialState = {
    value: '',
};

export default function bookReducer(state = initialState, action: AnyAction) {
    switch (action.type) {
        case constants.SET_BOOK:
            return { value: action.payLoad.value };
        default:
            return state;
    }
}