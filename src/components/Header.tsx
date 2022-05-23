import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <Link to="/">Movies</Link>
        </div>

        <ul className="nav-links">
          <li>
            <Link to="/">Movies</Link>
          </li>
          <li>
            <Link to="/Favourites">Favourite Movies</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
