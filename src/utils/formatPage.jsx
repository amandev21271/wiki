const replaceHrefFile = (content) => {
  //const reg = new RegExp("/wiki/File: /g");
  return content.replaceAll(
    "/wiki/File:",
    "https://en.m.wikipedia.org/wiki/File:"
  );
};

const replaceHrefHelp = (content) => {
  // const reg = new RegExp("/wiki/Help: /g");
  return content.replaceAll(
    "/wiki/Help:",
    "https://en.wikipedia.org/wiki/Help:"
  );
};

const replaceAnchorWithLink = (content) => {
  content = content.replaceAll("<a", "<Link");
  content = content.replaceAll("</a>", "</Link>");
  content = content.replaceAll("href", "to");
  return content;
};

const replaceEditHref = (content) => {
  return content.replaceAll(
    "/w/index.php?title",
    "https://en.wikipedia.org/w/index.php?title"
  );
};
const replaceHrefArticles = (content) => {
  const reg = new RegExp(/\/wiki\/(?!File:)/gi);
  return content.replaceAll(reg, "/wiki/#/article/");
};
const formatPage = (content) => {
  content = replaceHrefHelp(replaceHrefArticles(content));
  content = replaceEditHref(content);
  return replaceHrefFile(content);
};

export default formatPage;
