import { FETCH_ASHIMICROWEBSITEINFO } from "../actions/types";

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_ASHIMICROWEBSITEINFO:
            // console.clear();
            // console.log("FETCH_ASHIMICROWEBSITEINFO Reducer", action.payload)
            return action.payload;
        default:
            return state;
    }
}
