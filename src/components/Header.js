import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(search.trim());
  };

  return (
    <>
      <div className="container">
        <div className="navbar">
          <h2 className="logo-name">MovieDb</h2>
          <div className="nav-items">
            <ul className="nav-items">
              <li className="items">
                <Link to="/" className="items">
                  Popular
                </Link>
              </li>
              <li className="items">
                <Link to="/top-rated" className="items">
                  Top Rated
                </Link>
              </li>
              <li className="items">
                <Link to="/upcoming" className="items">
                  Upcoming
                </Link>
              </li>
            </ul>
            <form className="example" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Movie Name"
                name="search"
                className="input-field"
                value={search}
                onChange={handleInputChange}
              />
              <button type="submit" className="search-button">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
