const url = "https://en.wikipedia.org/w/api.php";

// https://en.wikipedia.org/w/api.php?action=query&format=json&prop=revisions&titles=Pet_door&formatversion=2&rvprop=content&rvslots=*

// {
// 	"action": "query",
// 	"format": "json",
// 	"prop": "revisions",
// 	"titles": "Pet_door",
// 	"formatversion": "2",
// 	"rvprop": "content",
// 	"rvslots": "*"
// }

const getURL = (
  action,
  format,
  prop,
  keyword,
  formatversion,
  rvprop,
  rvslots
) => {
  return (
    url +
    "?action=" +
    action +
    "&format=" +
    format +
    "&prop=" +
    prop +
    "&titles=" +
    keyword +
    "&formatversion=" +
    formatversion +
    "&rvprop=" +
    rvprop +
    "&rvslots=" +
    rvslots +
    "&origin=*"
  );
};
const fetchDetails = ({ keyword }) => {
  const request = (
    action = "query",
    format = "json",
    prop = "revisions",
    keyword,
    formatversion = "2",
    rvprop = "content",
    rvslots = "*"
  ) => {
    const queryURL = getURL(
      action,
      format,
      prop,
      keyword,
      formatversion,
      rvprop,
      rvslots
    );
    fetch(queryURL)
      .then((resp) => resp.json())
      .then((data) => console.log(data));
  };

  return request(keyword);
};

const fetchSearchResults = (title) => {
  const request = (title) => {
    const resultURL = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + ${title} + "&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20`;

    return fetch(resultURL, {
      headers: {
        accept: "*/*",
      },
    });
  };
  return request(title).then((response) => response.json());
};

const fetchContentWikiText = (title) => {
  const request = (title) => {
    return fetch(
      `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=revisions&titles=${title}&formatversion=2&rvprop=content&rvslots=*&origin=*`,
      {
        headers: {
          accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
          "accept-language": "en-GB,en;q=0.7",
        },
        body: null,
        method: "GET",
      }
    );
  };
  return request(title).then((response) => response.json());
};

const fetchContentParsed = (title) => {
  // https://en.wikipedia.org/w/api.php?action=parse&format=json&page=Pet_door&prop=text&formatversion=2

  const request = (title) => {
    return fetch(
      `https://en.wikipedia.org/w/api.php?action=parse&format=json&page=${title}&prop=text&formatversion=2&origin=*`,
      {
        headers: {
          accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
          "accept-language": "en-GB,en;q=0.7",
        },
        body: null,
        method: "GET",
      }
    );
  };
  return request(title).then((response) => response.json());
};

export {
  fetchDetails,
  fetchSearchResults,
  fetchContentWikiText,
  fetchContentParsed,
};
