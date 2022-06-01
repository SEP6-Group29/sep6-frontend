import React from "react";
import { Route, Routes } from "react-router-dom";
import AddFavourites from "./components/AddToFavourites";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import Watchlist from "./components/Watchlist";
import Register from "./components/Register";
import Login from "./components/Login";

import "./App.css";
import Add from "./components/Add";

import { GlobalProvider } from "./context/GlobalState";
import Watched from "./components/Watched";
import MovieStats from "./components/MovieStats";
//import "./lib/font-awesome/css/all.min";
//import "src/lib/font-awesome/css/all.min.css";

function App2() {
  return (
    <GlobalProvider>
      <Header />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/Search" element={<Add />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/watched" element={<Watched />} />
        <Route path="/favourites" element={<AddFavourites />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/stats" element={<MovieStats />} />
      </Routes>
    </GlobalProvider>
  );
}

export default App2;
