import { AnyAction } from 'redux';
import * as constants from './constants';

const initialState = {
    isOpen: false,
};

type State = typeof initialState;

export default function modalReduser(state = initialState, action: AnyAction): State {
    switch(action.type) {
        case constants.OPEN_MODAL:
            return {
                isOpen: true,
            };
        case constants.CLOSE_MODAL:
            return {
                isOpen: false,
            };
        default:
            return state;
    }
}
