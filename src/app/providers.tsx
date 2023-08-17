// app/providers.tsx
"use client";

import { theme } from "@/utils/chakraConfig";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { ParallaxProvider } from "react-scroll-parallax";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <ParallaxProvider>{children}</ParallaxProvider>
      </ChakraProvider>
    </CacheProvider>
  );
}
