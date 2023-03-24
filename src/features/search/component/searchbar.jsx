import "../assets/searchbar.css";
import logo from "../assets/logo.svg";
import { useState } from "react";
const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState("");

  const handleChange = (e) => {
    setTerm(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(term);
    setTerm('');
  };

  return (
    <div className="wrapper">
      <div className="content">
        
        <form onSubmit={handleSearch}>
          <div id="intro-search-bar" className="large-search-bar">
            <input
              type="text"
              placeholder="Search..."
              value={term}
              onChange={handleChange}
            />
            <button type="submit">
              <span className="material-symbols-sharp">search</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
