import { StarIcon } from "@chakra-ui/icons";
import { Box, Image, Badge, Grid, GridItem } from "@chakra-ui/react";
import React, { useState } from "react";
import Movie from "../models/Movie.model";
import MovieService from "../services/movie.service";

const MovieList = (props: any) => {
  const movieService: MovieService = new MovieService();

  const [topMovies, setTopMovies] = useState<Movie[]>([]);

  movieService.GetTopMovies().then((movies) => {
    let myTopMovies: Movie[] = movies;

    setTopMovies(myTopMovies);
  });

  /*  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };*/
  //const FavouriteComponent = props.favouriteComponent;
  /*
  * TODO:
    - Make a 2x2 table with movies
    - Substitute with movies from call to api
  */
  return (
    <div>
      <Grid templateColumns="repeat(4, 1fr)" gap={4} paddingTop="20px">
        {topMovies.map((movie) => (
          <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            marginLeft="20px"
          >
            <Image src={movie.poster} alt={movie.title} />
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
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <StarIcon
                      key={i}
                      color={i < movie.rating ? "teal.500" : "gray.300"}
                    />
                  ))}
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                  {movie.rating} 4/5
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
