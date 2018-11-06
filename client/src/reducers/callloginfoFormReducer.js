import { FETCH_CALLLOGINFO } from '../actions/types';

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_CALLLOGINFO:
            return action.payload;
        default:
            return state;
    }
}