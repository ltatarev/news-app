import {
  INITIAL_REQUEST_ACTION,
  REQUEST_NEWS_ACTION,
  RECEIVE_NEWS_ACTION,
  RECEIVE_NEWS_FAILED_ACTION
} from "./actionTypes";

import { getLiveNews, parseArticle } from "../../services";

// * Action dispatched from screen on user request
function initialRequest() {
  return {
    type: INITIAL_REQUEST_ACTION
  };
}

// * Action dispatched when fetching live news starts
function requestNews() {
  return {
    type: REQUEST_NEWS_ACTION
  };
}

// * Action dispatched upon receiving news from API
function receiveNews(news) {
  return {
    type: RECEIVE_NEWS_ACTION,
    payload: {
      news: news,
      receivedAt: Date.now()
    }
  };
}

// * Action dispatched in case of error in API request
function receiveNewsFailed(error) {
  return {
    type: RECEIVE_NEWS_FAILED_ACTION,
    payload: {
      error,
      receivedAt: Date.now()
    }
  };
}

function fetchNews() {
  return function(dispatch) {
    dispatch(requestNews());
    return getLiveNews()
      .then(response => {
        const { articles } = response;
        const articlesForDispatch = articles.map(article =>
          parseArticle(article)
        );
        dispatch(receiveNews(articlesForDispatch));
      })
      .catch(error => dispatch(receiveNewsFailed(error)));
  };
}

export {
  requestNews,
  receiveNews,
  receiveNewsFailed,
  fetchNews,
  initialRequest
};

export default fetchNews;
