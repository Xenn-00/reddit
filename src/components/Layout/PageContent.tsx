import { Flex, useColorMode } from "@chakra-ui/react";
import React from "react";

type PageContentProps = {
  children: React.ReactNode;
};

const PageContent: React.FC<PageContentProps> = ({ children }) => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      justify={"center"}
      padding={"16px 0px"}
      bg={colorMode === "light" ? "#E2E8F0" : "gray.800"}
      color={colorMode === "light" ? "gray.900" : "#E2E8F0"}
    >
      <Flex
        width={"95%"}
        maxWidth={{ md: "960px", lg: "1284px" }}
        justify={"center"}
      >
        {/* left side */}
        <Flex
          direction={"column"}
          width={{ base: "100%", md: "70%" }}
          mr={{ base: 0, md: 6 }}
        >
          {children && children[0 as keyof typeof children]}
        </Flex>
        {/* right side */}
        <Flex
          direction={"column"}
          display={{ base: "none", md: "flex" }}
          flexGrow={1}
        >
          {children && children[1 as keyof typeof children]}
        </Flex>
      </Flex>
    </Flex>
  );
};
export default PageContent;
