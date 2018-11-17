import { FETCH_BUYINGGROUPSALLDATA } from '../actions/types';

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_BUYINGGROUPSALLDATA:
            return action.payload;
        default:
            return state;
    }
}