import {
  REQUEST_NEWS_ACTION,
  RECEIVE_NEWS_ACTION,
  RECEIVE_NEWS_FAILED_ACTION,
  INITIAL_REQUEST_ACTION
} from "../actions/actionTypes";

export function newsReducer(
  state = {
    isFetching: false,
    error: {},
    news: []
  },
  action
) {
  switch (action.type) {
    case INITIAL_REQUEST_ACTION:
      return { ...state, isFetching: true };
    case REQUEST_NEWS_ACTION:
      return { ...state, isFetching: true };
    case RECEIVE_NEWS_ACTION:
      return {
        isFetching: false,
        news: action.payload.news
      };
    case RECEIVE_NEWS_FAILED_ACTION:
      return { ...state, isFetching: false, error: action.payload.error };
    default:
      return state;
  }
}

export default newsReducer;
