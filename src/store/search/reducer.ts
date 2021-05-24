import { AnyAction } from 'redux';
import * as constants from'./constants';

const initialState = {};

export default function searchReducer(state = initialState, action: AnyAction) {
    switch(action.type) {
        case constants.SET_SEARCH:
            return {
                value: action.payload.value,
            };
        case constants.CLEAR_SEARCH:
            return {
                value: '',
            };
        default:
            return state;
    }
}