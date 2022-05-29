// This file contains the urls pointing to azure
/* export const REACT_APP_AZURE_URL =
  "https://movieapp-sep6.azurewebsites.net/api/movienames/1"; */

/* MOVIES */
export const BASE_URL_MOVIES =
  "https://movieapp-sep6.azurewebsites.net/api/movienames/getmovies";

export const ALL_MOVIES =
  "https://movieapp-sep6.azurewebsites.net/api/movienames/getmovies"; // for getting all the movies, mainly to return the 8 movies to display in the main page

export const MOVIES_BY_NAME =
  "https://movieapp-sep6.azurewebsites.net/api/movienames/getmovies/?title="; //for search by name

export const MOVIE_BY_ID =
  "https://movieapp-sep6.azurewebsites.net/api/movienames/getmovies/"; // getting movie by id, for when clicking on a movie to get more info
  export const USER_BY_ID = "https://movieapp-sep6.azurewebsites.net/api/user/user"; //getting the user GET
  export const REGISTER= "https://movieapp-sep6.azurewebsites.net/api/user/register"; //register POST
  export const LOGIN = "https://movieapp-sep6.azurewebsites.net/api/user/login"; //login POST
