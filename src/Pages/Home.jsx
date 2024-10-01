import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Box, Image } from "@chakra-ui/react";
import SliderOne from '../components/SliderS/SliderOne';
import SliderTwo from '../components/SliderS/SliderTwo';

const Home = () => {
  return (
    <>
      <Navbar />
      <Box overflow={"hidden"}>
        <Box p={1}>
          <Image src="https://static5.lenskart.com/media/uploads/festive-desk-2-29Sep.png" />
        </Box>
        <SliderOne />
        <Box p={1}>
          <img
            src="https://static1.lenskart.com/media/desktop/img/Apr22/Bannerforexport.jpg"
            alt="Do banner"
          />
        </Box>
        <SliderTwo/>
      </Box>
    </>
  );
}

export default Home
