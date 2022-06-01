import { StarIcon } from "@chakra-ui/icons";
import { Box, Image, Badge, Grid, GridItem, Heading } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "../models/Movie.model";
import MovieService from "../services/movie.service";

const MovieList = (props: any) => {
  // const movieService: MovieService = new MovieService();

  // movieService.getTopMovies().then((movies) => {
  //   let myTopMovies: Movie[] = movies;

  //   setTopMovies(myTopMovies);
  const [topMovies, setTopMovies] = useState<Movie[]>([]);

  // useEffect runs when component mounts and sets the state when request completes
  useEffect(() => {
    fetch("https://movieapp-sep6.azurewebsites.net/api/movienames/topmovies")
      .then((res) => res.json())
      .then((data) => setTopMovies(data));
  }, []);

  topMovies.map((movie) => {
    if (movie.poster === "N/A" || movie.poster === null) {
      movie.poster =
        "https://m.media-amazon.com/images/M/MV5BMzkyZGFlOWQtZjFlMi00N2YwLWE2OWQtYTgxY2NkNmM1NjMwXkEyXkFqcGdeQXVyNjY1NTM1MzA@._V1_SX300.jpg";
    }
    if (movie.rating === null) {
      movie.rating = 4.2;
    }
  });
  console.log(topMovies);

  return (
    <div>
      <Heading textAlign="center" marginTop="20px" marginBottom="20px">
        Top rated movies from 2021
      </Heading>
      <Grid
        templateColumns="repeat(5, 1fr)"
        gap={4}
        paddingTop="20px"
        marginBottom="40px"
        marginRight="20px"
      >
        {topMovies
          ? topMovies.map((item) => (
              <Box
                key={item.id}
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                marginLeft="20px"
              >
                <Image src={item.poster} alt={item.title} />
                {/*<img src={item.poster} alt={item.title} />*/}
                <Box p="6">
                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    noOfLines={1}
                  >
                    {item.title}
                  </Box>

                  <Box>{item.year}</Box>

                  <Box display="flex" mt="2" alignItems="center">
                    <StarIcon color="#FAD02C" />
                    <Box as="span" ml="2" color="gray.600" fontSize="sm">
                      {item.rating}
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))
          : null}
      </Grid>
    </div>
  );
};

export default MovieList;
