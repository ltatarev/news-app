import { REQUEST_NEWS, RECIEVE_NEWS } from "../actions/actionTypes";

export function newsReducer(
  state = {
    isFetching: false,
    news: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_NEWS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECIEVE_NEWS:
      return Object.assign({}, state, {
        isFetching: false,
        news: action.payload.news
      });
    default:
      return state;
  }
}

export default newsReducer;
