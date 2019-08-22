import api from "./api";

async function newsServiceAsync() {
  try {
    const response = await api.getLiveNews();
    return response;
  } catch (e) {
    return console.log("Unexpected error occurred");
  }
}
newsServiceAsync().then(resp => {
  newsService(resp);
});

// * final articles array & shouldRefresh param
let articles = [];
let shouldRefresh = true;

async function newsService(liveNews) {
  if (liveNews != undefined) {
    // * check if news need to be refreshed
    shouldRefresh = liveNews.createdAt - Date.now() > 10 * 60 * 1000;
    // * parse articles and push into articles array
    liveNews.articles.forEach(parseArticle);
    console.log(articles);
    return { articles, shouldRefresh };
  } else {
    let now = Date.now();
    return { error: "Error occured", createdAt: now };
  }
}

function parseArticle(article) {
  // title, date published, picture, title, author, date, content
  const parsedArticle = {};
  for (key in article) {
    switch (key) {
      case "title":
        parsedArticle["title"] = parseTitle(article[key]);
        break;
      case "publishedAt":
        let articlePublishedAt = Date.parse(article[key]);
        parsedArticle["date"] = parseDate(articlePublishedAt);
        break;
      case "description":
      case "url":
        break;
      case "source":
        parsedArticle["source"] = article[key].name;
        break;

      default:
        parsedArticle[key] = article[key];
        break;
    }
  }
  if (parsedArticle["urlToImage"] == null) {
    return;
  }
  articles.push(parsedArticle);
}

function parseDate(date) {
  // * Return how much time has passed since @date
  let dateDiff = (Date.now() - date) / 1000;
  // * 60 * 60 = 1 hour in seconds
  // * 60 * 60 * 24 = 1 day in seconds
  // * 60 * 60 * 24 * 30 = 1 month in seconds
  // * 60 * 60 * 24 * 30 * 12 = 1 year in seconds
  if (dateDiff < 60 * 60) {
    let minutes = Math.ceil(dateDiff / 60);
    return `${minutes} minutes ago`;
  } else if (dateDiff < 60 * 60 * 24) {
    let hours = Math.floor(dateDiff / (60 * 60));
    return `${hours} hours ago`;
  } else if (dateDiff < 60 * 60 * 24 * 30) {
    let days = Math.floor(dateDiff / (60 * 60 * 24));
    return `${days} days ago`;
  } else if (dateDiff < 60 * 60 * 24 * 30 * 12) {
    let months = Math.floor(dateDiff / (60 * 60 * 24 * 30));
    return `${months} months ago`;
  } else {
    let years = Math.floor(dateDiff / (60 * 60 * 24 * 30 * 12));
    return `${years} years ago`;
  }
}

function parseTitle(title) {
  let parsedTitle = title.split("-")[0];
  return parsedTitle.substring(0, parsedTitle.length - 1);
}

export default newsService;
