import { Flex, Icon, useColorMode } from "@chakra-ui/react";
import React from "react";
import { BsArrowUpRightCircle, BsChatDots, BsSun } from "react-icons/bs";
import { GrAdd } from "react-icons/gr";
import {
  IoFilterCircleOutline,
  IoNotificationsOutline,
  IoVideocamOutline,
} from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";

const Icons: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex>
      <Flex
        display={{ base: "none", md: "flex" }}
        align={"center"}
        borderRight={"1px solid"}
        borderColor={"gray.200 "}
      >
        <Flex
          mr={1.5}
          mt={1.5}
          padding={1}
          cursor={"pointer"}
          borderRadius={4}
          _hover={{ bg: colorMode === "light" ? "gray.200" : "gray.600" }}
        >
          <Icon as={BsArrowUpRightCircle} fontSize={20} />
        </Flex>
        <Flex
          mr={1.5}
          mt={1.5}
          padding={1}
          cursor={"pointer"}
          borderRadius={4}
          _hover={{ bg: colorMode === "light" ? "gray.200" : "gray.600" }}
        >
          <Icon as={IoFilterCircleOutline} fontSize={23} />
        </Flex>
        <Flex
          mr={1.5}
          mt={1.5}
          padding={1}
          cursor={"pointer"}
          borderRadius={4}
          _hover={{ bg: colorMode === "light" ? "gray.200" : "gray.600" }}
        >
          <Icon as={IoVideocamOutline} fontSize={23} />
        </Flex>
      </Flex>
      <>
        <Flex
          ml={1.5}
          mr={1.5}
          mt={1.5}
          padding={1}
          cursor={"pointer"}
          borderRadius={4}
          _hover={{ bg: colorMode === "light" ? "gray.200" : "gray.600" }}
        >
          <Icon as={BsChatDots} fontSize={20} />
        </Flex>
        <Flex
          mr={1.5}
          mt={1.5}
          padding={1}
          cursor={"pointer"}
          borderRadius={4}
          _hover={{ bg: colorMode === "light" ? "gray.200" : "gray.600" }}
        >
          <Icon as={IoNotificationsOutline} fontSize={20} />
        </Flex>
      </>
    </Flex>
  );
};
export default Icons;
