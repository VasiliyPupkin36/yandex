import * as constants from './constants';

export function openModal() {
    return {
        type: constants.OPEN_MODAL,
    };
}

export function closeModal() {
    return {
        type: constants.CLOSE_MODAL,
    };
}
