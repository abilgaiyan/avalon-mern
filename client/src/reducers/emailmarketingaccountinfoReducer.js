import { FETCH_EMAILMARKETINGACCOUNTINFO } from "../actions/types";

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_EMAILMARKETINGACCOUNTINFO:

            // console.clear();
            // console.log("FETCH_EMAILMARKETINGACCOUNTINFO Reducer", action.payload)
            return action.payload;
        default:
            return state;
    }
}
