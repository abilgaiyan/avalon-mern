import { FETCH_WEBSITEINFO_DESIGNTYPE } from '../actions/types';

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_WEBSITEINFO_DESIGNTYPE:
            return action.payload;
        default:
            return state;
    }
}