import { SearchIcon } from "@chakra-ui/icons";
import { Avatar, Divider, Icon, Stack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">
              <img src="https://img.icons8.com/fluency/96/000000/disney-1.png" />
            </Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/">Movies</Link>
            </li>
            <Stack direction="column" h="70px" p={4}>
              <Divider orientation="vertical" />
            </Stack>
            <li>
              <Link to="/Search">
                <SearchIcon />
              </Link>
            </li>
            <Stack direction="column" h="70px" p={4}>
              <Divider orientation="vertical" />
            </Stack>
            <li>
              <Link to="/WatchList">Watchlist</Link>
            </li>
            <Stack direction="column" h="70px" p={4}>
              <Divider orientation="vertical" />
            </Stack>
            <li>
              <Link to="/watched">Watched</Link>
            </li>
            <Stack direction="column" h="70px" p={4}>
              <Divider orientation="vertical" />
            </Stack>
            <li>
              <Link to="/favourites">Favourites</Link>
            </li>
            <Stack direction="column" h="70px" p={4}>
              <Divider orientation="vertical" />
            </Stack>
            <li>
              <Link to="/stats">Stats</Link>
            </li>
            <Stack direction="column" h="70px" p={4}>
              <Divider orientation="vertical" />
            </Stack>
            <li>
              <Link to="/login">
                <Avatar size="sm" />
              </Link>
            </li>
            <main className="form-signin"></main>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
