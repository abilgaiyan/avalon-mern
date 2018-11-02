import { FETCH_AVALONINFO } from "../actions/types";

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_AVALONINFO:
            // console.clear();
            // console.log("FETCH_AVALONINFO Reducer", action.payload)
            return action.payload;
        default:
            return state;
    }
}
