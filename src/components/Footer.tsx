"use client";

import React from "react";
import {
  Box,
  Flex,
  Stack,
  ButtonGroup,
  IconButton,
  Text,
  Spacer,
  Img,
} from "@chakra-ui/react";
import {
  FaGithub,
  FaInstagram,
  FaReddit,
  FaTwitch,
  FaTwitter,
} from "react-icons/fa";

interface FooterProps {}

const socialLinks = [
  {
    link: "https://github.com/fabryscript/",
    label: "GitHub",
    icon: <FaGithub />,
  },
  {
    link: "https://instagram.com/fabryscript",
    label: "Instagram",
    icon: <FaInstagram />,
  },
  {
    link: "https://www.reddit.com/user/Fabry_04",
    label: "Reddit",
    icon: <FaReddit />,
  },
  {
    link: "https://www.twitch.tv/fabryscript",
    label: "Twitch",
    icon: <FaTwitch />,
  },
  {
    link: "https://twitter.com/fabryscript",
    label: "Twitter",
    icon: <FaTwitter />,
  },
];

const Footer: React.FC<FooterProps> = () => {
  return (
    <Box as="footer" role="contentinfo" py="6" color="#111">
      <Flex
        direction={{ base: "column", md: "row" }}
        maxW={{ base: "xl", md: "7xl" }}
        mx="auto"
        px={{ base: "6", md: "8" }}
        align="center"
      >
        <Stack
          my={{ base: "6", md: 0 }}
          direction={{ base: "column", md: "row" }}
          marginStart={{ md: "8" }}
          fontSize="sm"
          spacing={{ base: "2", md: "8" }}
          textAlign={{ base: "center", md: "start" }}
        >
          <Text
            fontSize={"1rem"}
            bgGradient="linear(to-r, #00B5D8, #AE29B3)"
            bgClip="text"
          >
            Made with
            <a href="https://en.wikipedia.org/wiki/Love"> ❤ </a> in{" "}
            <a href="https://en.wikipedia.org/wiki/Milazzo">Milazzu</a>{" "}
          </Text>
        </Stack>
        <Spacer />
        <Box as={"a"} href="/">
          <Img
            src={"/firmozzaBlack.png"}
            maxW={"124px"}
            filter={
              "invert(19%) sepia(100%) saturate(2472%) hue-rotate(285deg) brightness(95%) contrast(90%)"
            }
          />
        </Box>
        <Spacer />
        <ButtonGroup marginStart={{ md: "auto" }} variant="ghost">
          {socialLinks.map(({ icon, label, link }) => (
            <IconButton
              key={label}
              as="a"
              href={link}
              aria-label={label}
              icon={icon}
              color={"#AE29B3"}
            />
          ))}
        </ButtonGroup>
      </Flex>
    </Box>
  );
};

export default Footer;
