import { extendTheme } from "@chakra-ui/react";
import { Button } from "./button";
import { Modal } from "./modal";
import { Menu } from "./menu";
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
  disableTransitionOnChange: false,
};

export const theme = extendTheme({
  config,
  colors: {
    brand: {
      100: "#ff3c00",
    },
  },
  fonts: {
    body: "Open Sans, sans-serif",
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === "dark" ? "gray.800" : "gray.200",
      },
    }),
  },
  components: {
    Button,
    Modal,
    Menu,
  },
});
