import { FETCH_PHONECALL } from '../actions/types';

export default function (state = [], action) {

    switch (action.type) {
        case FETCH_PHONECALL:
            // console.log("FETCH_PHONECALL", action.payload)
            return action.payload;
        default:
            return state;
    }
}