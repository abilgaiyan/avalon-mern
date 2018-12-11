import { FETCH_ORPHENEMAILALLDATA } from "../actions/types";

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_ORPHENEMAILALLDATA:

            // console.clear();
            // console.log("FETCH_ORPHENEMAILALLDATA Reducer", action.payload)
            return action.payload;
        default:
            return state;
    }
}
