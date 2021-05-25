import * as constants from './constants';

export function setBook(value: string) {
    return {
        type: constants.SET_BOOK,
        payLoad: {
            value,
        },
    };
}