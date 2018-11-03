import { FETCH_PRODUCTINFO } from "../actions/types";

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_PRODUCTINFO:

            // console.clear();
            // console.log("FETCH_PRODUCTINFO Reducer", action.payload)
            return action.payload;
        default:
            return state;
    }
}
