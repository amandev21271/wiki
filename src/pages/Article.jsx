import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import "../assets/Article.css";
import formatPage from "../utils/formatPage";
import {
  fetchContentParsed,
  fetchContentWikiText,
} from "../services/SearchService";
const Article = () => {
  const { keyword } = useParams();

  const [content, setContent] = useState("");
  useEffect(() => {
    const title = keyword ? keyword : "React (JavaScript library)";
    fetchContentParsed(title).then((data) => {
      const parsedContent = formatPage(data.parse.text);
      setContent(parsedContent);
      console.log(parsedContent);
    });
  }, [keyword]);

  return (
    <div className="article">
      <Header />
      <div className="content-wrapper">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default Article;
