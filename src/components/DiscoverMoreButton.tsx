import { Button, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

export function DiscoverMoreButton({
  aboutme,
}: {
  aboutme: React.RefObject<HTMLHeadingElement>;
}) {
  return (
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
        w={{
          xxsm: "85%",
          md: "70%",
          xl: "80%",
        }}
        fontSize={{
          xxsm: "1rem",
          md: "1.25rem",
          xl: "1.625rem",
        }}
        h={{
          xxsm: "3rem",
          md: "3.5rem",
          xl: "4.5rem",
        }}
        onClick={() =>
          aboutme.current?.scrollIntoView({
            behavior: "smooth",
          })
        }
      >
        <Text bgGradient="linear(to-r, #00B5D8, #AE29B3)" bgClip={"text"}>
          discover more
        </Text>
      </Button>
    </motion.div>
  );
}
