const replaceHrefFile = (content) => {
  return content.replace(
    "/wiki/File:",
    "https://en.m.wikipedia.org/wiki/File:"
  );
};

const replaceHrefArticles = (content) => {
  const reg = new RegExp("/wiki/(?!File:)");
  return content.replace(reg, content);
};
const formatPage = (content) => {
  content = replaceHrefFile(content);
  content = replaceHrefArticles(content);
  return content;
};

export default formatPage;
