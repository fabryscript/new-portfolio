"use client";

import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

export function Vision({}) {
  return (
    <Box
      display={"grid"}
      gridTemplateColumns={"repeat(12, 1fr)"}
      mt={{
        xxsm: "1rem",
        lg: "5rem",
      }}
    >
      <Heading
        fontSize={{
          xxsm: "3rem",
          md: "4rem",
          xl: "5.5rem",
        }}
        bgGradient="linear(to-r, #00B5D8, #AE29B3)"
        bgClip="text"
        gridColumn={{
          xxsm: "3 / span 8",
        }}
        textAlign={"center"}
      >
        vision
      </Heading>
      <Text
        color="#AE29B3"
        fontSize={{
          xxsm: "1rem",
          md: "1.5rem",
          xl: "1.625rem",
        }}
        textAlign={"center"}
        gridColumn={{
          xxsm: "3 / span 8",
          lg: "4 / span 6",
        }}
        mt={{
          xxsm: "1rem",
          xl: "2rem",
        }}
      >
        Harmony is the fundamental concept that drives my overall process of
        delivering the digital products that I make, giving me the opportunity
        to balance my unleashing creativity with the directives that I get.
        <br />
        <br />
        Accessibility is also a crucial element which holds the power to extend
        the usage of my products to potentially everyone.
      </Text>
    </Box>
  );
}
