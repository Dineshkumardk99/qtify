import React from "react";
import "./Search.css";
import SearchIcon from "../../assets/Search-icon.png";
const Search = () => {
  return (
    <div>
      <form className="wrapper">
        <input className="search" />
        <div>
          <button className="searchButton" type="submit">
            <img src={SearchIcon} alt="searchicon" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
