import { SearchIcon } from "@chakra-ui/icons";
import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";

type SearchInputProps = {};

const SearchInput: React.FC<SearchInputProps> = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex flexGrow={1} mr="2" ml="2" align={"center"} maxWidth={"760px"}>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" mb={1.5} />}
        />
        <Input
          placeholder="Search Reddit"
          bg={colorMode === "dark" ? "gray.700" : "gray.50"}
          fontSize={"10pt"}
          _placeholder={{
            color: colorMode === "dark" ? "gray.50" : "gray.500",
          }}
          _hover={{
            bg: colorMode === "dark" ? "gray.600" : "white",
            border: "3px solid",
            borderColor: "blue.500",
          }}
          _focus={{
            outline: "none",
            border: "2px solid",
            borderColor: "blue.500",
          }}
          height="34px"
        />
      </InputGroup>
    </Flex>
  );
};
export default SearchInput;
