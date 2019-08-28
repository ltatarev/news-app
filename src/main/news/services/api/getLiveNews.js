const url =
  "https://newsapi.org/v2/top-headlines?" +
  "country=us&" +
  "apiKey=9d6481a04e3140ebb7965883b1901997";

function getLiveNews() {
  // * Make a request for top headlines in US
  return fetch(url)
    .then(response => {
      const { status } = response;
      if (status === 200) {
        return response.json();
      }
      throw new Error(response.status);
    })
    .catch(error => {
      throw error;
    });
}

export default getLiveNews;
