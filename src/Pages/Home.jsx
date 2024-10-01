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
          <Text as={"h3"} size={"lg"} fontSize={[15, 15, 20, 25]}>
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

        <Box
          textAlign={{ base: "center", md: "center" }}
          m={2}
          fontFamily={"sans-serif"}
        >
          <Text as="h3" size="lg" fontSize={[15, 15, 20, 25]}>
            {windowWidth <= 768
              ? "___________ AS SEEN ON SHARK TANK_________"
              : "_____________________AS SEEN ON SHARK TANK_______________________"}
          </Text>
        </Box>
        <Box p={1}>
          <img
            src="https://static1.lenskart.com/media/desktop/img/Dec22/1-Dec/Homepage-Banner-web.gif"
            alt="AS SEEN ON SHARK TANK"
          />
        </Box>
        <Box
          textAlign={{ base: "center", md: "center" }}
          m={2}
          fontFamily={"sans-serif"}
        >
          <Text as="h3" size="lg" fontSize={[15, 15, 20, 25]}>
            {windowWidth <= 768
              ? "----AS SEEN ON MOUNI ROY----"
              : "____________________________AS SEEN ON MOUNI ROY____________________________"}
          </Text>
        </Box>
        <Box p={1}>
          <Link to={"/mouniroyproduct"}>
            <img
              src=" https://static1.lenskart.com/media/desktop/img/23may/cannes/web.gif"
              alt="Mouni Roy"
            />
          </Link>
        </Box>
        <Box
          textAlign={{ base: "center", md: "center" }}
          m={2}
          fontFamily={"sans-serif"}
        >
          <Text as="h3" size="lg" fontSize={[15, 15, 20, 25]}>
            {windowWidth <= 768
              ? "_____AS SEEN ON KARAN JOHAR_____"
              : "________________________AS SEEN ON KARAN JOHAR_________________________"}
          </Text>
        </Box>
        <Box p={1}>
          <Link to={"/karanjoharproduct"}>
            <img
              src=" https://static1.lenskart.com/media/desktop/img/Dec22/Web_banner.gif"
              alt="AS SEEN ON KARAN JOHAR"
            />
          </Link>
        </Box>
      </Box>
    </>
  );
}

export default Home
