import { COMMENT_SELECTED } from "../actions/types";

export default function (state = null, action) {
    switch (action.type) {
        case COMMENT_SELECTED:
            // console.clear();
            // console.log(action.payload);
            return action.payload;
        default:
            return state;
    }
}
