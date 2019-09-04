import shouldFetchNews from "./shouldFetchNews";
import getNews from "./getNews";
import getNewsById from "./getNewsById";
import getFetching from "./getFetching";
import getReceivedAt from "./getReceivedAt";
import getError from "./getError";
import getLastId from "./getLastId";

export {
  shouldFetchNews,
  getNews,
  getNewsById,
  getFetching,
  getError,
  getReceivedAt,
  getLastId
};

const selectors = {
  shouldFetchNews,
  getNews,
  getFetching,
  getError,
  getReceivedAt,
  getNewsById,
  getLastId
};

export default selectors;
