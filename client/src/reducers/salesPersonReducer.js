import { FETCH_SALESPERSONALLDATA } from '../actions/types';

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_SALESPERSONALLDATA:
            // console.log("Reducer Fetch_salesPersonData", action.payload)
            return action.payload;
        default:
            return state;
    }
}