"use client";

import { Vision } from "./Vision";
import { AboutMe } from "./AboutMe";
import { DiscoverMoreButton } from "./DiscoverMoreButton";
import React, { useRef } from "react";
import { Box, Flex, Grid, Heading, Img } from "@chakra-ui/react";
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
            <DiscoverMoreButton aboutme={aboutme} />
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
      <AboutMe aboutme={aboutme} />
      <Vision />
    </Box>
  );
}

export default Hero;
