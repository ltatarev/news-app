import { REQUEST_NEWS, RECIEVE_NEWS } from "./actionTypes";

import services from "../../services";
import selectors from "../../selectors";

function requestNews() {
  return {
    type: REQUEST_NEWS
  };
}

function recieveNews(news) {
  return {
    type: RECIEVE_NEWS,
    news: services.newsService(news),
    recievedAt: Date.now()
  };
}

function fetchNews() {
  return function(dispatch) {
    dispatch(requestNews());

    return services.api
      .getLiveNews()
      .then(
        response => response.json(),
        error => console.log("An error occurred.", error)
      )
      .then(json => dispatch(recieveNews(json)));
  };
}

export function fetchNewsIfNeeded() {
  return (dispatch, getState) => {
    if (selectors.shouldFetchNews(getState())) {
      return dispatch(fetchNews());
    } else {
      return Promise.resolve();
    }
  };
}
