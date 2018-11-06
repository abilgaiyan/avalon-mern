import { FETCH_PREVIOUSCALLTYPE } from '../actions/types';

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_PREVIOUSCALLTYPE:
            return action.payload;
        default:
            return state;
    }
}