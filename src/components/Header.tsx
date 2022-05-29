import React from "react";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

/* import "src/assets/icons8-romantic-movies-16.png"; */

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">
              {/* 
              <img src="https://img.icons8.com/color/48/000000/romantic-movies--v1.png" /> */}
              <img src="https://img.icons8.com/fluency/96/000000/disney-1.png" />
              {/* <img src="https://img.icons8.com/color/96/000000/ethereum.png" /> */}
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
            <li>
              <Link to="/login">Login</Link>             
            </li>
            <li>
            <Link to="/register">Register</Link>             
            </li>
            <main className="form-signin">
             
             </main>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
