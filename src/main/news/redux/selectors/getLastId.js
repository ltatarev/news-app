const getLastId = state => {
  let news = state.newsReducer.news;
  let lastId = news.map(article => article.id);
  return Math.max(...lastId);
};

export default getLastId;
