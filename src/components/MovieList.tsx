import { StarIcon } from "@chakra-ui/icons";
import { Box, Image, Badge, Grid, GridItem, Heading } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "../models/Movie.model";
import MovieService from "../services/movie.service";

const MovieList = (props: any) => {
  const movieService: MovieService = new MovieService();

  const [topMovies, setTopMovies] = useState<Movie[]>([]);

  movieService.getTopMovies().then((movies) => {
    let myTopMovies: Movie[] = movies;

    setTopMovies(myTopMovies);
  });

  return (
    <div>
      <Heading textAlign="center" marginTop="20px" marginBottom="20px">
        Top rated movies
      </Heading>
      <Grid templateColumns="repeat(4, 1fr)" gap={4} paddingTop="20px">
        {topMovies.map((movie) => (
          <Box
            key={movie.id}
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            marginLeft="20px"
          >
            {/*<Image src={movie.poster} alt={movie.title} />*/}
            <img src={movie.poster} alt={movie.title} />
            <Box p="6">
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={1}
              >
                {movie.title}
              </Box>

              <Box>{movie.year}</Box>

              <Box display="flex" mt="2" alignItems="center">
                <StarIcon color="teal.500" />
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                  {movie.rating}
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Grid>
    </div>
  );
};

export default MovieList;
