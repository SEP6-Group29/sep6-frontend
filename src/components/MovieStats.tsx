import React, { useEffect, useState } from "react";
import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Select,
  Heading,
  Grid,
  Box,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
const MovieStats = (props: any) => { 
  
  const [movieDec, setMovieDec] = useState<any[]>([]);
 
  useEffect(() => {
    var decade = Tab.id;
    if(decade="8")
    {
    fetch(`https://movieapp-sep6.azurewebsites.net/api/movienames/top/${decade}`)

    .then(res => res.json())
    .then(data => setMovieDec(data))
  }
 else {
  fetch("https://movieapp-sep6.azurewebsites.net/api/movienames/top/9")

    .then(res => res.json())
    .then(data => setMovieDec(data))
}}, [])

// const MovieStats90=(props:any)=>{
//   useEffect(() => {
    
//     fetch("https://movieapp-sep6.azurewebsites.net/api/movienames/top/9")
//     .then(res => res.json())
//     .then(data => setMovieDec(data))
//   }, [])
// }
  console.log(movieDec)


   return (   
   <div>
         <Tabs variant="soft-rounded" colorScheme="green">
           <TabList>
             <Tab onClick={MovieStats} id="8">80's</Tab>
             <Tab onClick={MovieStats} id="9">90's</Tab>
             <Tab id="0">00's</Tab>
             <Tab value={"10"}>10's</Tab>
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
         
       <div>
     
      
       <Grid templateColumns="repeat(4, 1fr)" gap={4} paddingTop="20px">
         {movieDec ? movieDec.map(item=>
         
           <Box
             key={item.id}
             maxW="sm"
             borderWidth="1px"
             borderRadius="lg"
             overflow="hidden"
             marginLeft="20px"
           >
             {/*<Image src={movie.poster} alt={movie.title} />*/}
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
         )
         :null}
       </Grid>
       </div>
       </div>
     
   );
 };
// const MovieStats = () => {
//   return (
//     <>
//       <div className="results movie-page">
//         <Tabs variant="soft-rounded" colorScheme="green">
//           <TabList>
//             <Tab>80's</Tab>
//             <Tab>90's</Tab>
//             <Tab>00's</Tab>
//             <Tab>10's</Tab>
//           </TabList>
//           <Select placeholder="Select option">
//             <option value="option1">Bar chart</option>
//             <option value="option2">Circular</option>
//             <option value="option3">Podium</option>
//           </Select>
//           <TabPanels>
//             <TabPanel>
//               <p>Best movies of 1980's decade</p>
//             </TabPanel>
//             <TabPanel>
//               <p>Best movies of 1990's decade</p>
//             </TabPanel>
//             <TabPanel>
//               <p>Best movies of 2000's decade</p>
//             </TabPanel>
//             <TabPanel>
//               <p>Best movies of 2010's decade</p>
//             </TabPanel>
//           </TabPanels>
//         </Tabs>
//       </div>
//     </>
//   );
// };

export default MovieStats;
