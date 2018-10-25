import { FETCH_AUTOCOMPLETE_ID } from '../actions/types';

export default function (state = null, action) {

    switch (action.type) {
        case FETCH_AUTOCOMPLETE_ID:
            //alert("autocomplete")
            // console.log("FETCH_AUTOCOMPLETE_ID", action.payload)
            return action.payload;
        default:
            return state;
    }
}