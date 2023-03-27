import useDirectory from "@/hooks/useDirectory";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Flex,
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuList,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { TiHome } from "react-icons/ti";
import Communities from "./Communities";

const UserMenu: React.FC = () => {
  const { colorMode } = useColorMode();
  const { directoryState, toggleMenuOpen } = useDirectory();
  return (
    <Menu isOpen={directoryState.isOpen}>
      <MenuButton
        padding={"0px 4px"}
        cursor={"pointer"}
        mr={2}
        ml={{ base: 0, md: 2 }}
        borderRadius={2}
        _hover={{
          outline: "1px solid",
          outlineColor: colorMode === "dark" ? "gray.500" : "gray.200",
          color: "gray.500",
        }}
        onClick={toggleMenuOpen}
      >
        <Flex
          align={"center"}
          justify={"space-between"}
          width={{ base: "auto", lg: "200px" }}
        >
          <Flex align={"center"} justifyContent="center">
            {directoryState.selectedMenuItem.imageURL ? (
              <Image
                src={directoryState.selectedMenuItem.imageURL}
                borderRadius={"full"}
                boxSize={"24px"}
                mr={2}
              />
            ) : (
              <Icon
                fontSize={24}
                mr={{ base: 1, md: 2 }}
                color={directoryState.selectedMenuItem.iconColor}
                as={directoryState.selectedMenuItem.icon}
              />
            )}
            <Flex display={{ base: "none", lg: "flex" }}>
              <Text fontWeight={600} fontSize={"10pt"}>
                {directoryState.selectedMenuItem.displayText}
              </Text>
            </Flex>
          </Flex>
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList padding={0} mt={1}>
        <Communities />
      </MenuList>
    </Menu>
  );
};
export default UserMenu;
