import React from "react";
import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Select,
} from "@chakra-ui/react";

const MovieStats = () => {
  return (
    <>
      <div className="results movie-page">
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList>
            <Tab>80's</Tab>
            <Tab>90's</Tab>
            <Tab>00's</Tab>
            <Tab>10's</Tab>
          </TabList>
          <Select placeholder="Select option">
            <option value="option1">Bar chart</option>
            <option value="option2">Circular</option>
            <option value="option3">Podium</option>
          </Select>
          <TabPanels>
            <TabPanel>
              <p>Best movies of 1980's decade</p>
            </TabPanel>
            <TabPanel>
              <p>Best movies of 1990's decade</p>
            </TabPanel>
            <TabPanel>
              <p>Best movies of 2000's decade</p>
            </TabPanel>
            <TabPanel>
              <p>Best movies of 2010's decade</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </>
  );
};

export default MovieStats;
