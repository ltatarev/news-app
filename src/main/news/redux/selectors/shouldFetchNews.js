const shouldFetchNews = state => {
  let obj = state.recievedAtReducer;
  let empty = Object.entries(obj).length === 0 && obj.constructor === Object;
  if (!empty) {
    const lastTimeRecieved = obj.recievedAt;
    if (lastTimeRecieved != null) {
      const tenMinutes = 10 * 60 * 1000;
      return Date.now() - lastTimeRecieved > tenMinutes;
    }
  } else {
    return true;
  }
};

export default shouldFetchNews;
