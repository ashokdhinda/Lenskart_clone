import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Box, Image } from "@chakra-ui/react";
import SliderOne from '../components/SliderS/SliderOne';

const Home = () => {
  return (
    <>
      <Navbar />
      <Box overflow={"hidden"}>
        <Box p={1}>
          <Image src="https://static5.lenskart.com/media/uploads/festive-desk-2-29Sep.png" />
        </Box>
        <SliderOne/>
      </Box>
    </>
  );
}

export default Home
