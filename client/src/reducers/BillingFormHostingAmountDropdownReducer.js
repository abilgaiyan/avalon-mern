import { FETCH_BILLINGFORM_HOSTINGAMOUNT } from '../actions/types';

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_BILLINGFORM_HOSTINGAMOUNT:
            return action.payload;
        default:
            return state;
    }
}