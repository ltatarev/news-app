import getReceivedAt from "./getReceivedAt";

const tenMinutes = 10 * 60 * 1000;

const shouldFetchNews = state => {
  let receivedAt = getReceivedAt(state);
  receivedAt ? Date.now() - receivedAt > tenMinutes : true;
};

export default shouldFetchNews;
