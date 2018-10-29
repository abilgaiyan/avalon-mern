import { FETCH_BILLINGFORM_PRODUCTPLAN } from '../actions/types';

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_BILLINGFORM_PRODUCTPLAN:
            return action.payload;
        default:
            return state;
    }
}