import { SearchBar } from "../features/search";
import { useNavigate } from "react-router-dom";
import "../assets/Home.css";
import HeaderLarge from "../components/HeaderLarge";
const Home = (prop) => {
  const navigate = useNavigate();
  function onSearch(term) {
    console.log("term", term);
    navigate(`/results?search=${term}`);
  }
  return (
    <div className="Home">
      <HeaderLarge />
      <h1>Better wikipedia</h1>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default Home;
