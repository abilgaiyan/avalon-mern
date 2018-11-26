import { FETCH_COMMUNICATIONLOG } from '../actions/types';

export default function (state = null, action) {

    switch (action.type) {
        case FETCH_COMMUNICATIONLOG:
            return action.payload;
        default:
            return state;
    }
}
