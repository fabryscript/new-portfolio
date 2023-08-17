"use client";

import React, { useRef } from "react";
import { Box, Button, Flex, Grid, Heading, Img, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useParallax } from "react-scroll-parallax";

function Hero() {
  const parallaxScroll = useParallax<HTMLImageElement>({
    rotate: [360, 0],
  });

  const aboutme = useRef<HTMLHeadingElement>(null);

  return (
    <Box p={{ xxsm: "2rem", xsm: "1.5rem" }}>
      <Grid
        gridTemplateColumns={"repeat(12, 1fr)"}
        alignItems={"center"}
        gap={{ xxsm: "0" }}
      >
        <Flex
          gridColumn={{ xxsm: "3 / span 8", xl: "2 / span 5" }}
          textAlign={{ xxsm: "center", xl: "unset" }}
          direction={"column"}
          gap={"4rem"}
        >
          <Flex direction={"column"} gap="2.25rem">
            <Heading
              bgGradient="linear(to-r, #00B5D8, #AE29B3)"
              bgClip="text"
              fontSize={{ xxsm: "3rem", xsm: "3.9rem", md: "5rem", xl: "8rem" }}
            >
              Fabrizio Piperno
            </Heading>
            <motion.div
              whileTap={{
                scale: 0.9,
              }}
            >
              <Button
                variant={"outline"}
                colorScheme="blue"
                transition={"all 1s ease"}
                color={"blue.400"}
                size={"xl"}
                w={{ xxsm: "85%", md: "70%", xl: "80%" }}
                fontSize={{ xxsm: "1rem", md: "1.25rem", xl: "1.625rem" }}
                h={{ xxsm: "3rem", md: "3.5rem", xl: "4.5rem" }}
                onClick={() =>
                  aboutme.current?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Text
                  bgGradient="linear(to-r, #00B5D8, #AE29B3)"
                  bgClip={"text"}
                >
                  discover more
                </Text>
              </Button>
            </motion.div>
          </Flex>
        </Flex>
        <Img
          gridColumn={{
            xxsm: "1 / span 12",
            md: "3 / span 8",
            lg: "4 / span 6",
            xl: "8 / span 5",
          }}
          mt={{ xxsm: "1rem" }}
          ref={parallaxScroll.ref}
          src="/geometric/romboid.png"
        />
      </Grid>
      <Box
        display={"grid"}
        gridTemplateColumns={"repeat(12, 1fr)"}
        mt={{ xxsm: "1rem", xl: "4rem" }}
      >
        <Heading
          fontSize={{ xxsm: "3rem", md: "4rem", xl: "5.5rem" }}
          bgGradient="linear(to-r, #00B5D8, #AE29B3)"
          bgClip="text"
          gridColumn={{ xxsm: "3 / span 8" }}
          textAlign={"center"}
          ref={aboutme}
        >
          about me
        </Heading>
        <Text
          color="#AE29B3"
          fontSize={{ xxsm: "1rem", md: "1.5rem", xl: "1.625rem" }}
          textAlign={"center"}
          gridColumn={{ xxsm: "3 / span 8", lg: "4 / span 6" }}
          mt={{ xxsm: "1rem", xl: "2rem" }}
        >
          I am an experienced frontend developer specializing in web
          development. <br />
          <br /> My expertise lies in utilizing technologies such as TypeScript,
          React, and Vue to craft high-performance, contemporary web
          applications. <br />
          <br /> Beyond my professional pursuits, I am fond of music and video
          games. During my leisure time, I channel my passion into playing the
          piano and drums.
        </Text>
      </Box>
      <Box
        display={"grid"}
        gridTemplateColumns={"repeat(12, 1fr)"}
        mt={{ xxsm: "1rem", lg: "5rem" }}
      >
        <Heading
          fontSize={{ xxsm: "3rem", md: "4rem", xl: "5.5rem" }}
          bgGradient="linear(to-r, #00B5D8, #AE29B3)"
          bgClip="text"
          gridColumn={{ xxsm: "3 / span 8" }}
          textAlign={"center"}
        >
          vision
        </Heading>
        <Text
          color="#AE29B3"
          fontSize={{ xxsm: "1rem", md: "1.5rem", xl: "1.625rem" }}
          textAlign={"center"}
          gridColumn={{ xxsm: "3 / span 8", lg: "4 / span 6" }}
          mt={{ xxsm: "1rem", xl: "2rem" }}
        >
          Harmony is the fundamental concept that drives my overall process of
          delivering the digital products that I make, giving me the opportunity
          to balance my unleashing creativity with the directives that I get.
          <br />
          <br />
          Accessibility is also a crucial element which holds the power to
          extend the usage of my products to potentially everyone.
        </Text>
      </Box>
    </Box>
  );
}

export default Hero;
