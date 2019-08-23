export const shouldFetchNews = state => {
  if (state.recievedAtReducer) {
    const lastTimeRecieved = state.recievedAtReducer.recievedAt;

    if (lastTimeRecieved != null) {
      const tenMinutes = 10 * 60 * 1000;
      return lastTimeRecieved - Date.now() > tenMinutes;
    }
  } else {
    return true;
  }
};
