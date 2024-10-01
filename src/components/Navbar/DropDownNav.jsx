import React, { useState } from 'react'
import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
  import { AiOutlineRight } from "react-icons/ai";
const DropDownNav = () => {
  const [hoverOne,setHoverOne]= useState(false)
  const [hoverTwo , setHoverTwo] = useState(false)
  const [hoverThree, setHoverThree] = useState(false)
  // const [hoverFour , setHoverFour] = useState(false)
  // cont[hoverFive, setHoverFive] = useState(false)
  
  // const [hoverSix,setHoverSix] = useState(false)
  // const [hoverSeven, setHoverSeven] = useState(false)
  const isHoverOneTrue = () => {
    setHoverOne(true)
  }
  const isHoverOneFalse = () => {
    setHoverOne(false)
  }
  const isHoverTwoTrue = () => {
    setHoverTwo(true)
  }
  const isHoverTwoFalse = () => {
    setHoverTwo(false)
  }

  const isHoverThreeTrue = () => {
    setHoverThree(true)
  }

  const isHoverThreeFalse = () => {
    setHoverThree(false)
  }
  return (
    <Flex>
      <Flex>
        <Popover
          isOpen={hoverOne}
          onClose={() => setHoverOne(false)}
          onOpen={() => setHoverOne(true)}
        >
          <PopoverTrigger>
            <Button
              onMouseEnter={isHoverOneTrue}
              onMouseLeave={isHoverOneFalse}
              pt={"5"}
              pr={"1"}
              pb={5}
              bg={"#FBF9F7"}
              _hover={{ borderBottom: "2px solid blue" }}
              borderRadius={"none"}
            >
              EYEGLASSES
            </Button>
          </PopoverTrigger>
          <PopoverContent
            w={"1300px"}
            onMouseEnter={isHoverOneTrue}
            onMouseLeave={isHoverOneFalse}
          >
            <PopoverBody>
              <SimpleGrid
                gridTemplateColumns={"repeat(2,1fr)"}
                gap={3}
                color={"61608B"}
                alignItems={"start"}
              >
                <SimpleGrid w={"300px"}>
                  {/*01  SELECT CATEGORY         */}
                  <SimpleGrid gap={3}>
                    <Text fontSize={"1.2rem"} color={"black"} ml={10}>
                      SELECT CATEGORY
                    </Text>

                    {/* Mens section       */}
                    <NavLink to={"/menproduct"}>
                      <Flex gap={3}>
                        <Avatar
                          m="20px"
                          name="Dan Abrahmov"
                          src="https://static.lenskart.com/media/desktop/img/men_pic.png"
                          alt="men"
                        />
                        <Box mt={7}>Men</Box>
                        <Box mt={"8"}>
                          <AiOutlineRight size="10px" />
                        </Box>
                        <Box mt={4} w={"160px"}>
                          {" "}
                          CLASSIC EYE-GLASSES{" "}
                          <Text>
                            Starting From ₹ <span>1199</span>
                          </Text>
                        </Box>
                        <Box mt={8}>
                          <AiOutlineRight size="10px" />
                        </Box>
                      </Flex>
                    </NavLink>
                    {/* Women section */}
                    <NavLink to={"/womenproduct"}>
                      <Flex gap={2}>
                        <Avatar
                          ml="20px"
                          name="Kola Tioluwani"
                          src="https://static.lenskart.com/media/desktop/img/women_pic.png"
                          alt="women"
                        />
                        <Box mt={3} ml={3}>
                          Women
                        </Box>
                        <Box mt={5}>
                          <AiOutlineRight size="10px" />
                        </Box>
                        <Box mt={1}>
                          CLASSIC EYE-GLASSES
                          <Text>
                            Starting From ₹ <span>1199</span>
                          </Text>
                        </Box>
                        <Box mt={5}>
                          <AiOutlineRight size="10px" />
                        </Box>
                      </Flex>
                    </NavLink>

                    {/* Kids section */}

                    <NavLink to={"/kidproduct"}>
                      <Flex gap={2}>
                        <Avatar
                          ml="20px"
                          mt={2}
                          name="Kent Dodds"
                          src="https://static.lenskart.com/media/desktop/img/kid_pic.png"
                          alt="kid"
                        />
                        <Box mt={5} ml={5}>
                          Kids
                        </Box>
                        <Box mt={7} ml={3}>
                          <AiOutlineRight size="10px" />
                        </Box>
                        <Box mt={1} ml={3} w={"160px"}>
                          CLASSIC EYE-GLASSES
                          <Text>
                            Starting From ₹ <span>1199</span>
                          </Text>
                        </Box>
                        <Box mt={5}>
                          <AiOutlineRight size="10px" />
                        </Box>
                      </Flex>
                    </NavLink>
                  </SimpleGrid>
                </SimpleGrid>

                <SimpleGrid
                  gridTemplateColumns={"repeat(4,1fr)"}
                  gap={3}
                  color={"61608B"}
                  alignItems={"start"}
                  w={"100%"}
                >
                  {/* Our Top Picks */}
                  <SimpleGrid>
                    <Text fontSize={"1.3rem"} color={"black"}>
                      Our Top Picks
                    </Text>
                    <SimpleGrid gap={3} mt={5}>
                      <Text
                        fontSize={"small"}
                        color="gray"
                        _hover={{ color: "black" }}
                        transition="color 0.1s"
                      >
                        New Arrivals
                      </Text>
                      <Text
                        fontSize={"small"}
                        color="gray"
                        _hover={{ color: "black" }}
                        transition="color 0.1s"
                      >
                        Best Seller
                      </Text>
                      <Text
                        fontSize={"small"}
                        color="gray"
                        _hover={{ color: "black" }}
                        transition="color 0.1s"
                      >
                        Lenskart BLU Lenses
                      </Text>
                      <Text
                        fontSize={"small"}
                        color="gray"
                        _hover={{ color: "black" }}
                        transition="color 0.1s"
                      >
                        Tinted Eyeglasses
                      </Text>
                      <Text
                        fontSize={"small"}
                        color="gray"
                        _hover={{ color: "black" }}
                        transition="color 0.1s"
                      >
                        Progressive Eyeglasses
                      </Text>
                    </SimpleGrid>
                  </SimpleGrid>

                  {/* Collection */}
                  <SimpleGrid gap={3}>
                    <Text fontSize={"1.3rem"} color={"black"}>
                      Collection
                    </Text>
                    <SimpleGrid gap={3}>
                      <Text
                        fontSize={"small"}
                        color="gray"
                        _hover={{ color: "black" }}
                        transition="color 0.1s"
                      >
                        {" "}
                        Switch Grip
                      </Text>
                      <Text
                        fontSize={"small"}
                        color="gray"
                        _hover={{ color: "black" }}
                        transition="color 0.1s"
                      >
                        {" "}
                        Gulmarg Collection
                      </Text>
                      <Text
                        fontSize={"small"}
                        color="gray"
                        _hover={{ color: "black" }}
                        transition="color 0.1s"
                      >
                        {" "}
                        Urban Edit
                      </Text>
                      <Text
                        fontSize={"small"}
                        color="gray"
                        _hover={{ color: "black" }}
                        transition="color 0.1s"
                      >
                        {" "}
                        Blend Edit
                      </Text>
                      <Text
                        fontSize={"small"}
                        color="gray"
                        _hover={{ color: "black" }}
                        transition="color 0.1s"
                      >
                        {" "}
                        Sleek Steel
                      </Text>
                      <Text
                        fontSize={"small"}
                        color="gray"
                        _hover={{ color: "black" }}
                        transition="color 0.1s"
                      >
                        Switch - Magnetic Clips-On
                      </Text>
                      <Text
                        fontSize={"small"}
                        color="gray"
                        _hover={{ color: "black" }}
                        transition="color 0.1s"
                      >
                        Air Flex
                      </Text>
                      <Text
                        fontSize={"small"}
                        color="gray"
                        _hover={{ color: "black" }}
                        transition="color 0.1s"
                      >
                        {" "}
                        Electro Punk
                      </Text>
                      <Text
                        fontSize={"small"}
                        color="gray"
                        _hover={{ color: "black" }}
                        transition="color 0.1s"
                      >
                        Classic Acetate
                      </Text>
                    </SimpleGrid>
                  </SimpleGrid>

                  {/* Frames */}
                  <SimpleGrid gap={3}>
                    <Text fontSize={"1.3rem"} color={"black"}>
                      Frames
                    </Text>
                    <SimpleGrid gap={3}>
                      <Text
                        fontSize={"small"}
                        color="gray"
                        _hover={{ color: "black" }}
                        transition="color 0.1s"
                      >
                        Rectangle Frames
                      </Text>
                      <Text
                        fontSize={"small"}
                        color="gray"
                        _hover={{ color: "black" }}
                        transition="color 0.1s"
                      >
                        Cabinet Refacing
                      </Text>
                      <Text
                        fontSize={"small"}
                        color="gray"
                        _hover={{ color: "black" }}
                        transition="color 0.1s"
                      >
                        Wayfarer Frames
                      </Text>
                      <Text
                        fontSize={"small"}
                        color="gray"
                        _hover={{ color: "black" }}
                        transition="color 0.1s"
                      >
                        {" "}
                        Round Frames
                      </Text>
                      <Text
                        fontSize={"small"}
                        color="gray"
                        _hover={{ color: "black" }}
                        transition="color 0.1s"
                      >
                        Aviator Frames
                      </Text>
                      <Text
                        fontSize={"small"}
                        color="gray"
                        _hover={{ color: "black" }}
                        transition="color 0.1s"
                      >
                        {" "}
                        Cat-Eye Frames
                      </Text>
                      <Text
                        fontSize={"small"}
                        color="gray"
                        _hover={{ color: "black" }}
                        transition="color 0.1s"
                      >
                        Rimless Frames
                      </Text>
                      <Text
                        fontSize={"small"}
                        color="gray"
                        _hover={{ color: "black" }}
                        transition="color 0.1s"
                      >
                        Halfrim Frames
                      </Text>
                      <Text
                        fontSize={"small"}
                        color="gray"
                        _hover={{ color: "black" }}
                        transition="color 0.1s"
                      >
                        {" "}
                        Geometric Frames
                      </Text>
                    </SimpleGrid>
                  </SimpleGrid>

                  <SimpleGrid gap={3}>
                    <Text fontSize={"1.3rem"} color={"black"}>
                      Brands
                    </Text>
                    <SimpleGrid gap={3}>
                      <Text
                        fontSize={"small"}
                        color="gray"
                        _hover={{ color: "black" }}
                        transition="color 0.1s"
                      >
                        Blinds, Shades & Shutters
                      </Text>
                      <Text
                        fontSize={"small"}
                        color="gray"
                        _hover={{ color: "black" }}
                        transition="color 0.1s"
                      >
                        Cabinet Refacing
                      </Text>
                      <Text
                        fontSize={"small"}
                        color="gray"
                        _hover={{ color: "black" }}
                        transition="color 0.1s"
                      >
                        Custom Closet & Storage Design
                      </Text>
                      <Text
                        fontSize={"small"}
                        color="gray"
                        _hover={{ color: "black" }}
                        transition="color 0.1s"
                      >
                        Garage Door & Opener Installation
                      </Text>
                    </SimpleGrid>
                  </SimpleGrid>
                </SimpleGrid>
              </SimpleGrid>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        <Popover
          isOpen={hoverTwo}
          onClose={() => setHoverTwo(false)}
          onOpen={() => setHoverTwo(true)}
        >
          <PopoverTrigger>
            <Button
              pt={"5"}
              pr={"1"}
              pb={5}
              bg={"#FBF9F7"}
              _hover={{ borderBottom: "2px solid blue" }}
              borderRadius={"none"}
              onMouseEnter={isHoverTwoTrue}
              onMouseLeave={isHoverTwoFalse}
            >
              {" "}
              COMPUTER GLASSES
            </Button>
          </PopoverTrigger>
          <PopoverContent
            w={"1100px"}
            onMouseEnter={isHoverTwoTrue}
            onMouseLeave={isHoverTwoFalse}
          >
            <PopoverBody>
              <SimpleGrid
                gridTemplateColumns={"repeat(2,1fr)"}
                gap={3}
                color={"61608B"}
                alignItems={"start"}
              >
                <SimpleGrid>
                  <SimpleGrid gap={3}>
                    <Text fontSize={"1.2rem"} color={"black"} ml={40}>
                      SELECT CATEGORY
                    </Text>
                    <NavLink to={""}>
                      <Flex gap={3} ml={40}>
                        <Avatar
                          m="20px"
                          name="Dan Abrahmov"
                          src="https://static.lenskart.com/media/desktop/img/men_pic.png"
                          alt="men"
                        />
                        <Box mt={7}>Men</Box>
                        <Box mt={"8"}>
                          <AiOutlineRight size="10px" />
                        </Box>
                        <Box mt={4} w={"160px"}>
                          {" "}
                          CLASSIC EYE-GLASSES{" "}
                          <Text>
                            Starting From ₹ <span>500</span>
                          </Text>
                        </Box>
                        <Box mt={8}>
                          <AiOutlineRight size="10px" />
                        </Box>
                      </Flex>
                    </NavLink>
                    <NavLink>
                      <Flex gap={2} ml={40}>
                        <Avatar
                          ml="20px"
                          name="Kola Tioluwani"
                          src="https://static.lenskart.com/media/desktop/img/women_pic.png"
                          alt="women"
                        />
                        <Box mt={3} ml={3}>
                          Women
                        </Box>
                        <Box mt={5}>
                          <AiOutlineRight size="10px" />
                        </Box>
                        <Box mt={1}>
                          CLASSIC EYE-GLASSES
                          <Text>
                            Starting From ₹ <span>1200</span>
                          </Text>
                        </Box>
                        <Box mt={5}>
                          <AiOutlineRight size="10px" />
                        </Box>
                      </Flex>
                    </NavLink>
                    <NavLink>
                      <Flex gap={2} ml={40}>
                        <Avatar
                          ml="20px"
                          mt={2}
                          name="Kent Dodds"
                          src="https://static.lenskart.com/media/desktop/img/kid_pic.png"
                          alt="kid"
                        />
                        <Box mt={5} ml={5}>
                          Kids
                        </Box>
                        <Box mt={7} ml={3}>
                          <AiOutlineRight size="10px" />
                        </Box>
                        <Box mt={1} ml={3} w={"160px"}>
                          CLASSIC EYE-GLASSES
                          <Text>
                            Starting From ₹ <span>600</span>
                          </Text>
                        </Box>
                        <Box mt={5}>
                          <AiOutlineRight size="10px" />
                        </Box>
                      </Flex>
                    </NavLink>
                  </SimpleGrid>
                </SimpleGrid>
              </SimpleGrid>
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Popover
          isOpen={hoverThree}
          onClose={() => setHoverThree(false)}
          onOpen={() => setHoverThree(true)}
        >
          <PopoverTrigger>
            <Button
              onMouseEnter={isHoverThreeTrue}
              onMouseLeave={isHoverThreeFalse}
              pt={"5"}
              pr={"1"}
              pb={5}
              bg={"#FBF9F7"}
              _hover={{ borderBottom: "2px solid blue" }}
              borderRadius={"none"}
            >
              KIDS GLASSES
            </Button>
          </PopoverTrigger>
          <PopoverContent
            w={"900px"}
            h={"400px"}
            onMouseEnter={isHoverThreeTrue}
            onMouseLeave={isHoverThreeFalse}
          >
            <PopoverBody>
              <Flex gap={40} justifyContent={"Center"} mt={57} ml={70}>
                <NavLink to={"/kidsunglassess"}>
                  <Image
                    className="img_1"
                    src="https://static1.lenskart.com/media/desktop/img/May22/glasses.jpg"
                    alt="kidsIcon_1"
                  />
                  <Text as={"b"} ml={6}>
                    EyeGlassess
                  </Text>
                </NavLink>
                <NavLink to={""}>
                  <Image
                    className="img_2"
                    src="https://static1.lenskart.com/media/desktop/img/May22/computer-glasses.jpg"
                    alt="kidsIcon_2"
                  />
                  <Text as={"b"} ml={6}>
                    EyeGlassess
                  </Text>
                </NavLink>
                <NavLink to={""}>
                  <Image
                    className="img_3"
                    src="https://static1.lenskart.com/media/desktop/img/May22/Sunnies.jpg"
                    alt="kidsIcon_3"
                  />
                  <Text as={"b"} ml={6}>
                    EyeGlassess
                  </Text>
                </NavLink>
              </Flex>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>
    </Flex>
  );
}

export default DropDownNav
