import { FETCH_CUSTOMERSEARCH } from '../actions/types';

export default function (state = null, action) {

    switch (action.type) {
        case FETCH_CUSTOMERSEARCH:
            // alert(action.payload);
            // console.log("FETCH_CUSTOMERSEARCH", action.payload)
            return action.payload;
        default:
            return state;
    }
}