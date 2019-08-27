import { RECEIVE_NEWS_ACTION } from "../actions/actionTypes";

function receivedAtReducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_NEWS_ACTION:
      return { ...state, receivedAt: action.payload.receivedAt };
    default:
      return state;
  }
}

export default receivedAtReducer;
