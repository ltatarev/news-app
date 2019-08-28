import moment from "moment";
const _ = require("lodash");

let id = 0;

function parseArticle(article) {
  // * Tidy up article title, source name, publishedAt and content
  let name = _.get(article, "source.name", "");
  let title = _.get(article, "title", "");
  let publishedAt = _.get(article, "publishedAt", "");
  let content = _.get(article, "content", "");

  return {
    ...article,
    title: parseTitle(title),
    shortTitle: shortenTitle(parseTitle(title)),
    publishedAt: parseDate(publishedAt),
    source: name,
    content: parseContent(content),
    id: id++
  };
}

function parseDate(date) {
  // * Return how much time has passed since @date
  return moment(date).fromNow();
}

function parseTitle(title) {
  if (title) {
    // * Remove news source from end of string
    const regex = /( - .+)\s*/g;
    let parsedTitle = title.replace(regex, "");
    return parsedTitle;
  } else return;
}

function shortenTitle(title) {
  if (title) {
    // * Shorten really long titles
    if (title.length > 65) {
      return title.substring(0, 65) + "...";
    }
    return title;
  } else return;
}

function parseContent(content) {
  if (content) {
    // * Remove [+.. chars] from end of content
    const regex = /\[.+\]\s*/g;
    let parsedContent = content.replace(regex, "");
    return parsedContent;
  }
  return;
}

export default parseArticle;
