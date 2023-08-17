"use client";

import { Box } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Hero />
      <Footer />
    </Box>
  )
}
