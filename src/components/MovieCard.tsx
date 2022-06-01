import { StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Image,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  extendTheme,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import Cast from "../models/Cast.model";
import Movie from "../models/Movie.model";
import MovieService from "../services/movie.service";
import MovieControls from "./MovieControls";

const modalHeaderTheme = extendTheme({
  initialColorMode: "lightBlue",
  useSystemColorMode: false,
});

type MovieProps = {
  movie: Movie;
  type: string;
};

const MovieCard = (props: MovieProps) => {
  /* BACKUP MOVIE DATA */
  if (props.movie.poster === "N/A" || props.movie.poster === null) {
    props.movie.poster =
      "https://m.media-amazon.com/images/M/MV5BMzkyZGFlOWQtZjFlMi00N2YwLWE2OWQtYTgxY2NkNmM1NjMwXkEyXkFqcGdeQXVyNjY1NTM1MzA@._V1_SX300.jpg";
  }
  if (props.movie.rating === null) {
    props.movie.rating = 4.2;
  }

  if (props.movie.directors === undefined || props.movie.directors === null) {
    const newDirectors: Cast[] = [
      {
        movie_id: 113419,
        person_id: 568,
        person: {
          id: 568,
          name: "Frank Oz",
          birth: 1944.0,
        },
      },
    ];
    props.movie.directors = newDirectors;
  }

  if (props.movie.stars === undefined || props.movie.stars === null) {
    const newStars: Cast[] = [
      {
        movie_id: 113419,
        person_id: 1080,
        person: {
          id: 1080,
          name: "Lindsay Crouse",
          birth: 1948.0,
        },
      },
    ];
    props.movie.stars = newStars;
  }

  if (props.movie.rating === null || props.movie.rating === undefined) {
    props.movie.rating = 4.1;
  }
  /* END OF BACKUP MOVIE DATA */

  const { isOpen, onOpen, onClose } = useDisclosure();
  const movieService: MovieService = new MovieService();

  function wrapperFunction() {
    fetch(
      `https://movieapp-sep6.azurewebsites.net/api/movienames/getmovies/${props.movie.id}`
    )
      .then((res) => res.json())
      .then((data) => {
        props.movie.directors = data.directors;
        props.movie.stars = data.stars;
        props.movie.rating = data.rating.value;
        props.movie.ratingVotes = data.rating;
      });
    onOpen();
  }

  return (
    <div className="movie-card">
      <div className="overlay">
        <Image
          maxHeight="100px"
          maxWidth="100px"
          src={props.movie.poster}
          alt={props.movie.title}
          onClick={onOpen}
        />

        <span>{props.movie.title}</span>

        <Box>
          {/* Now it comes the modal dialog */}
          <Button onClick={wrapperFunction}>Read more...</Button>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader className="modal-header">
                {props.movie.title}
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>Details about the movie {props.movie.title}</Text>
                DIRECTOR:{" "}
                {props.movie.directors?.map((director) => (
                  <Box key={director.person_id}>
                    <Text>
                      {director.person.name} ({director.person.birth})
                    </Text>
                  </Box>
                ))}
                ACTORS:{" "}
                {props.movie.stars?.map((star) => (
                  <Box key={star.person_id}>
                    <Text>
                      {star.person.name}({star.person.birth})
                    </Text>
                  </Box>
                ))}
                <Box>
                  <Text>RATING: {props.movie.rating}</Text>
                  <Text>VOTES: {props.movie.ratingVotes?.votes}</Text>
                </Box>
                {/*ADD RATING VOTES HERE*/}
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
        <Box width="100px" height="100px">
          <MovieControls type={props.type} movie={props.movie} />
        </Box>
      </div>
    </div>
  );
};

export default MovieCard;
