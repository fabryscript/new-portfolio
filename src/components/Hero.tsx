"use client";

import { Box, Button, Flex, Grid, Heading, Img, Text } from "@chakra-ui/react";
import React from "react";
import { BsArrowDown } from "react-icons/bs";

function Hero() {
  return (
    <Box p="2rem">
      <Grid
        gridTemplateColumns={"repeat(12, 1fr)"}
        alignItems={"center"}
        gap={{ base: "2rem", md: "unset" }}
      >
        <Flex
          gridColumn={{ base: "3 / span 8", md: "2 / span 4" }}
          textAlign={{ base: "center", md: "unset" }}
          direction={"column"}
          gap={"4rem"}
        >
          <Flex direction={"column"} gap="2.25rem">
            <Heading fontSize={{ base: "4rem", md: "7rem" }}>
              Fabrizio Piperno
            </Heading>
            <Text fontSize={"2rem"}>web developer based in Milazzo, Italy.</Text>
          </Flex>
          
        </Flex>
        <Img
          gridColumn={{ base: "3 / span 8", md: "8 / span 5" }}
          src="/geometric/two_2.png"
        />
      </Grid>
      <Box mt={{ md: "2rem" }}>
        <Text>web developer based in Milazzo, Italy.</Text>
      </Box>
    </Box>
  );
}

export default Hero;
