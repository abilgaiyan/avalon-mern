import { FETCH_CUSTOMER} from '../actions/types';

export default function(state=[], action){

    switch(action.type){
        case FETCH_CUSTOMER:
          return action.payload;
        default:
        return state;
    }
}