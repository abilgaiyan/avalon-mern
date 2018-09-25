import { FETCH_CONTACTUS} from '../actions/types';

export default function(state=[], action){

    switch(action.type){
        case FETCH_CONTACTUS:
          return action.payload;
        default:
        return state;
    }
}