import { RECIEVE_NEWS } from "../actions/actionTypes";

function recievedAtReducer(state = {}, action) {
  switch (action.type) {
    case RECIEVE_NEWS:
      return Object.assign({}, state, {
        recievedAt: action.payload.recievedAt
      });
    default:
      return state;
  }
}

export default recievedAtReducer;
