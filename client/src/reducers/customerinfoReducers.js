import { FETCH_CUSTOMERINFO } from "../actions/types";

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_CUSTOMERINFO:
      //alert(action.payload)
      //console.log("FETCH_PHONECALL", action.payload);
      return action.payload;
    default:
      return state;
  }
}
