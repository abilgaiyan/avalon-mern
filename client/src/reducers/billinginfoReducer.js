import { FETCH_BILLINGINFO } from "../actions/types";

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_BILLINGINFO:

            // console.clear();
            // console.log("FETCH_BILLINGINFO Reducer", action.payload)
            return action.payload;
        default:
            return state;
    }
}
