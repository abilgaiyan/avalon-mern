import { FETCH_PHONECALL} from '../actions/types';

export default function(state=[], action){

    switch(action.type){
        case FETCH_PHONECALL:
          return action.payload;
        default:
        return state;
    }
}