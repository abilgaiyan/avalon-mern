import { FETCH_SUPPORTQUERY } from '../actions/types';

export default function (state = [], action) {

    switch (action.type) {
        case FETCH_SUPPORTQUERY:
            return action.payload;
        default:
            return state;
    }
}