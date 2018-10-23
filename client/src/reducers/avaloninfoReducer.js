import { FETCH_AVALONINFO } from '../actions/types';

export default function (state = [], action) {

    switch (action.type) {
        case FETCH_AVALONINFO:
            // console.log("FETCH_AVALONINFO", action.payload)
            return action.payload;
        default:
            return state;
    }
}