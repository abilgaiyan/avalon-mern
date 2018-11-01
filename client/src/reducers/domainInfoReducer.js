import { FETCH_DOMAININFO } from "../actions/types";

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_DOMAININFO:
            // console.clear();
            // console.log("FETCH_DOMAININFO Reducer", action.payload)
            return action.payload;
        default:
            return state;
    }
}
