import { FETCH_SSLINFO } from "../actions/types";

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_SSLINFO:

            // console.clear();
            // console.log("FETCH_SSLINFO Reducer", action.payload)
            return action.payload;
        default:
            return state;
    }
}
