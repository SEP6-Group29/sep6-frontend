import React, { useState } from "react";
import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Heading,
  Grid,
  Box,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import Movie from "../models/Movie.model";
import MovieService from "../services/movie.service";

const MovieStats = (props: any) => {
  const movieService: MovieService = new MovieService();
  const [movieDec, setMovieDec] = useState<Movie[]>([]);

  console.log(movieDec);

  return (
    <div>
      <Tabs
        align="center"
        marginTop="20px"
        variant="soft-rounded"
        colorScheme="green"
      >
        <TabList>
          <Tab
            onClick={async () => {
              fetch(
                `https://movieapp-sep6.azurewebsites.net/api/movienames/top/8`
              )
                .then((res) => res.json())
                .then((data) => setMovieDec(data));
            }}
            id="8"
          >
            80's
          </Tab>
          <Tab
            onClick={async () => {
              fetch(
                `https://movieapp-sep6.azurewebsites.net/api/movienames/top/9`
              )
                .then((res) => res.json())
                .then((data) => setMovieDec(data));
            }}
            id="9"
          >
            90's
          </Tab>
          <Tab
            onClick={async () => {
              fetch(
                `https://movieapp-sep6.azurewebsites.net/api/movienames/top/0`
              )
                .then((res) => res.json())
                .then((data) => setMovieDec(data));
            }}
            id="0"
          >
            00's
          </Tab>
          <Tab
            onClick={async () => {
              fetch(
                `https://movieapp-sep6.azurewebsites.net/api/movienames/top/10`
              )
                .then((res) => res.json())
                .then((data) => setMovieDec(data));
            }}
            value={"10"}
          >
            10's
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Heading>Best movies of 1980's decade</Heading>
          </TabPanel>
          <TabPanel>
            <Heading>Best movies of 1990's decade</Heading>
          </TabPanel>
          <TabPanel>
            <Heading>Best movies of 2000's decade</Heading>
          </TabPanel>
          <TabPanel>
            <Heading>Best movies of 2010's decade</Heading>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <div>
        <Grid
          templateColumns="repeat(5, 1fr)"
          gap={4}
          paddingTop="20px"
          margin="35px"
        >
          {movieDec
            ? movieDec.map((item) => (
                <Box
                  key={item.id}
                  maxW="sm"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  marginLeft="20px"
                >
                  <img src={item.poster} alt={item.title} />
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
                      <StarIcon color="teal.500" />
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
    </div>
  );
};

export default MovieStats;
