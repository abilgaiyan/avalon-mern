import { FETCH_BUSINESSEMAILINFO } from "../actions/types";

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_BUSINESSEMAILINFO:

            // console.clear();
            // console.log("FETCH_BUSINESSEMAILINFO Reducer", action.payload)
            return action.payload;
        default:
            return state;
    }
}
