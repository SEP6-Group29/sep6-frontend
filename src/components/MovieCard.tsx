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
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="movie-card">
      <div className="overlay">
        {props.movie.poster ? (
          <>
            {/* />*/}
            <Box>
              <Image
                src={props.movie.poster}
                alt={props.movie.title}
                onClick={onOpen}
              />
            </Box>

            <span>{props.movie.title}</span>

            {/* Now it comes the modal dialog */}
            <Button onClick={onOpen}>Open Modal</Button>

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
          </>
        ) : (
          <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            marginLeft="20px"
          >
            <Image src={props.movie.poster} alt={props.movie.title} />
            {/*<img src={item.poster} alt={item.title} />*/}
            <Box p="6">
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={1}
              >
                {props.movie.title} {props.movie.rating}
              </Box>

              <Box>{props.movie.year}</Box>

              <Box display="flex" mt="2" alignItems="center">
                <StarIcon color="#FAD02C" />
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                  {props.movie.rating}
                </Box>
              </Box>
              <Box>
                {/* Now it comes the modal dialog */}
                <Button onClick={onOpen} marginTop="10px" size="sm">
                  Learn more...
                </Button>

                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>{props.movie.title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <Text>Here it comes the description of the movie</Text>
                      <Text>DIRECTOR</Text>
                      <Text>ACTORS</Text>
                      <Text>Rating: {props.movie.rating}</Text>
                    </ModalBody>

                    <ModalFooter>
                      <Button colorScheme="green" mr={3} onClick={onClose}>
                        Close
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </Box>
            </Box>
          </Box>
        )}

        <MovieControls type={props.type} movie={props.movie} />
      </div>
    </div>
  );
};

export default MovieCard;
