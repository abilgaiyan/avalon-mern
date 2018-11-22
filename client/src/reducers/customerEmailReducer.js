import { FETCH_EMAILALLDATA } from "../actions/types";

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_EMAILALLDATA:

            // console.clear();
            // console.log("FETCH_EMAILALLDATA Reducer", action.payload)
            return action.payload;
        default:
            return state;
    }
}
