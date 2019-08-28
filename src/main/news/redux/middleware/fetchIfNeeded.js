import shouldFetchNews from "../selectors/shouldFetchNews";
import fetchNews from "../actions/news";

const fetchIfNeeded = store => next => action => {
  const { dispatch, getState } = store;

  // * Check for initial request; if true, start API call
  if (action.type === "INITIAL_REQUEST") {
    if (shouldFetchNews(getState())) {
      fetchNews()(dispatch);
    }
  } else {
    next(action);
  }
};

export default fetchIfNeeded;
