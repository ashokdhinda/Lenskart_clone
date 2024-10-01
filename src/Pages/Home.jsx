import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Box, Image,Text } from "@chakra-ui/react";
import SliderOne from '../components/SliderS/SliderOne';
import SliderTwo from '../components/SliderS/SliderTwo';
import { Link } from 'react-router-dom';

const Home = () => {
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "instant"
    })
  })
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
        <SliderTwo />
        <Box
          textAlign={{ base: "center", md: "center" }}
          m={2}
          fontFamily={"sans-serif"}
        >
          <Text as={"h3"} size={"lg"} fontSize={[15, 15, 20, 25]} >
            {windowWidth <= 768
              ? "_____________PREMIUM EYEWEAR_____________"
              : "______________________________________PREMIUM EYEWEAR___________________________________"}
          </Text>
        </Box>
        <Box p={1}>
          <Link to={"/premiumproduct"}>
            <img
              src="https://static1.lenskart.com/media/desktop/img/16-sep-24/r1.jpeg"
              alt="PREMIUM EYEWEAR-"
            />
          </Link>
        </Box>
      </Box>
    </>
  );
}

export default Home
