import { FETCH_STATEDATA } from '../actions/types';

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_STATEDATA:
            return action.payload;
        default:
            return state;
    }
}