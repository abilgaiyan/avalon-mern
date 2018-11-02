import { FETCH_WEBSITESTATUS } from '../actions/types';

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_WEBSITESTATUS:
            return action.payload;
        default:
            return state;
    }
}