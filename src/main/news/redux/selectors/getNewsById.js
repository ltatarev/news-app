const getNewsById = (state, id) => {
  return state.newsReducer.news[id];
};

export default getNewsById;
