import moment from "moment";

let id = 0;

function parseArticle(article) {
  // * Tidy up article name, publishedAt and source
  const { publishedAt, source, title, content, description } = article;
  const { name } = source;

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
  // * Remove news source from end of string
  const regex = /( - .+)\s*/g;
  let parsedTitle = title.replace(regex, "");
  return parsedTitle;
}

function shortenTitle(title) {
  // * Shorten really long titles
  if (title.length > 65) {
    return title.substring(0, 65) + "...";
  }
  return title;
}

function parseContent(content) {
  // * Remove [+.. chars] from end of content
  if (content) {
    const regex = /\[.+\]\s*/g;
    let parsedContent = content.replace(regex, "");
    return parsedContent;
  }
  return null;
}

export default parseArticle;
