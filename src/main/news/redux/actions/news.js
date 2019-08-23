import { REQUEST_NEWS, RECIEVE_NEWS } from "./actionTypes";

import services from "../../services";
import selectors from "../selectors";

function requestNews() {
  return {
    type: REQUEST_NEWS
  };
}

function recieveNews(news) {
  return {
    type: RECIEVE_NEWS,
    payload: {
      news: news,
      recievedAt: Date.now()
    }
  };
}

function fetchNews() {
  return function(dispatch) {
    dispatch(requestNews());

    return services.api
      .getLiveNews()
      .then(response => response.articles)
      .then(articles => dispatch(recieveNews(articles)));
  };
}

function fetchNewsIfNeeded() {
  console.log("Fetching news...");
  return (dispatch, getState) => {
    if (selectors.shouldFetchNews(getState())) {
      console.log("selector: ", selectors.shouldFetchNews(getState()));
      return dispatch(fetchNews());
    } else {
      return Promise.resolve();
    }
  };
}

export default fetchNewsIfNeeded;
