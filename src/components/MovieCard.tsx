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
import React from "react";
import Movie from "../models/Movie.model";
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
  console.log(
    "From MovieCard - Favourites - props title: " +
      props.movie.title +
      "...and type: " +
      props.type
  );

  if (props.movie.poster === "N/A" || props.movie.poster === null) {
    props.movie.poster =
      "https://m.media-amazon.com/images/M/MV5BMzkyZGFlOWQtZjFlMi00N2YwLWE2OWQtYTgxY2NkNmM1NjMwXkEyXkFqcGdeQXVyNjY1NTM1MzA@._V1_SX300.jpg";
  }
  if (props.movie.rating === null) {
    props.movie.rating = 4.2;
  }

  const { isOpen, onOpen, onClose } = useDisclosure();

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
          <Button onClick={onOpen}>Read more...</Button>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader className="modal-header">
                {props.movie.title}
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>Here it comes the description of the movie</Text>
                <Text>DIRECTOR</Text>
                <Text>ACTORS</Text>
                <Text>Rating: {props.movie.rating}</Text>
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
