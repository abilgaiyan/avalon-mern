import { EMAIL_SELECTED } from "../actions/types";

export default function (state = null, action) {
    switch (action.type) {
        case EMAIL_SELECTED:
            // console.clear();
            // console.log(action.payload);
            return action.payload;
        default:
            return state;
    }
}
