import { FETCH_EMAILS} from '../actions/types';

export default function(state=[], action){

    switch(action.type){
        case FETCH_EMAILS:
          return action.payload;
        default:
        return state;
    }
}
