import { extendTheme } from "@chakra-ui/react";
import { Bodoni_Moda } from "next/font/google";
import localFont from "next/font/local";

const bodoniModaItalic = localFont({
  display: "swap",
  src: [
    { path: "../../public/fonts/BodoniModa-Italic.ttf", weight: "400", style: "normal" },
  ],
  variable: "--font-criteria",
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
        bg: "#ededed"
      }
    })
  },
  breakpoints: {
    xxsm: "320px",
    xsm: "375px",
    sm: "425px",
    md: "768px",
    lg: "1024px",
    xl: "1440px",
    xxl: "2560px"
  }
});
