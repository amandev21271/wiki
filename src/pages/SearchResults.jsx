import { useEffect, useState } from "react";
import Header from "../components/Header";
import { fetchDetails, fetchSearchResults } from "../services/SearchService";
import Card from "../components/Card";
import { useParams, useSearchParams } from "react-router-dom";
const SearchResults = () => {
  const [results, setResults] = useState([]);
  const { search } = useParams();
  const keyword = search;
  let resultFlag = false;
  useEffect(() => {
    fetchSearchResults(keyword).then((data) => {
      console.log(data);
      if (data.query.searchinfo.totalhits !== 0) {
        resultFlag = true;
        let count = data.continue.sroffset;
        let searchResults = [];
        for (var i = 0; i < count; i++) {
          let title = data.query.search[i].title;
          let html_render = `<div className="jumbotron" id="box"><div className="box-title"><a href="https://en.wikipedia.org/wiki/${data.query.search[i].title}" target = "_blank">${data.query.search[i].title}</a></div><div class="box-description"> ${data.query.search[i].snippet}...</div></div>`;
          searchResults.push({ title, snippet: html_render });
        }
        setResults(searchResults);
      } else {
        resultFlag = false;
      }
    });
  }, [search]);
  return (
    <div className="about">
      <Header />
      <h1>{keyword}</h1>
      <div className="data" id="result"></div>
      {results.map((result) => (
        <span>
          <Card
            title={result.title}
            description={
              <div dangerouslySetInnerHTML={{ __html: result.snippet }} />
            }
          />
        </span>
      ))}
    </div>
  );
};

export default SearchResults;
