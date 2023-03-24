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
  const title = keyword ? keyword : "React (JavaScript library)";
  const [content, setContent] = useState("");
  useEffect(() => {
    fetchContentParsed(title).then((data) => {
      setContent(formatPage(data.parse.text));
      console.log(formatPage(data.parse.text));
    });
  }, []);

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
