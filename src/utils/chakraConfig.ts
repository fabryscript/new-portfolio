import { extendTheme } from "@chakra-ui/react";
import { Quicksand, Bodoni_Moda } from "next/font/google";
import localFont from "next/font/local";

const bodoniModaItalic = localFont({
  display: "swap",
  src: [
    { path: "../../public/fonts/BodoniModa-Italic.ttf", weight: "400", style: "normal" },
  ],
  variable: "--font-criteria",
});

export const quicksand = Quicksand({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const bodoni = Bodoni_Moda({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const theme = extendTheme({
  fonts: {
    heading: bodoniModaItalic.style.fontFamily,
    body: bodoni.style.fontFamily,
  },
  styles: {
    global: () => ({
      body: {
        bg: "#121212"
      }
    })
  }
});
