var _ = require("lodash");

const getLastId = state => {
  let news = state.newsReducer.news;
  return _.last(news).id;
};

export default getLastId;
