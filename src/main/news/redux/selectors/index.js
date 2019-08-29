import shouldFetchNews from "./shouldFetchNews";
import getNews from "./getNews";
import getFetching from "./getFetching";
import getReceivedAt from "./getReceivedAt";
import getError from "./getError";

export { shouldFetchNews, getNews, getFetching, getError, getReceivedAt };

const selectors = {
  shouldFetchNews,
  getNews,
  getFetching,
  getError,
  getReceivedAt
};

export default selectors;
