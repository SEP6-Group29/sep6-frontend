import React from "react";
import { Route, Routes } from "react-router-dom";
import AddFavourites from "./components/AddToFavourites";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import Watchlist from "./components/Watchlist";

import "./App.css";
import Add from "./components/Add";

import { GlobalProvider } from "./context/GlobalState";
//import "./lib/font-awesome/css/all.min";
//import "src/lib/font-awesome/css/all.min.css";

function App2() {
  return (
    <GlobalProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Add />} />
        <Route path="/movies" element={<MovieList />} />
        {/* <Route path="/login" /> */}
        {/* <Route path="/register" /> */}
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/favourites" element={<AddFavourites />} />
        {/* <Route path="/account" element={<Account/>} /> */}
      </Routes>
    </GlobalProvider>
  );
}

export default App2;
