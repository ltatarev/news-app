import shouldFetchNews from "./shouldFetchNews";
import getNews from "./getNews";
import getNewsById from "./getNewsById";
import getFetching from "./getFetching";
import getReceivedAt from "./getReceivedAt";
import getError from "./getError";

export {
  shouldFetchNews,
  getNews,
  getNewsById,
  getFetching,
  getError,
  getReceivedAt
};

const selectors = {
  shouldFetchNews,
  getNews,
  getNewsById,
  getFetching,
  getError,
  getReceivedAt
};

export default selectors;
