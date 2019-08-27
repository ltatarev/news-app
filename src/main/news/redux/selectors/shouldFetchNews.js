import getReceivedAt from "./getReceivedAt";
const _ = require("lodash");

const tenMinutes = 10;

const shouldFetchNews = state => {
  let obj = getReceivedAt(state);
  let empty = _.isEmpty(obj);
  if (!empty) {
    const { receivedAt } = obj;
    if (receivedAt) {
      return Date.now() - receivedAt > tenMinutes;
    }
  } else {
    return true;
  }
};

export default shouldFetchNews;
