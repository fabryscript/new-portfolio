"use client";

import React from "react";
import { Box, Button, Img } from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  return (
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
        fontSize={"1.5rem"}
        rounded={"2xl"}
        color="#AE29B3"
      >
        Menu
      </Button>
    </Box>
  );
}

export default Navbar;
