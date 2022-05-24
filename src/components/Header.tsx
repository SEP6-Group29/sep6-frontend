import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">
              <i>LOGO TO RETURN TO THE MAIN PAGE</i>
            </Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/">Movies</Link>
            </li>
            <li>
              <Link to="/WatchList">Watchlist</Link>
            </li>
            <li>
              <Link to="/watched">Watched</Link>
            </li>
            <li>
              <Link to="/Favourites">Favourite Movies</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
