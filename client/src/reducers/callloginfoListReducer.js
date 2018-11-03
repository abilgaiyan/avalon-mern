import { FETCH_CALLLOGINFO_LIST } from "../actions/types";

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_CALLLOGINFO_LIST:
            // alert("123")
            // console.clear();
            // console.log("FETCH_CALLLOGINFO_LIST Reducer", action.payload)
            return action.payload;
        default:
            return state;
    }
}
