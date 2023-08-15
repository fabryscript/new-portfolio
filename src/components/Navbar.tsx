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
      <Img src="/firmozza.png" w="120px" h="120px" />
      <Button
        variant={"ghost"}
        aria-label="Menu"
        rightIcon={<AiOutlineMenu />}
        size="lg"
        fontWeight={"light"}
        fontSize={"1.5rem"}
        rounded={"2xl"}
      >
        Menu
      </Button>
    </Box>
  );
}

export default Navbar;
