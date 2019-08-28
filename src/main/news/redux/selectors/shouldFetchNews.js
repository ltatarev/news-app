import getReceivedAt from "./getReceivedAt";

const tenMinutes = 10 * 60 * 1000;

const shouldFetchNews = state => {
  let receivedAt = getReceivedAt(state);
  if (receivedAt) {
    return Date.now() - receivedAt > tenMinutes;
  } else return true;
};

export default shouldFetchNews;
