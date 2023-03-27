import { authModalState } from "@/atoms/authModalAtom";
import { auth } from "@/firebase/clientApp";
import {
  Flex,
  Menu,
  MenuButton,
  Icon,
  Text,
  MenuDivider,
  MenuItem,
  MenuList,
  useColorMode,
} from "@chakra-ui/react";
import { FaRedditSquare } from "react-icons/fa";
import { IoSparkles } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLogin } from "react-icons/md";
import { signOut, User } from "firebase/auth";
import React from "react";
import { useSetRecoilState } from "recoil";
import { ChevronDownIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import ToggleTheme from "./ToggleTheme";

type UserMenuProps = {
  user?: User | null;
};

const UserMenu: React.FC<UserMenuProps> = ({ user }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const setAuthModalState = useSetRecoilState(authModalState);
  const LogOut = async () => {
    await signOut(auth);
  };
  return (
    <Menu>
      <MenuButton
        padding={"0px 6px"}
        cursor={"pointer"}
        borderRadius={2}
        _hover={{
          outline: "1px solid",
          outlineColor: colorMode === "dark" ? "gray.500" : "gray.200",
        }}
      >
        <Flex align={"center"}>
          <Flex align={"center"}>
            {user ? (
              <>
                <Icon
                  as={FaRedditSquare}
                  fontSize={24}
                  mr={1}
                  color={"gray.400"}
                />
                <Flex
                  direction={"column"}
                  display={{ base: "none", lg: "flex" }}
                  fontSize={"8pt"}
                  align={"flex-start"}
                  mr={8}
                >
                  <Text>{user?.displayName || user.email?.split("@")[0]}</Text>
                  <Flex align={"center"}>
                    <Icon as={IoSparkles} color={"brand.100"} mr={1} />
                    <Text color={"gray.400"}>1 karma</Text>
                  </Flex>
                </Flex>
              </>
            ) : (
              <Icon as={VscAccount} fontSize={24} color={"gray.400"} mr={1} />
            )}
          </Flex>
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList padding={0} mt={1}>
        {user ? (
          <>
            <MenuItem
              fontSize={"10pt"}
              fontWeight={700}
              _hover={{ bg: "blue.500", color: "white" }}
              onClick={() => toggleColorMode()}
            >
              <Flex align={"center"} justifyContent={"center"}>
                {colorMode === "dark" ? (
                  <SunIcon fontSize={18} mr={2} />
                ) : (
                  <MoonIcon fontSize={18} mr={2} />
                )}
                <Text>{colorMode === "dark" ? "Light Mode" : "Dark Mode"}</Text>
              </Flex>
            </MenuItem>
            <MenuDivider />
            <MenuItem
              fontSize={"10pt"}
              fontWeight={700}
              _hover={{ bg: "blue.500", color: "white" }}
            >
              <Flex align={"center"}>
                <Icon as={CgProfile} fontSize={20} mr={2} />
                Profile
              </Flex>
            </MenuItem>
            <MenuDivider />
            <MenuItem
              fontSize={"10pt"}
              fontWeight={700}
              _hover={{ bg: "blue.500", color: "white" }}
              onClick={LogOut}
            >
              <Flex align={"center"}>
                <Icon as={MdOutlineLogin} fontSize={20} mr={2} />
                Log out
              </Flex>
            </MenuItem>
          </>
        ) : (
          <>
            <MenuItem
              fontSize={"10pt"}
              fontWeight={700}
              _hover={{ bg: "blue.500", color: "white" }}
              onClick={() => toggleColorMode()}
            >
              <Flex align={"center"} justifyContent={"center"}>
                {colorMode === "dark" ? (
                  <SunIcon fontSize={18} mr={2} />
                ) : (
                  <MoonIcon fontSize={18} mr={2} />
                )}
                <Text>{colorMode === "dark" ? "Light Mode" : "Dark Mode"}</Text>
              </Flex>
            </MenuItem>
            <MenuDivider />
            <MenuItem
              fontSize={"10pt"}
              fontWeight={700}
              _hover={{ bg: "blue.500", color: "white" }}
              onClick={() => setAuthModalState({ open: true, view: "login" })}
            >
              <Flex align={"center"}>
                <Icon as={MdOutlineLogin} fontSize={18} mr={2} />
                Log in / Sign Up
              </Flex>
            </MenuItem>
          </>
        )}
      </MenuList>
    </Menu>
  );
};
export default UserMenu;
