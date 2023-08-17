"use client";

import React from "react";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Grid,
  Heading,
  Img,
  useDisclosure,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";

const links = [
  {
    link: "https://forms.gle/2cdtWn44Qtcq1iZM6",
    label: "contact me",
  },
  {
    link: "https://github.com/fabryscript",
    label: "github",
  },
];

function Navbar() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        p={"2rem"}
      >
        <Img
          src="/firmozzaBlack.png"
          filter={
            "invert(48%) sepia(97%) saturate(1659%) hue-rotate(153deg) brightness(98%) contrast(101%)"
          }
          w={{ base: "60px", md: "120px" }}
          h={{ base: "60px", md: "120px" }}
        />
        <Button
          variant={"ghost"}
          aria-label="Menu"
          rightIcon={<AiOutlineMenu />}
          size={{ base: "md", md: "lg" }}
          fontWeight={"light"}
          fontSize={{ xxsm: "1rem", md: "1.25rem", xl: "1.625rem" }}
          rounded={"2xl"}
          color="#AE29B3"
          onClick={onOpen}
        >
          Menu
        </Button>
      </Box>
      <Drawer onClose={onClose} isOpen={isOpen} size={"full"}>
        <DrawerOverlay />
        <DrawerContent bg={"#ededed"}>
          <DrawerCloseButton
            color={"#AE29B3"}
            pr="2rem"
            pt="2rem"
            size={"lg"}
          />
          <DrawerBody display={"flex"} alignItems={"center"}>
            <Grid gridTemplateColumns={"repeat(12, 1fr)"} rowGap={"2rem"}>
              {links.map(({link, label}) => (
                <Heading
                  key={label}
                  as="a"
                  href={link}
                  target="_blank"
                  bgGradient="linear(to-r, #00B5D8, #AE29B3)"
                  bgClip="text"
                  fontSize={{ xxsm: "2.5rem", sm: "3rem" }}
                  gridColumn={{ xxsm: "4 / span 6" }}
                  textAlign={"center"}
                >
                  {label}
                </Heading>
              ))}
              <Img
                src="/geometric/pentagon.png"
                gridColumn={{
                  xxsm: "2 / span 10",
                  md: "3 / span 8",
                  lg: "4 / span 6",
                }}
              />
            </Grid>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Navbar;
