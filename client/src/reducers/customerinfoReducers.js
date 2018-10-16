import { FETCH_CUSTOMERINFO } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_CUSTOMERINFO:
      // console.log("FETCH_PHONECALL", action.payload);
      return action.payload;
    default:
      return state;
  }
}
