import { ComponentStyleConfig } from "@chakra-ui/react";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: "60px",
    fontSize: "10pt",
    fontWeight: 700,
    _focus: {
      boxShadow: "none",
    },
  },
  sizes: {
    sm: {
      fontSize: "8pt",
    },
    md: {
      fontSize: "10pt",
    },
  },
  variants: {
    solid: {
      color: "white",
      height: "28px",
      bg: "blue.600",
      _hover: {
        bg: "blue.500",
      },
    },
    outline: {
      color: "blue.600",
      height: "28px",
      border: "1px solid",
      borderColor: "blue.600",
    },
    oauth: {
      height: "34px",
      border: "1px solid",
      borderColor: "gray.300",
    },
    theme: {
      height: "28px",
      width: "28px",
      borderRadius: "5px",
    },
  },
};
