import * as constants from'./constants';

export function setSearch(value: string) {
    return {
        type: constants.SET_SEARCH,
        payload: {
            value,
        },
    };
}

export function clearSearch() {
    return {
        type: constants.CLEAR_SEARCH,
    };
}
