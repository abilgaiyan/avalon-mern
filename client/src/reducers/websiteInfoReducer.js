import { FETCH_WEBSITEINFO } from "../actions/types";

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_WEBSITEINFO:

      // console.clear();
      // console.log("FETCH_WEBSITEINFO Reducer", action.payload)
      return action.payload;
    default:
      return state;
  }
}
