import { useEffect, useState } from "react";
import Header from "../components/Header";
import { fetchSearchResults } from "../services/SearchService";
import Card from "../components/Card";
import { Link, useParams, useSearchParams } from "react-router-dom";
import DidYouMean from "../services/DidYouMean";
const _ = require("lodash");
const SearchResults = () => {
  const [results, setResults] = useState([]);
  const [suggestion, setSuggestion] = useState(null);
  const [resultFlag, setResultFlag] = useState(true);
  const { search } = useParams();
  const keyword = search;
  useEffect(() => {
    fetchSearchResults(keyword).then((data) => {
      if (
        data.query.searchinfo.totalhits !== 0 &&
        _.get(data.continue, "sroffset")
      ) {
        setResultFlag(true);
        let count = data.continue.sroffset;
        let searchResults = [];
        for (var i = 0; i < count; i++) {
          let title = data.query.search[i].title;
          let html_render = `<div className="jumbotron" id="box"><div className="box-title"><a href="https://en.wikipedia.org/wiki/${data.query.search[i].title}" target = "_blank">${data.query.search[i].title}</a></div><div class="box-description"> ${data.query.search[i].snippet}...</div></div>`;
          searchResults.push({ title, snippet: html_render });
        }
        setResults(searchResults);
      } else {
        setResultFlag(false);
        DidYouMean(keyword).then((res) => {
          console.log(res);
          if (res.length === 1) {
            setSuggestion(res[0]);
          }
        });
      }
    });
  }, [search]);

  const isSuggestionAvailable = () => {
    console.log(resultFlag === false && suggestion !== null);
    return resultFlag === false && suggestion !== null;
  };

  return (
    <div className="about">
      <Header />
      <h1>{keyword}</h1>
      <div className="data" id="result"></div>
      {(resultFlag === false && suggestion !== null) && (
        <Link to={`/results/${suggestion}`}>Did you mean {suggestion}?</Link>
      )}
      

      {(resultFlag === false && suggestion === null) && (
        <h3>Oops! Nothing found</h3>
      )} 

      {resultFlag === true &&
        results.map((result) => (
          <span>
            <Card
              title={result.title}
              description={
                <div dangerouslySetInnerHTML={{ __html: result.snippet }} />
              }
            />
          </span>
        ))}
      {/* {results.map((result) => (
        <span>
          <Card
            title={result.title}
            description={
              <div dangerouslySetInnerHTML={{ __html: result.snippet }} />
            }
          />
        </span>
      ))} */}
    </div>
  );
};

export default SearchResults;
