import { createStore } from "redux";
import rootReducer from './redusers';

export interface RootState {
    modal: {
        isOpen: boolean,
    },
    search: {
        value: string,
    },
    book: {
        value: string,
    },
}

export default createStore(rootReducer);