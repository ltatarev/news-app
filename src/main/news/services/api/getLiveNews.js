const url =
  "https://newsapi.org/v2/top-headlines?" +
  "country=us&" +
  "apiKey=9d6481a04e3140ebb7965883b1901997";

async function getLiveNews() {
  // Make a request for top headlines in US
  let response = await fetch(url);

  if (response.status == 200) {
    let json = await response.json();
    return json;
  }
  throw new Error(response.status);
}

export default getLiveNews;
