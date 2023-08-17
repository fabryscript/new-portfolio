"use client";

import React from "react";
import { Heading, Text, Box } from "@chakra-ui/react";

export function AboutMe({
  aboutme,
}: {
  aboutme: React.RefObject<HTMLHeadingElement>;
}) {
  return (
    <Box
      display={"grid"}
      gridTemplateColumns={"repeat(12, 1fr)"}
      mt={{
        xxsm: "1rem",
        xl: "4rem",
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
        ref={aboutme}
      >
        about me
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
        I am an experienced frontend developer specializing in web development.{" "}
        <br />
        <br /> My expertise lies in utilizing technologies such as TypeScript,
        React, and Vue to craft high-performance, contemporary web applications.{" "}
        <br />
        <br /> Beyond my professional pursuits, I am fond of music and video
        games. During my leisure time, I channel my passion into playing the
        piano and drums.
      </Text>
    </Box>
  );
}
