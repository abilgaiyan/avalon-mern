import { FETCH_PRODUCTINFO_ASHIPRODUCTSTATUS } from '../actions/types';

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_PRODUCTINFO_ASHIPRODUCTSTATUS:
            return action.payload;
        default:
            return state;
    }
}